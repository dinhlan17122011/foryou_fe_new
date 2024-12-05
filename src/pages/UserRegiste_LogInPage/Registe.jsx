import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './registe.scss'
const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setErrorMessage("");

        try {
            const res = await axios.post("http://localhost:3000/api/users/register", formData);

            // Lưu email vào localStorage để sử dụng ở trang xác thực
            localStorage.setItem("emailToVerify", formData.email);

            setMessage(res.data.message || "Đăng ký thành công!");

            // Chuyển hướng sang trang xác thực
            navigate("/verify-email");
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || "Đã xảy ra lỗi. Vui lòng thử lại."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Đăng ký</h2>
            <input
                type="text"
                name="name"
                placeholder="Tên"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? "Đang đăng ký..." : "Đăng ký"}
            </button>
            {message && <p className="success">{message}</p>}
            {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
    );
};

export default Register;
