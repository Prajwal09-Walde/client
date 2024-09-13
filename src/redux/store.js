import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { deleteAJobReducer, loadJobReducer, loadJobSingleReducer, registerAJobReducer, updateAJobReducer } from './reducers/jobReducer';
import { createJobTypeReducer, loadJobTypeReducer } from './reducers/jobTypeReducer';
import { themeModeReducer } from './reducers/themeReducer';
import { allUserReducer, userApplyJobReducer, userReducerLogout, userReducerProfile, userReducerSignIn, userReducerSignUp } from './reducers/userReducer';

const reducer = combineReducers({
    loadJobs: loadJobReducer,
    jobTypeAll: loadJobTypeReducer,
    signIn: userReducerSignIn,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleJob: loadJobSingleReducer,
    userJobApplication: userApplyJobReducer,
    allUsers: allUserReducer,
    signUp: userReducerSignUp,
    mode: themeModeReducer,
    registerJob: registerAJobReducer,
    deleteJob: deleteAJobReducer,
    createJobType: createJobTypeReducer,
    updateJob: updateAJobReducer
});

let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    mode: {
        mode: 'light'
    }
};

const middleware = [thunk];

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

