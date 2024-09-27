import { CREATE_JOB_TYPE_FAIL, CREATE_JOB_TYPE_REQ, CREATE_JOB_TYPE_RESET, CREATE_JOB_TYPE_SUCC, JOB_TYPE_LOAD_FAIL, JOB_TYPE_LOAD_REQ, JOB_TYPE_LOAD_RESET, JOB_TYPE_LOAD_SUCC } from "../constants/jobTypeConstant";

export const loadJobTypeReducer = (state = { jobType: [] }, action) => {
    switch (action.type) {
        case JOB_TYPE_LOAD_REQ:
            return { loading: true }
        case JOB_TYPE_LOAD_SUCC:
            return {
                loading: false,
                jobType: action.payload.jobType
            }
        case JOB_TYPE_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case JOB_TYPE_LOAD_RESET:
            return {}
        default:
            return state;
    }
}

export const createJobTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_JOB_TYPE_REQ:
            return { loading: true }
        case CREATE_JOB_TYPE_SUCC:
            return {
                loading: false,
                jobType: action.payload
            }
        case CREATE_JOB_TYPE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CREATE_JOB_TYPE_RESET:
            return {}
        default:
            return state;
    }
}