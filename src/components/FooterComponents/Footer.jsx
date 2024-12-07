import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Thông tin liên hệ */}
        <div className="footer-column">
          <h4>Thông tin liên hệ</h4>
          <p>Hotline tư vấn: 1900 779 907</p>
          <p>Hotline khiếu nại: 091 708 6650</p>
          <p>Liên hệ hợp tác: 093 466 4262</p>
          <p>Email: <a href="mailto:support@savor.vn">support@savor.vn</a></p>
        </div>

        {/* Our brands */}
        <div className="footer-column">
          <h4>Our brands</h4>
          <div/>
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flogos%2Fabby-white.png&w=256&q=75" />
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flogos%2Fsavor-bread-white.png&w=256&q=75" />
        </div>

        {/* Liên kết */}
        <div className="footer-column">
          <h4>Liên kết</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Phần báo chí */}
      <div className="footer-press">
        <h4>Báo chí nói gì về Savor Cake</h4>
        <div className="press-logos">
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flogos%2Fmedia%2FvtvLogo.png&w=1400&q=75" alt="VTV" />
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flogos%2Fmedia%2FthanhNienLogo.png&w=1400&q=75" alt="Thanh Niên" />
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flogos%2Fmedia%2FvietnamNetLogo.png&w=1400&q=75" alt="Vietnamnet" />
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flogos%2Fmedia%2FtienPhongLogo.png&w=1400&q=75" alt="Tiền Phong" />
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flogos%2Fmedia%2FcafefLogo.png&w=1400&q=75" alt="CafeF" />
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flogos%2Fmedia%2FvietnambizLogo.png&w=1400&q=75" alt="Vietnambiz" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
