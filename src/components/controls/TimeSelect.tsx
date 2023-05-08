import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material'
import {
    addHours,
    eachHourOfInterval,
    endOfDay,
    format,
    startOfDay,
} from 'date-fns'
import { ru } from 'date-fns/locale'
import React from 'react'
import { IBookingData } from '../../interfaces'
import { TooltipWrapper } from '../core'

export const TimeSelect: React.FC<{
    bookingData: IBookingData
    setBookingData: React.Dispatch<React.SetStateAction<IBookingData>>
}> = ({ bookingData, setBookingData }) => {
    const arrayOfStartIntervals = (startDate?: Date) => {
        if (bookingData.bookingDate) {
            const arr =
                new Date().getDay() === bookingData.bookingDate.getDay()
                    ? eachHourOfInterval({
                          start: startDate ? startDate : new Date(),
                          end: endOfDay(bookingData.bookingDate),
                      })
                    : eachHourOfInterval({
                          start: startDate
                              ? startDate
                              : startOfDay(bookingData.bookingDate),
                          end: endOfDay(bookingData.bookingDate),
                      })
            return arr
        }

        return []
    }

    const timeSelectFormatter = (timeToFormat: Date): string => {
        return format(new Date(timeToFormat), 'HH:mm', {
            locale: ru,
        })
    }

    const renderTimeSelectOptions = (intervals: Date[]) => {
        return intervals.map((time) => {
            const timeString = time.toString()
            return (
                <MenuItem key={timeString} value={timeString}>
                    {timeSelectFormatter(time)}
                </MenuItem>
            )
        })
    }

    const handleChangeForStart = (e: SelectChangeEvent) => {
        setBookingData((prev) => {
            return { ...prev, bookingTimeStart: e.target.value }
        })
    }

    const handleChangeForEnd = (e: SelectChangeEvent) => {
        setBookingData((prev) => {
            return { ...prev, bookingTimeEnd: e.target.value }
        })
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxWidth: 300,
            }}
        >
            <TooltipWrapper
                isActive={!bookingData.bookingDate}
                text="Сначала выберите дату"
            >
                <FormControl>
                    <InputLabel id="startSelect">
                        Выберите время начала
                    </InputLabel>
                    <Select
                        disabled={!bookingData.bookingDate}
                        labelId="startSelect"
                        id="startSelect"
                        value={bookingData.bookingTimeStart}
                        label="Выберите время начала"
                        onChange={handleChangeForStart}
                    >
                        {renderTimeSelectOptions(arrayOfStartIntervals())}
                    </Select>
                </FormControl>
            </TooltipWrapper>

            <TooltipWrapper
                isActive={!bookingData.bookingTimeStart}
                text="Сначала выберите время начала"
            >
                <FormControl>
                    <InputLabel id="endSelect">
                        Выберите время окончания
                    </InputLabel>
                    <Select
                        disabled={!bookingData.bookingTimeStart}
                        labelId="endSelect"
                        id="endSelect"
                        value={bookingData.bookingTimeEnd}
                        label="Выберите время окончания"
                        onChange={handleChangeForEnd}
                    >
                        {bookingData.bookingTimeStart &&
                            renderTimeSelectOptions(
                                arrayOfStartIntervals(
                                    addHours(
                                        new Date(bookingData.bookingTimeStart),
                                        1
                                    )
                                )
                            )}
                    </Select>
                </FormControl>
            </TooltipWrapper>
        </Box>
    )
}

export default TimeSelect
