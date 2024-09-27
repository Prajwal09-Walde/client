import axios from 'axios';
import { toast } from 'react-toastify';

import { ALL_USER_LOAD_FAIL, ALL_USER_LOAD_REQ, ALL_USER_LOAD_SUCC, USER_APPLY_JOB_FAIL, USER_APPLY_JOB_REQ, USER_APPLY_JOB_SUCC, USER_LOAD_FAIL, USER_LOAD_REQ, USER_LOAD_SUCC, USER_LOGOUT_FAIL, USER_LOGOUT_REQ, USER_LOGOUT_SUCC, USER_SIGNIN_FAIL, USER_SIGNIN_REQ, USER_SIGNIN_SUCC, USER_SIGNUP_FAIL, USER_SIGNUP_REQ } from '../constants/userConstant';

export const userSignInAction = (user) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQ});
    try {
        const {data} = await axios.post('/api/signin', user);
        localStorage.setItem('userInfo', JSON.stringify(data));
        console.log('User data is', JSON.stringify(data)); 
        dispatch({
            type: USER_SIGNIN_SUCC,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: err.response.data.error
        });
        toast.error(err.response.data.error);
    }
}

export const userSignUpAction = (user) => async (dispatch) => {
    dispatch({type: USER_SIGNUP_REQ});
    try {
        const {data} = await axios.post('/api/signup', user);
        
        dispatch({
            type: USER_SIGNIN_SUCC,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: err.response.data.error
        });
        toast.error(err.response.data.error);
    }
}

export const userLogoutAction = () => async (dispatch) => {
    dispatch({type: USER_LOGOUT_REQ});
    try {
        const {data} = await axios.get('/api/logout');
        localStorage.removeItem('userInfo');
        dispatch({
            type: USER_LOGOUT_SUCC,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: err.response.data.err
        });
        toast.error(err.response.data.err);
    }
}

export const userProfileAction = () => async (dispatch) => {
    dispatch({type: USER_LOAD_REQ});
    try {
        const {data} = await axios.get('/api/self');
        dispatch({
            type: USER_LOAD_SUCC,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

export const allUserAction = () => async (dispatch) => {
    dispatch({type: ALL_USER_LOAD_REQ});
    try {
        const {data} = await axios.get('/api/allusers');
        dispatch({
            type: ALL_USER_LOAD_SUCC,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_USER_LOAD_FAIL,
            payload: error.response.data.error
        })
    }
}

export const userApplyJobAction = (job) => async (dispatch) => {
    dispatch({type: USER_APPLY_JOB_REQ});
    try {
        const {data} = await axios.post('/api/user/jobhistory', job);
        dispatch({
            type: USER_APPLY_JOB_SUCC,
            payload: data
        });
        toast.success('Applied Successfully for this job :)')
    } catch (error) {
        dispatch({
            type: USER_APPLY_JOB_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}