import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Số lượng đơn hàng

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập từ localStorage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Nếu có token, coi như đã đăng nhập

    // Giả lập lấy dữ liệu số lượng đơn hàng từ API hoặc localStorage
    const fetchCartCount = () => {
      const count = localStorage.getItem("cartCount") || 0;
      setCartCount(Number(count)); // Cập nhật số lượng đơn hàng
    };

    fetchCartCount();
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
      onClick={() => navigate("/checkour")} // Điều hướng tới trang giỏ hàng
    >
      <FaShoppingCart style={{ fontSize: "24px" }} /> {/* Icon React */}
      {cartCount > 0 && ( // Hiển thị số lượng nếu > 0
        <span
          style={{
            position: "absolute",
            top: "-5px",
            right: "-5px",
            backgroundColor: "red",
            color: "white",
            fontSize: "12px",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
