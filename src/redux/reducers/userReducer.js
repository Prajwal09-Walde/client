import { ALL_USER_LOAD_FAIL, ALL_USER_LOAD_REQ, ALL_USER_LOAD_RESET, ALL_USER_LOAD_SUCC, USER_APPLY_JOB_FAIL, USER_APPLY_JOB_REQ, USER_APPLY_JOB_RESET, USER_APPLY_JOB_SUCC, USER_LOAD_FAIL, USER_LOAD_REQ, USER_LOAD_RESET, USER_LOAD_SUCC, USER_LOGOUT_FAIL, USER_LOGOUT_REQ, USER_LOGOUT_RESET, USER_LOGOUT_SUCC, USER_SIGNIN_FAIL, USER_SIGNIN_REQ, USER_SIGNIN_RESET, USER_SIGNIN_SUCC, USER_SIGNUP_FAIL, USER_SIGNUP_REQ, USER_SIGNUP_RESET, USER_SIGNUP_SUCC } from "../constants/userConstant";

export const userReducerSignIn = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQ:
            return { loading: true, isAuthenticated: false }
        case USER_SIGNIN_SUCC:
            return {
                loading: false,
                userInfo: action.payload,
                isAuthenticated: true,
            }
        case USER_SIGNIN_FAIL:
            return { loading: false, isAuthenticated: false, error: action.payload }
        case USER_SIGNIN_RESET:
            return {}
        default:
            return state;
    }
}

export const userReducerSignUp = (state = {}, action) => {
    switch(action.type) {
        case USER_SIGNUP_REQ:
            return {loading: true}
        case USER_SIGNUP_SUCC:
            return {
                loading: false,
                userSignUp: action.payload
            }
        case USER_SIGNUP_FAIL:
            return {loading: false, error: action.payload}
        case USER_SIGNUP_RESET:
            return {}
        default:
            return state;
    }
}

export const userReducerProfile = (state = { user: null }, action) => {
    switch (action.type) {
        case USER_LOAD_REQ:
            return { loading: true, user: null }
        case USER_LOAD_SUCC:
            return {
                loading: false,
                user: action.payload
            }
        case USER_LOAD_FAIL:
            return { loading: false, user: null, error: action.payload }
        case USER_LOAD_RESET:
            return {}
        default:
            return state
    }
}

export const userReducerLogout = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGOUT_REQ:
            return { loading: true }
        case USER_LOGOUT_SUCC:
            return {
                loading: false,
                user: action.payload
            }
        case USER_LOGOUT_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT_RESET:
            return {}
        default:
            return state
    }
}

export const userApplyJobReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_APPLY_JOB_REQ:
            return { loading: true }
        case USER_APPLY_JOB_SUCC:
            return {
                loading: false,
                userJob: action.payload
            }
        case USER_APPLY_JOB_FAIL:
            return { loading: false, error: action.payload }
        case USER_APPLY_JOB_RESET:
            return {}
        default:
            return state
    }
}

export const allUserReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ALL_USER_LOAD_REQ:
            return { loading: true, users: [] }
        case ALL_USER_LOAD_SUCC:
            return {
                loading: false,
                users: action.payload.users,
            }
        case ALL_USER_LOAD_FAIL:
            return { loading: false, users: [], error: action.payload }
        case ALL_USER_LOAD_RESET:
            return {}
        default:
            return state;
    }
}