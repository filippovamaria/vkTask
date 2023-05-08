import React from 'react'
import { IBookingData } from '../../interfaces'
import {
    SelectChangeEvent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material'
import { TooltipWrapper } from '../core'

export const MeetingRoomSelect: React.FC<{
    meetingRoomNumber: string
    prevControlData: string
    setBookingData: React.Dispatch<React.SetStateAction<IBookingData>>
}> = ({ meetingRoomNumber, prevControlData, setBookingData }) => {
    const handleChangeForMeetingRoom = (event: SelectChangeEvent) => {
        setBookingData((prev) => {
            return { ...prev, meetingRoomNumber: event.target.value }
        })
    }

    return (
        <TooltipWrapper
            isActive={!prevControlData}
            text="Сначала выберите этаж"
        >
            <FormControl>
                <InputLabel id="meetingRoomSelect">
                    Выберите переговорную
                </InputLabel>
                <Select
                    disabled={!prevControlData}
                    labelId="meetingRoomSelect"
                    id="meetingRoomSelect"
                    value={meetingRoomNumber}
                    label="Выберите переговорную"
                    onChange={handleChangeForMeetingRoom}
                >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((room) => {
                        return (
                            <MenuItem key={room} value={room}>
                                Переговорная № {room}
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </TooltipWrapper>
    )
}

export default MeetingRoomSelect
