import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import zaloIcon from "../../assets/zalo-icon.png"; // Đường dẫn đến icon Zalo
import "./FloatingIcons.scss";

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      {/* Messenger */}
      <a
        href="https://www.facebook.com/tiembanhforyou"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <FaFacebookMessenger className="icon" />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/788847166917872224"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <img src={zaloIcon} alt="Zalo" className="zalo-icon" />
      </a>

      {/* Gọi điện */}
      <a href="tel:0985508017" className="icon-link">
        <AiOutlinePhone className="icon" />
      </a>
    </div>
  );
};

export default FloatingIcons;
