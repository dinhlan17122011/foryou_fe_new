// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Lấy token từ localStorage để kiểm tra trạng thái đăng nhập
  const token = localStorage.getItem("token");

  if (!token) {
    // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
    return <Navigate to="/login" />;
  }

  // Nếu đã đăng nhập, hiển thị nội dung
  return children;
};

export default PrivateRoute;
