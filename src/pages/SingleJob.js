import { Box, Button, Card, Container, Stack, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CardComponent } from '../components/CardComponent.js';
import { Footer } from '../components/Footer.js';
import { LoadingBox } from '../components/LoadingBox.js';
import { Navbar } from '../components/Navbar.js';
import { jobLoadSingleAction } from '../redux/actions/jobAction.js';
import { userApplyJobAction } from '../redux/actions/userAction.js';

export const SingleJob = () => {
  const { palette } = useTheme();
  const { dispatch } = useDispatch();
  const { singleJob, loading } = useSelector(state => state.singleJob);
  const { id } = useParams();
  useEffect(() => {
    dispatch(jobLoadSingleAction(id));
  }, [id]);

  const applyForJob = () => {
    dispatch(userApplyJobAction({
      title: singleJob && singleJob.title,
      description: singleJob && singleJob.description,
      salary: singleJob && singleJob.salary,
      location: singleJob && singleJob.location
    }))
  }
  return (
    <>
      <Box sx={{ bgcolor: '#fafafa' }}>
        <Navbar />
        <Box sx={{ height: '85vh' }}>
          <Container sx={{ pt: '30px' }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Box sx={{ flex: 4, p: 2 }}>
                {
                  loading ? <LoadingBox /> :
                    <Card sx={{bgcolor: palette.primary.white}}>
                      <CardComponent>
                        <Typography variant='h5' component='h3'>
                          {singleJob && singleJob.title}
                        </Typography>
                        <Typography variant='body2'>
                          <Box component='span' sx={{ fontWeight: 700 }}>Salary</Box> : ${singleJob && singleJob.salary}
                        </Typography>
                        <Typography variant='body2'>
                          <Box component='span' sx={{ fontWeight: 700 }}>Category</Box> : ${singleJob && singleJob.jobType ? singleJob.jobType.jobTypeName : "No Category"}
                        </Typography>
                        <Typography variant='body2'>
                          <Box component='span' sx={{ fontWeight: 700 }}>Location</Box> : ${singleJob && singleJob.location}
                        </Typography>
                        <Typography variant='body2' sx={{ pt: 2 }}>
                          {SingleJob && singleJob.description}
                        </Typography>
                      </CardComponent>
                    </Card>
                }
              </Box>
              <Box sx={{ flex: 1, p: 2 }}>
                <Card sx={{ p: 2, bgcolor: palette.primary.white }}>
                  <Button onClick={applyForJob} sx={{ fontSize: '13px' }} variant='contained'>Applied for this job</Button>
                </Card>
              </Box>
            </Stack>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  )
}


