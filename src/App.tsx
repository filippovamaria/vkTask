import React from 'react'
import { FormForBookingMeetingRoom } from './components'
import { ThemeProvider, Typography } from '@mui/material'
import { theme } from './theme'
import { ErrorBoundary } from './components/core'

function App() {
    return (
        <div className="App">
            <ErrorBoundary>
                <ThemeProvider theme={theme}>
                    <Typography
                        sx={{
                            fontSize: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        Бронирование переговорной
                    </Typography>
                    <FormForBookingMeetingRoom />
                </ThemeProvider>
            </ErrorBoundary>
        </div>
    )
}

export default App
