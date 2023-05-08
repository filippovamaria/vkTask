import {
    Box,
    Button
} from '@mui/material'
import React, { useState } from 'react'
import {
    BookingDatePicker,
    CommentTextarea,
    FloorSelect,
    MeetingRoomSelect,
    TimeSelect,
    TowerSelect,
} from './controls'
import { IBookingData } from '../interfaces'

export const FormForBookingMeetingRoom: React.FC = () => {
    const [bookingData, setBookingData] = useState<IBookingData>({
        tower: '',
        floor: '',
        meetingRoomNumber: '',
        bookingDate: null,
        bookingTimeStart: '',
        bookingTimeEnd: '',
        comment: '',
    })

    const handleChangeForSendButton = () => {
        console.log(bookingData)
    }

    const handleChangeForCleanButton = () => {
        setBookingData({
            tower: '',
            floor: '',
            meetingRoomNumber: '',
            bookingDate: null,
            bookingTimeStart: '',
            bookingTimeEnd: '',
            comment: '',
        })
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '20px',
                maxWidth: 300,
            }}
        >
            <TowerSelect
                tower={bookingData.tower}
                setBookingData={setBookingData}
            />
            <FloorSelect
                floor={bookingData.floor}
                prevControlData={bookingData.tower}
                setBookingData={setBookingData}
            />
            <MeetingRoomSelect
                meetingRoomNumber={bookingData.meetingRoomNumber}
                prevControlData={bookingData.floor}
                setBookingData={setBookingData}
            />
            <BookingDatePicker
                bookingDate={bookingData.bookingDate}
                prevControlData={bookingData.meetingRoomNumber}
                setBookingData={setBookingData}
            />
            <TimeSelect
                bookingData={bookingData}
                setBookingData={setBookingData}
            ></TimeSelect>
            <CommentTextarea
                bookingData={bookingData}
                setBookingData={setBookingData}
            />
            <Button
                disabled={!bookingData.bookingTimeEnd}
                variant="contained"
                onClick={handleChangeForSendButton}
            >
                Отправить
            </Button>
            <Button
                variant="outlined"
                color="error"
                onClick={handleChangeForCleanButton}
            >
                Очистить
            </Button>
        </Box>
    )
}

export default FormForBookingMeetingRoom
