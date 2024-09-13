import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { registerAJobAction } from '../../redux/actions/jobAction';
import { jobTypeLoadAction } from '../../redux/actions/jobTypeAction';

const validateSchema = yup.object({
    title: yup
        .string('Enter a job title')
        .required('title is required'),
    description: yup
        .string('Enter job description')
        .required('job description is required'),
    salary: yup
        .number('Enter a salary')
        .required('salary is required'),
    location: yup
        .string('Enter a location')
        .required('location is required'),
    jobType: yup
        .string('Enter a job type name')
        .required('job type is required')
})
const DashboardCreateJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobTypeLoadAction());
    }, []);

    const { jobType } = useSelector(state => state.jobTypeAll);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            salary: '',
            location: '',
            jobType: ''
        },
        validationSchema: validateSchema,
        onSubmit: (values, actions) => {
            dispatch(registerAJobAction(values))

            actions.resetForm();
        },
    });

    return (
        <>
            <Box sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', pt: 4 }}>
                <Box onSubmit={formik.handleSubmit} component='form' className='form_style border-style'>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                        <Typography variant='h5' component='h2' sx={{ pb: 3 }}>
                            Register a Job
                        </Typography>
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id='title'
                            label='Title'
                            name='title'
                            InputLabelProps={{
                                shrink: true
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
                            InputLabelProps={{
                                shrink: true
                            }}
                            placeholder='Description'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id='salary'
                            label='Salary'
                            name='salary'
                            InputLabelProps={{
                                shrink: true
                            }}
                            placeholder='Salary'
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.salary && Boolean(formik.errors.salary)}
                            helperText={formik.touched.salary && formik.errors.salary}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            id='location'
                            label='Location'
                            name='location'
                            InputLabelProps={{
                                shrink: true
                            }}
                            placeholder='Location'
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.location && Boolean(formik.errors.location)}
                            helperText={formik.touched.location && formik.errors.location}
                        />
                        <TextField sx={{ mb: 3 }}
                            fullWidth
                            className='px-2 my-2'
                            id='jobType'
                            label='Category'
                            name='jobType'
                            select
                            InputLabelProps={{
                                shrink: true
                            }}
                            value={formik.values.jobType}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.errors && Boolean(formik.errors.jobType)}
                            helperText={formik.touched.jobType && formik.errors.jobType}
                        >
                            <MenuItem key={""} value={""}>

                            </MenuItem>

                            {jobType && jobType.map((cat) => (
                                <MenuItem key={cat._id} value={cat._id}>
                                    {cat.jobTypeName}
                                </MenuItem>
                            ))}
                        </TextField>

                        <Button fullWidth variant='contained' type='submit'>Create Job</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DashboardCreateJobs;
