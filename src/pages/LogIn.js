import { LockClockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Navbar } from '../components/Navbar.js';
import { userSignInAction } from '../redux/actions/userAction.js';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('email is required'),
  password: yup
    .string('Enter your password')
    .min(12, 'Password should be of minimum 12 characters length')
    .required('password is required'),
});

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, userInfo } = useSelector(state => state?.signIn);
  useEffect(() => {
    if (isAuthenticated) {
      if (userInfo.role === 1) {
        navigate('/admin/dashboard')
      } else {
        navigate('/user/dashboard')
      }
    }
  }, [isAuthenticated])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(userSignInAction(values));
      actions.resetForm();
    }
  })
  return (
    <>
      <Navbar />
      <Box sx={{ height: '81vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box onSubmit={formik.handleSubmit} component='form' className='form_style border-style'>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main', mb: 3 }}>
              <LockClockOutlined />
            </Avatar>
            <TextField sx={{
              mb: 3,
              "& .MuiInputBase-root": {
                color: 'text.secondary'
              },
              fieldset: { borderColor: "rgb(231, 235, 400)" }
            }}
              fullWidth
              id='email'
              label='E-mail'
              name='email'
              InputLabelProps={{
                shrink: true
              }}
              placeholder='E-mail'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField sx={{
              mb: 3,
              "& .MuiInputBase-root": {
                color: 'text.secondary'
              },
              fieldset: { borderColor: "rgb(231, 235, 400)" }
            }}
              fullWidth
              id='password'
              label='Password'
              name='password'
              InputLabelProps={{
                shrink: true
              }}
              placeholder='Password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.touched.password}
            />
            <Button fullWidth variant='contained' type='submit'>Log In</Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default LogIn
