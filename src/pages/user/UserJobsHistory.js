import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { CardComponent } from '../../components/CardComponent';

export const UserJobsHistory = () => {
    const {user} = useSelector(state => state.userProfile);
    

  return (
    <>
      <Box>
        <Typography variant='h4' sx={{color: '#fafafa'}}>Jobs History</Typography>
        <Box>
          {
            user && user?.jobsHistory.map((hist, i) => (
              <CardComponent
                key={i}
                id={hist._id}
                jobTitle={hist.title}
                description={hist.description}
                category=""
                location={hist.location}
              />
            ))
          }
        </Box>
      </Box>
    </>
  )
}


