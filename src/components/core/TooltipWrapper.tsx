import { Tooltip } from '@mui/material'
import React from 'react'

export const TooltipWrapper: React.FC<{
    isActive: boolean
    children: JSX.Element
    text: string
}> = ({ isActive, children, text }) => {
    return (
        <Tooltip
            componentsProps={{
                tooltip: { sx: { display: isActive ? 'block' : 'none' } },
            }}
            title={text}
            arrow
            placement="right-start"
        >
            {children}
        </Tooltip>
    )
}

export default TooltipWrapper
