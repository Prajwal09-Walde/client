import { Box, Button, InputBase } from "@mui/material";
import { useFormik } from "formik";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const validateSchema = yup.object({
    search: yup
        .string('Enter your query')
        .required('this field cannot be empty'),
})

export const SearchInput = () => {
    const navigate = useNavigate();

    const onSubmit = (values, actions) => {
        const { search } = values;
        if (search.trim()) {
            navigate(`/search/${search}`);
        } else {
            navigate("/");
        }
        actions.resetForm();
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            search: '',
        },

        validationSchema: validateSchema,
        onSubmit
    });
    return (
        <form onSubmit={handleSubmit} style={{ width: '50%' }}>
           <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <InputBase sx={{bgcolor: 'white', padding: '10px', color: 'rgba(0, 0, 0, 0.9)'}}
               fullWidth={true}
               id="search"
               name="search"
               label="search"
               placeholder="eg: developer, frontend"
               value={values.search}
               onChange={handleChange}
               error={touched.search && Boolean(errors.search)}
            />
            
            <Button color="primary" variant="contained" type="submit" disabled={isSubmitting}>
                Search
            </Button>
           </Box>
           <Box component='span' sx={{color: 'red'}}>{touched.search && errors.search}</Box>
        </form>
    )
}


