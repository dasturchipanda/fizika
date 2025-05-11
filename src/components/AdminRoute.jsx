import React from "react";
import { Navigate } from "react-router-dom";
import * as jwt_decode from "jwt-decode"; // Butun kutubxonani import qilish

const AdminRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  if (!token) {
    return <Navigate to="/" />;
  }

  try {
    const decoded = jwt_decode.jwtDecode(token);
    if (decoded.role === "admin") {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  } catch (error) {
    console.error("Token decode qilishda xatolik:", error);
    return <Navigate to="/" />;
  }
};

export default AdminRoute;
