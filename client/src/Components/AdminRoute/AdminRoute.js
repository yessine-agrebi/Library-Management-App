import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import DashboardAdmin from "../Admin/DashboardAdmin";
const AdminRoute = () => {
  const { user } = useSelector((state) => state.auth);
  if (user && user.isAdmin) {
    return <><DashboardAdmin /> <Outlet /> </>;
  } else if (user && user.isAdmin === false) {
    return <h1>You are not Allowed to visit admin panel</h1>;
  }else {
    return <Navigate to="../auth/login" />;
  }
};

export default AdminRoute;
