import { Card, CardContent, useTheme } from '@mui/material';
import React from 'react';

export const ChartComponent = ({children}) => {
    const {palette} = useTheme();
  return (
    <>
      <Card sx={{bgcolor: palette.secondary.midNightViolet, width: "100%"}}>
        <CardContent>
            {children}
        </CardContent>
      </Card>
    </>
  )
}


