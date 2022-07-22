import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  if (user && user.isAdmin) {
    return children;
  } else if (user && user.isAdmin === false) {
    return <h1>You are not Allowed to visit admin panel</h1>;
  }else {
    return <Navigate to="../auth/login" />;
  }
};

export default AdminRoute;
