import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const UserRoute = ({ children }) => {
    const { userInfo } = useSelector((state) => state.signIn);
    return userInfo && userInfo === 0 ? children  : <Navigate to="/" />
}


