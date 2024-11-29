import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
    const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập từ localStorage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Nếu có token, coi như đã đăng nhập
  }, []);

  if (!isAuthenticated) return null; // Không hiển thị nếu chưa đăng nhập

  return (
    <button
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        backgroundColor: "#4CAF50",
        color: "white",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => navigate("/cart")} // Điều hướng tới trang giỏ hàng
    >
      <FaShoppingCart style={{ fontSize: "24px" }} /> {/* Icon React */}
    </button>
  );
};

export default CartButton;
