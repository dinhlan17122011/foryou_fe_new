import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./auth.scss";

const VerifyEmail = () => {
    const [verificationCode, setVerificationCode] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const emailToVerify = localStorage.getItem("emailToVerify");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setErrorMessage("");

        try {
            const res = await axios.post("http://localhost:3000/api/users/verify-code", {
                email: emailToVerify,
                code: verificationCode,
            });

            setMessage(res.data.message || "Xác thực thành công!");
            localStorage.removeItem("emailToVerify"); // Xóa email đã lưu sau khi xác thực xong
            setTimeout(() => navigate("/login"), 2000); // Chuyển hướng sau khi xác thực
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || "Mã xác thực không hợp lệ hoặc đã hết hạn."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Xác thực tài khoản</h2>
            <p>Vui lòng nhập mã xác thực đã gửi đến email: <strong>{emailToVerify}</strong></p>
            <input
                type="text"
                placeholder="Nhập mã xác thực"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? "Đang xác thực..." : "Xác thực"}
            </button>
            {message && <p className="success">{message}</p>}
            {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
    );
};

export default VerifyEmail;
