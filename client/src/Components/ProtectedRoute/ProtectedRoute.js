import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = () => {
    const {user} = useSelector((state) => state.auth);
    return user ? <Outlet /> : <Navigate to="/auth/login" replace />;

}




export default ProtectedRoute;