import { createTheme } from '@mui/material'

export const theme = createTheme({
    components: {
        MuiSelect: {
            styleOverrides: {
                select: {
                    // borderColor: "rgb(0, 119, 255)"
                    '& ~ .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgb(0, 119, 255)',
                    },
                    '&.Mui-disabled ~ .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgb(217, 217, 217)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root': {
                        borderColor: 'rgb(0, 119, 255)',
                        '&:hover': {
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgb(0, 119, 255)',
                            },
                        },
                        "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                            borderColor: 'rgb(217, 217, 217)',
                        },
                        '&.Mui-disabled:hover': {
                            '& .MuiOutlinedInput-notchedOutline ': {
                                borderColor: 'rgb(217, 217, 217)',
                            },
                        },
                    },
                    '& fieldset': {
                        borderColor: 'rgb(0, 119, 255)',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(0, 119, 255)',
                    "&.MuiButton-outlinedError": {
                        backgroundColor: 'rgb(255, 255, 255)'
                    },
                    "&.Mui-disabled": {
                        border: '1px solid rgb(217, 217, 217)',
                        backgroundColor: 'rgb(255, 255, 255)'
                    }
                },
            },
        },
    },
})

export default theme
