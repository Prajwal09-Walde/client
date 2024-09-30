import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export const UserInfoDashboard = () => {
  const { user } = useSelector(state => state.userProfile);   
  const { palette } = useTheme();
  return (
    <>
      <Box sx={{ maxWidth: '100%', margin: 'auto', pt: 10 }}>
        <Card sx={{ minWidth: 275, bgcolor: palette.secondary.midNightViolet }}>
          <CardContent>
            <Typography sx={{ fontSize: 16 }} color='#fafafa' gutterBottom>
              Personal info
            </Typography>
            <hr style={{ marginBottom: "30px" }} />
            <Typography variant='h6' component='div' sx={{ color: "#fafafa" }}>
              First Name: {user && user?.firstName}
            </Typography>
            <Typography variant='h6' component='div' sx={{ color: "#fafafa" }}>
              Last Name: {user && user?.lastName}
            </Typography>
            <Typography variant='h6' component='div' sx={{ color: "#fafafa" }}>
              Email: {user && user?.email}
            </Typography>
            <Typography sx={{ mb: 1.5, color: 'gray', pt: 2 }} color="text.secondary">
              Status: {user && user?.role === 0 ? "Regular user" : "Admin"}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}
