import { Card, CardContent, useTheme } from '@mui/material';


export const ChartComponent = ({ children }) => {
  const { palette } = useTheme();
  return (
    <>
      <Card sx={{ bgcolor: palette.secondary.midNightViolet, width: "100%" }}>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </>
  )
}


