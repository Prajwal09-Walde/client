import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Card, Container, ListItemIcon, MenuItem, MenuList, Pagination, Stack, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { CardComponent } from "../components/CardComponent";
import { Footer } from "../components/Footer";
import { Header } from '../components/Header';
import { LoadingBox } from "../components/LoadingBox";
import { Navbar } from '../components/Navbar';
import { SelectComponent } from "../components/SelectComponent";
import { jobLoadAction } from '../redux/actions/jobAction';
import { jobTypeLoadAction } from "../redux/actions/jobTypeAction";


const Home = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector(state => state?.loadJobs);

  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { kw, location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState('');


  useEffect(() => {
    dispatch(jobLoadAction(page, kw, cat, location));
  }, [page, kw, cat, location]);

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  }

  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Navbar />
        <Header />
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box sx={{ flex: 2, p: 2 }}>
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2, bgcolor: palette.primary.white }}>
                <Box sx={{ pb: 2 }}>
                  <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                    Filter Job By Category
                  </Typography>
                </Box>
                <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} />
              </Card>

              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2, bgcolor: palette.primary.white }}>
                <Box sx={{ pb: 2 }}>
                  <Typography>
                    Filter by Location
                  </Typography>
                  <MenuList>
                    {
                      setUniqueLocation && setUniqueLocation.map((location, i) => (
                        <MenuItem key={i}>
                          <ListItemIcon>
                            <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} />
                          </ListItemIcon>
                          <Link style={{ color: palette.secondary.main }} to={`/search/location/${location}`}>{location}</Link>
                        </MenuItem>
                      ))
                    }
                  </MenuList>
                </Box>
              </Card>
            </Box>

            <Box sx={{ flex: 5, p: 5 }}>
              {
                loading ?
                  <LoadingBox /> :
                  jobs && jobs.length === 0 ?
                    <>
                      <Box
                        sx={{
                          minHeight: '350px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <h2>No result found :(</h2>
                      </Box>
                    </> :
                    jobs && jobs.map((job, i) => (
                      <CardComponent
                        key={i}
                        id={job?._id}
                        jobTitle={job?.title}
                        description={job?.description}
                        category={job?.jobType ? job?.jobType.jobTypeName : "No Category"}
                        location={job?.location}
                      />
                    ))
              }
              {
                <Stack spacing={2}>
                  <Pagination color="primary" variant="outlined" page={page} count={pages === 0 ? 1 : pages} onChange={(e, val) => setPage(val)} />
                </Stack>
              }
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Home;
