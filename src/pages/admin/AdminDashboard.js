import { Category, SupervisorAccount, Work } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Chart } from 'react-google-charts';
import { ChartComponent } from '../../components/ChartComponent';
import { StatComponent } from '../../components/StatComponent';
import { data, options } from '../../pages/admin/data/data';

export const AdminDashboard = () => {
  return (
    <>
      <Box>
        <Typography variant='h4' sx={{ color: 'white', pb: 3 }}>
          Dashboard
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <StatComponent
            value="11234"
            icon={<SupervisorAccount sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Administrators"
            money=""
          />
          <StatComponent
            value="420"
            icon={<Work sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Jobs"
            money=""
          />
          <StatComponent
            value="7500"
            icon={<Category sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Jobs categories"
            money=""
          />
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{ mt: 3 }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <ChartComponent>
            <Chart
              chartType="Bar"
              date={data}
              options={options}
              width="100%"
              height="300px"
              legendToggle
            />
          </ChartComponent>
        </Stack>
      </Box>
    </>
  )
}


