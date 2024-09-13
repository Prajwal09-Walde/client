import axios from 'axios';
import { toast } from 'react-toastify';
import { CREATE_JOB_TYPE_FAIL, CREATE_JOB_TYPE_REQ, CREATE_JOB_TYPE_SUCC, JOB_TYPE_LOAD_FAIL, JOB_TYPE_LOAD_REQ, JOB_TYPE_LOAD_SUCC } from '../constants/jobTypeConstant';

export const jobTypeLoadAction = () => async(dispatch) => {
  dispatch({type: JOB_TYPE_LOAD_REQ});
  try {
    const {data} = await axios.get("/api/type/jobs");
    dispatch({
        type: JOB_TYPE_LOAD_SUCC,
        payload: data
    });
  } catch (error) {
    dispatch({
        type: JOB_TYPE_LOAD_FAIL,
        payload: error.response.data.err,
    });
  }
}

export const createJobTypeAction = (jobtype) => async(dispatch) => {
  dispatch({type: CREATE_JOB_TYPE_REQ});
  try {
    const {data} = await axios.post("/api/type/create", jobtype);
    dispatch({
      type: CREATE_JOB_TYPE_SUCC,
      payload: data
    })
    toast.success("Job Type created successfully")
  } catch (error) {
    dispatch({
      type: CREATE_JOB_TYPE_FAIL,
      payload: error.response.data.error
    })
  }
}
