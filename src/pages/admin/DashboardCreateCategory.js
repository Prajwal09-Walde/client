import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { createJobTypeAction } from '../../redux/actions/jobTypeAction';

const validateSchema = yup.object({
    jobTypeName: yup
       .string('Enter a category')
       .required('Category is required'),
})

const DashboardCreateCategory = () => {
    const {user} = useSelector(state => state.userProfile);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            user: user && user._id,
            jobTypeName: ''
        },
        validationSchema: validateSchema,
        onSubmit: (values, actions) => {
            dispatch(createJobTypeAction(values))

            actions.resetForm();
        },
    });

  return (
    <>
      <Box sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 4}}>
        <Box onSubmit={formik.handleSubmit} component='form' className='form_style border-style'>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <Typography variant='h5' component='h2' sx={{pb: 3}}>
                    Create a Category
                </Typography>
                <TextField
                    fullWidth
                    id='jobTypeName'
                    label='category'
                    name='jobTypeName'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    placeholder='category name'
                    value={formik.values.jobTypeName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.jobTypeName && Boolean(formik.errors.jobTypeName)}
                    helperText={formik.touched.jobTypeName && formik.errors.jobTypeName}
                />
                <br/>
                <Button fullWidth variant='contained' type='submit'>Create Category</Button>
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default DashboardCreateCategory;

