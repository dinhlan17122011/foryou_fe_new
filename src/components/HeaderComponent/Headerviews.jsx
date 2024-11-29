import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import logo from "./logo.webp";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName"); // Lấy tên người dùng từ localStorage

  const handleLogin = () => {
    // Giả lập đăng nhập
    localStorage.setItem("token", "userTokenExample"); // Lưu token vào localStorage
    localStorage.setItem("userName", "John Doe"); // Lưu tên người dùng
    navigate("/"); // Chuyển hướng về trang chủ
  };

  const handleLogout = () => {
    // Xóa thông tin đăng nhập khỏi localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login"); // Chuyển hướng về trang đăng nhập sau khi đăng xuất
  };

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            width="70"
            height="70"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Giới thiệu</Nav.Link>
            <Nav.Link href="#categories">Danh Mục</Nav.Link>
            <Nav.Link href="#policies">Chính sách</Nav.Link>
            <Nav.Link href="#feedback">Feedback</Nav.Link>
            <Nav.Link href="#contact">Liên hệ</Nav.Link>
          </Nav>
          <Nav>
            {userName ? (
              <>
                <Nav.Link style={{ fontSize: "12px" }}>
                  Xin chào, {userName}
                </Nav.Link>
                <Button
                  className="btn-outline-primary"
                  onClick={handleLogout}
                  variant="outline-primary"
                >
                  Đăng xuất
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="btn-outline-primary"
                  onClick={() => navigate("/login")}
                  variant="outline-primary"
                >
                  Đăng nhập
                </Button>
                <Button
                  className="btn-outline-primary"
                  onClick={() => navigate("/register")}
                  variant="outline-primary"
                >
                  Đăng ký
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
