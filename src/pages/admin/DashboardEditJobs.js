import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { editJobSingleAction, jobLoadSingleAction } from '../../redux/actions/jobAction';
import { jobTypeLoadAction } from '../../redux/actions/jobTypeAction';
import { EDIT_JOB_RESET } from '../../redux/constants/jobConstant';

const validateSchema = yup.object({
    title: yup
        .string('Enter a job title')
        .required('title is required'),
    description: yup
        .string('Enter a job description')
        .required('job description is required'),
    salary: yup
        .number('Enter salary')
        .required('Salary is required'),
    location: yup
        .string('Enter the location')
        .required('Location is required'),
    available: yup
        .boolean('Add availability')
        .required('availability is required'),
    jobType: yup
        .string('Enter a Category')
        .required('category is required')
})

const DashboardEditJobs = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(jobTypeLoadAction());
        if (id) {
            dispatch(jobLoadSingleAction());
        }
    }, [id]);

    const { jobType } = useSelector(state => state.jobTypeAll);
    const { singleJob, loading } = useSelector(state => state.singleJob);
    const { success } = useSelector(state => state.updateJob);

    const formik = useFormik({
        initialValues: {
            _id: singleJob?._id,
            title: singleJob?.title,
            description: singleJob?.description,
            salary: singleJob?.salary,
            location: singleJob?.location,
            available: singleJob?.available,
            jobType: singleJob?.jobType?._id
        },
        validationSchema: validateSchema,
        enableReinitialize: true,
        onSubmit: (values, actions) => {
            dispatch(editJobSingleAction(values));

            actions.resetForm();
        },
    });

    useEffect(() => {
        if (success && success === true) {
            setTimeout(() => {
                dispatch({ type: EDIT_JOB_RESET })
                navigate('/admin/jobs');
            }, 800)
        }
    }, [success && success])
    return (
        <>
            <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', pt: '4' }}>
                <Box onSubmit={formik.handleSubmit} component='form' className='form_style border-style'>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        <Typography variant='h5' component='h2' sx={{ pb: 3 }}>
                            Edit Job
                        </Typography>
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id='title'
                            label='Title'
                            name='title'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder='Title'
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id='description'
                            label='Description'
                            name='description'
                            type='text'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder='Description'
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description} />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id='salary'
                            label='Salary'
                            name='salary'
                            type='text'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder='Salary'
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.salary && Boolean(formik.errors.salary)}
                            helperText={formik.touched.salary && formik.errors.salary} />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id='location'
                            label='Location'
                            name='location'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder='Location'
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.location && Boolean(formik.errors.location)}
                            helperText={formik.touched.location && formik.errors.location} />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id='availability'
                            label='Availability'
                            name='availability'
                            type='text'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder='Availability'
                            value={formik.values.available}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.available && Boolean(formik.errors.available)}
                            helperText={formik.touched.available && formik.errors.available} />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            className='px-2 my-2'
                            variant='outlined'
                            name='jobType'
                            id='jobType'
                            select
                            label='Category'
                            value={formik.values.jobType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.jobType && Boolean(formik.errors.jobType)}
                            helperText={formik.touched.jobType && formik.errors.jobType}
                        >
                            <MenuItem key={""} value={""}></MenuItem>
                            {jobType && jobType.map((cat) => {
                                <MenuItem key={cat._id} value={cat._id}>
                                    {cat.jobTypeName}
                                </MenuItem>
                            })}
                        </TextField>

                        <Button fullWidth variant='contained' type='submit'>Edit Job</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DashboardEditJobs
