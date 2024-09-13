import axios from "axios";
import { toast } from "react-toastify";
import { DELETE_JOB_FAIL, DELETE_JOB_REQ, DELETE_JOB_SUCC, EDIT_JOB_FAIL, EDIT_JOB_REQ, EDIT_JOB_SUCC, JOB_LOAD_FAIL, JOB_LOAD_REQ, JOB_LOAD_SINGLE_FAIL, JOB_LOAD_SINGLE_REQ, JOB_LOAD_SINGLE_SUCC, JOB_LOAD_SUCC, REGISTER_JOB_FAIL, REGISTER_JOB_REQ, REGISTER_JOB_SUCC } from '../constants/jobConstant';

export const jobLoadAction = (pageNumber, kw = '', category = '', location = '') => async (dispatch) => {
  dispatch({ type: JOB_LOAD_REQ });
  try {
    const { data } = await axios.get(`/api/jobs/show/?pageNumber=${pageNumber}&keyword=${kw}&cat=${category}&location=${location}`);
    dispatch({
      type: JOB_LOAD_SUCC,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: JOB_LOAD_FAIL,
      payload: error.response.data.error
    });
  }
}

export const jobLoadSingleAction = (id) => async (dispatch) => {
  dispatch({ type: JOB_LOAD_SINGLE_REQ });
  try {
    const { data } = await axios.get(`/api/job/${id}`);
    dispatch({
      type: JOB_LOAD_SINGLE_SUCC,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: JOB_LOAD_SINGLE_FAIL,
      payload: error.response.data.error
    })
  }
}

export const editJobSingleAction = (job) => async (dispatch) => {
  dispatch({ type: EDIT_JOB_REQ });
  try {
    const { data } = await axios.put(`/api/job/update/ ${job._id}`, job);
    dispatch({
      type: EDIT_JOB_SUCC,
      payload: data
    });
    toast.success("Job updated successfully")
  } catch (error) {
    dispatch({
      type: EDIT_JOB_FAIL,
      payload: error.response.data.error
    })
    toast.error(error.response.data.error);
  }
}

export const deleteJobAction = (job_id) => async (dispatch) => {
  dispatch({ type: DELETE_JOB_REQ });
  try {
    const { data } = await axios.delete(`/api/job/${job_id}`);
    dispatch({
      type: DELETE_JOB_SUCC,
      payload: data
    });
    toast.success("Job deleted successfully")
  } catch (error) {
    dispatch({
      type: DELETE_JOB_FAIL,
      payload: error.response.data.error
    });
    toast.error(error.response.data.error);
  }
}

export const registerAJobAction = (job) => async (dispatch) => {
  dispatch({ type: REGISTER_JOB_REQ });
  try {
    const { data } = await axios.put("/api/job/create", job);
    dispatch({
      type: REGISTER_JOB_SUCC,
      payload: data
    })
    toast.success("Job registered successfully")
  } catch (error) {
    dispatch({
      type: REGISTER_JOB_FAIL,
      payload: error.response.data.error
    })
    toast.error(error.response.data.error);
  }
}