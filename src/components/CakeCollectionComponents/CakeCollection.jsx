import React from "react";
import "./CakeSection.scss";

const CakeSection = () => {
  return (
    <div className="cake-section-container">
      <div className="cake-section-content">
        {/* Hình ảnh */}
        <div className="cake-image">
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Fproduct-related-sections%2Fmousse-collection-cakes.png&w=1400&q=75" alt="Bánh Mousse" />
        </div>
        {/* Văn bản */}
        <div className="cake-text">
          <h2>Bộ sưu tập bánh lạnh</h2>
          <h3>Mousse</h3>
          <p>
            Savor ra mắt bộ sưu tập bánh mousse ngọt mềm, thơm lừng vị hoa quả/cà phê.
            Bánh sử dụng nguyên liệu xịn xò, 100% kem tươi whipping nhập khẩu và hoa
            quả tươi, phù hợp với những người sành ăn nhất.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CakeSection;
