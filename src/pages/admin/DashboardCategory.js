import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { jobTypeLoadAction } from '../../redux/actions/jobTypeAction';

const DashboardCategory = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobTypeLoadAction())
    }, []);

    const { jobType, loading } = useSelector(state => state.jobTypeAll);
    let data = [];
    data = (jobType !== undefined && jobType.length > 0) ? jobType : []

    const deleteJobCategoryById = (e, id) => {
        console.log(id);
    }

    const columns = [
        {
            field: '_id',
            headerName: 'Category ID',
            width: 150,
            editable: true
        },
        {
            field: 'jobTypeName',
            headerName: 'Category',
            width: 150
        },
        {
            field: 'createdAt',
            headerName: 'Create At',
            width: 150,
            renderCell: (params) => {
                moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS")
            }
        },
        {
            field: "Actions",
            width: 200,
            renderCell: (values) => {
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '170px' }}>
                    <Button variant='contained'><Link style={{ color: 'white', textDecoration: 'none' }} to={`/admin/edit/user/${values.row._id}`}>Edit</Link></Button>
                    <Button onClick={(e) => deleteJobCategoryById(e, values.row._id)} variant='contained' color='error'>Delete</Button>
                </Box>
            }
        }
    ]
    return (
        <Box>
            <Typography variant='h6' sx={{ color: "white", pb: 3 }}>
                Jobs Category
            </Typography>
            <Box sx={{ pb: 2, display: 'flex', justifyContent: 'right' }}>
                <Button variant='contained' color='success' startIcon={<AddIcon />}>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/admin/category/create'>Create Category</Link>
                </Button>
            </Box>
            <Paper sx={{ bgcolor: 'secondary.midNightViolet' }}>
                <Box>
                    <DataGrid
                        getRowId={(row) => row._id}
                        sx={{
                            '& .MuiTablePagination-displayedRows': {
                                color: 'white'
                            },
                            color: 'white',
                            [`& .${gridClasses}`]: {
                                bgcolor: (theme) =>
                                    theme.palette.secondary.main
                            },
                            button: {
                                color: '#ffffff'
                            }
                        }}
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </Box>
            </Paper>
        </Box>
    )
}

export default DashboardCategory;
