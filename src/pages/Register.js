import LockOpen from '@mui/icons-material/LockOpen';
import { Avatar, Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Navbar } from '../components/Navbar';
import { userSignUpAction } from '../redux/actions/userAction';

const validateSchema = yup.object({
    firstName: yup
        .string('Enter your first name')
        .min(4, 'First Name should be of length 4 characters')
        .required('First name is required'),
    lastName: yup
        .string('Enter your last name')
        .min(4, 'last name should be of minimum 4 characters')
        .required('last name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a vaild email')
        .required('email is required'),
    password: yup
        .string('Enter your password')
        .min(12, 'password should be of minimum 12 characters')
        .required('Password is required')
})


const Register = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: validateSchema,
        onSubmit: (values,  actions) => {
            dispatch(userSignUpAction(values));
            actions.resetForm();
        }
    })
    return (
        <>
          <Navbar />
          <Box sx={{minHeight: 'calc(100vh - 140px)', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.white'}}>
            <Box onSubmit={formik.handleSubmit} component='form' className='form_style border-style'>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                    <Avatar sx={{m: 1, bgcolor: 'primary.main', mb: 3}}>
                        <LockOpen/>
                    </Avatar>
                    <TextField
                       sx={{
                        mb: 3,
                        '& .MuiInputBase-root': {
                            color: 'text.secondary'
                        },
                        fieldset: {borderColor: 'rgb(231, 235, 240)'}
                       }}
                       fullWidth
                       id='firstName'
                       label='First Name'
                       name='firstName'
                       InputLabelProps={{
                        shrink: true,
                       }}

                       placeholder='First Name'
                       value={formik.values.firstName}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                       helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField
                        sx={{
                            mb: 3,
                            '& . MuiInputBase-root': {
                                color: 'text.secondary'
                            },
                            fieldset: {borderColor: 'rgb(231, 235, 240)'}
                        }}
                        fullWidth
                        id='lastName'
                        label='Last Name'
                        name='lastName'
                        InputLabelProps={{
                            shrink: true,
                        }}

                        placeholder='Last Name'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                    <TextField
                        sx={{
                            mb: 3,
                            '& . MuiInputBase-root': {
                                color: 'text.secondary'
                            },
                            fieldset: {borderColor: 'rgb(231, 235, 240)'}
                        }}
                        fullWidth
                        id='email'
                        label='E-mail'
                        name='email'
                        InputLabelProps={{
                            shrink: true,
                        }}

                        placeholder='E-mail'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        sx={{
                            mb: 3,
                            '& . MuiInputBase-root': {
                                color: 'text.secondary'
                            },
                            fieldset: {borderColor: 'rgb(231, 235, 240)'}
                        }}
                        fullWidth
                        id='password'
                        label='Password'
                        name='password'
                        InputLabelProps={{
                            shrink: true,
                        }}

                        placeholder='Password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />

                    <Button fullWidth variant='contained' type='submit'>Register</Button>
                </Box>
            </Box>
          </Box>
        </>
    )
}

export default Register
