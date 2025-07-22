// src/routes/AdminProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return isAdmin ? children : <Navigate to="/admin/login" replace />;
};

export default AdminProtectedRoute;
