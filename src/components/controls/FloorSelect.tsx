import React from 'react'
import { IBookingData } from '../../interfaces'
import {
    SelectChangeEvent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Tooltip,
} from '@mui/material'
import { TooltipWrapper } from '../core'

export const FloorSelect: React.FC<{
    floor: string
    prevControlData: string
    setBookingData: React.Dispatch<React.SetStateAction<IBookingData>>
}> = ({ floor, prevControlData, setBookingData }) => {
    const handleChangeForFloor = (event: SelectChangeEvent) => {
        setBookingData((prev) => {
            return { ...prev, floor: event.target.value }
        })
    }
    return (
        <TooltipWrapper
            isActive={!prevControlData}
            text="Сначала выберите башню"
        >
            <FormControl>
                <InputLabel id="floorSelect">Выберите этаж</InputLabel>
                <Select
                    disabled={!prevControlData}
                    labelId="floorSelect"
                    id="floorSelect"
                    value={floor}
                    label="Выберите этаж"
                    onChange={handleChangeForFloor}
                >
                    {Array.from({ length: 25 }, (_, i) => i + 3).map(
                        (floor) => {
                            return (
                                <MenuItem key={floor} value={floor}>
                                    Этаж {floor}
                                </MenuItem>
                            )
                        }
                    )}
                </Select>
            </FormControl>
        </TooltipWrapper>
    )
}

export default FloorSelect
