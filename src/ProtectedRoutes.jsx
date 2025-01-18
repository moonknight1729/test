import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/AuthProvider";

const ProtectedRoutes = () => {
  const user = useAuth();

  return user.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
