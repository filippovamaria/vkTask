import React from 'react'
import { IBookingData } from '../../interfaces'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ru } from 'date-fns/locale'
import { TooltipWrapper } from '../core'
import { Box, TextField } from '@mui/material'

const style = { display: 'flex', flexDirection: 'column', maxWidth: 300 }

export const BookingDatePicker: React.FC<{
    bookingDate: Date | null
    prevControlData: string
    setBookingData: React.Dispatch<React.SetStateAction<IBookingData>>
}> = ({ bookingDate, prevControlData, setBookingData }) => {
    const handleChangeForBookingDate = (value: Date | null) => {
        setBookingData((prev) => {
            return {
                ...prev,
                bookingTimeStart: '',
                bookingTimeEnd: '',
                bookingDate: value,
            }
        })
    }

    return (
        <TooltipWrapper
            isActive={!prevControlData}
            text="Сначала выберите переговорную"
        >
            <Box sx={style}>
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={ru}
                >
                    <DatePicker
                        label="Выберите дату"
                        disablePast
                        disabled={!prevControlData}
                        value={bookingDate}
                        onChange={handleChangeForBookingDate}
                        slotProps={{
                            textField: {
                                placeholder: 'Дата бронирования',
                            }
                        }}
                    />
                </LocalizationProvider>
            </Box>
        </TooltipWrapper>
    )
}

export default BookingDatePicker
