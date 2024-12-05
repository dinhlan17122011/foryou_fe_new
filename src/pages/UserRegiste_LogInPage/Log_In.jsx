import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./logIn.scss";  // Đảm bảo rằng bạn có tệp SCSS hoặc CSS này

const LogIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");  // Thông báo thành công
  const [errorMessage, setErrorMessage] = useState("");  // Thông báo lỗi
  const [loading, setLoading] = useState(false);  // Trạng thái loading
  const navigate = useNavigate();  // Dùng để điều hướng sang trang khác

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Ngăn chặn reload trang khi submit form
    setLoading(true);  // Đặt trạng thái loading thành true
    setMessage("");  // Đặt lại thông báo
    setErrorMessage("");  // Đặt lại thông báo lỗi
  
    try {
      // Gửi yêu cầu đăng nhập đến API
      const res = await axios.post("http://localhost:3000/api/users/login", formData);
  
      if (res.data.token && res.data.user?.name) {
        // Lưu thông tin vào localStorage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userName", res.data.user.name);
  
        // Thông báo thành công
        setMessage(res.data.message || "Login successful!");
  
        // Điều hướng về trang chủ ngay lập tức
        navigate("/");  // Điều hướng về trang chủ sau khi đăng nhập thành công
      } else {
        throw new Error("Invalid login response");
      }
    } catch (error) {
      console.error(error);  // Log lỗi chi tiết ra console
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);  // Kết thúc trạng thái loading
    }
  };
  
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      {/* Input Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {/* Input Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {/* Button Đăng nhập */}
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* Thông báo */}
      {message && <p className="success">{message}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
};

export default LogIn;
