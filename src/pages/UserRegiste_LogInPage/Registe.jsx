import React, { useState } from "react";
import "./registe.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Khai báo useNavigate để chuyển hướng

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/register", formData);
      setMessage(res.data.message); // Hiển thị thông báo thành công

      // Chuyển hướng sang trang đăng nhập sau khi đăng ký thành công
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Đợi 2 giây trước khi chuyển hướng
    } catch (error) {
      setMessage(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Register</button>
      {message && <p className="success">{message}</p>}
    </form>
  );
};

export default Registe;
