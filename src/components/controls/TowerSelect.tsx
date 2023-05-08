import React from 'react'
import { IBookingData } from '../../interfaces'
import {
    SelectChangeEvent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material'

export const TowerSelect: React.FC<{
    tower: string
    setBookingData: React.Dispatch<React.SetStateAction<IBookingData>>
}> = ({ tower, setBookingData }) => {
    const handleChangeForTower = (event: SelectChangeEvent) => {
        setBookingData((prev) => {
            return { ...prev, tower: event.target.value }
        })
    }

    return (
        <FormControl>
            <InputLabel id="towerSelect">Выберите башню</InputLabel>
            <Select
                labelId="towerSelect"
                id="towerSelect"
                value={tower}
                label="Выберите башню"
                onChange={handleChangeForTower}
            >
                <MenuItem value={'А'}>Башня "А"</MenuItem>
                <MenuItem value={'Б'}>Башня "Б"</MenuItem>
            </Select>
        </FormControl>
    )
}

export default TowerSelect
