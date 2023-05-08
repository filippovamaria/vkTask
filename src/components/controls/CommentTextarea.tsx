import { TextField } from '@mui/material'
import React from 'react'
import { IBookingData } from '../../interfaces'

export const CommentTextarea: React.FC<{
    setBookingData: React.Dispatch<React.SetStateAction<IBookingData>>
    bookingData: IBookingData
}> = ({ setBookingData, bookingData }) => {
    const handleChangeForComment = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBookingData((prev) => {
            return { ...prev, comment: event.target.value }
        })
    }

    return (
        <TextField
            label="Ваш комментарий"
            placeholder="Введите комментарий"
            value={bookingData.comment}
            onChange={handleChangeForComment}
            multiline
        />
    )
}

export default CommentTextarea
