import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./logIn.scss";
import axios from "axios";

const LogIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", formData);
      setMessage(res.data.message);
      setToken(res.data.token);
  
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.user.name);
  
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };
  
  

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <button type="submit">Login</button>
      {message && <p className={token ? "success" : ""}>{message}</p>}
      {token && <p>Token: {token}</p>}
    </form>
  );
};

export default LogIn;
