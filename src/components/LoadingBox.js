import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export const LoadingBox = () => {
    return (
        <>
            <Box
                sx={{
                    minHeight: '500px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <CircularProgress />
            </Box>
        </>
    )
}


