import { DELETE_JOB_FAIL, DELETE_JOB_REQ, DELETE_JOB_RESET, DELETE_JOB_SUCC, EDIT_JOB_FAIL, EDIT_JOB_REQ, EDIT_JOB_RESET, EDIT_JOB_SUCC, JOB_LOAD_FAIL, JOB_LOAD_REQ, JOB_LOAD_RESET, JOB_LOAD_SINGLE_FAIL, JOB_LOAD_SINGLE_REQ, JOB_LOAD_SINGLE_RESET, JOB_LOAD_SINGLE_SUCC, JOB_LOAD_SUCC, REGISTER_JOB_FAIL, REGISTER_JOB_REQ, REGISTER_JOB_RESET, REGISTER_JOB_SUCC } from "../constants/jobConstant"

export const loadJobReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
        case JOB_LOAD_REQ:
            return { loading: true }
        case JOB_LOAD_SUCC:
            return {
                loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocation: action.payload.setUniqueLocation,
                jobs: action.payload.jobs
            }
        case JOB_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case JOB_LOAD_RESET:
            return {}
        default:
            return state;
    }
}

export const loadJobSingleReducer = (state = { job: {} }, action) => {
    switch (action.type) {
        case JOB_LOAD_SINGLE_REQ:
            return { loading: true }
        case JOB_LOAD_SINGLE_SUCC:
            return {

                loading: false,
                success: action.payload.success,
                singleJob: action.payload.job,

            }
        case JOB_LOAD_SINGLE_FAIL:
            return { loading: false, error: action.payload }
        case JOB_LOAD_SINGLE_RESET:
            return {}
        default:
            return state;
    }

}

export const registerAJobReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_JOB_REQ:
            return { loading: true }
        case REGISTER_JOB_SUCC:
            return {
                loading: false,
                success: action.payload.success
            }
        case REGISTER_JOB_FAIL:
            return {
                loading: false,
                error: action.payload.error
            }
        case REGISTER_JOB_RESET:
            return {}
        default:
            return state;
    }
}

export const deleteAJobReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_JOB_REQ:
            return { loading: true }
        case DELETE_JOB_SUCC:
            return {
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            }
        case DELETE_JOB_FAIL:
            return {
                loading: false,
                error: action.payload.error
            }
        case DELETE_JOB_RESET:
            return {}
        default:
            return state;
    }
}

export const updateAJobReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_JOB_REQ:
            return { loading: true }
        case EDIT_JOB_SUCC:
            return {
                loading: false,
                success: action.payload.success,
                job: action.payload.job
            }
        case EDIT_JOB_FAIL:
            return {
                loading: false,
                error: action.payload.error
            }
        case EDIT_JOB_RESET:
            return {}
        default:
            return state;
    }
}
