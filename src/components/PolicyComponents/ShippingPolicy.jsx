import React from "react";
import "./ShippingPolicy.scss";

const ShippingPolicy = () => {
  return (
    <div className="policy-container">
      <h1 className="policy-title">Chính sách ship & bán hàng</h1>
      <p className="policy-subtitle">
        Bấm để xem thêm chi tiết <span className="policy-link">TẠI ĐÂY</span>
      </p>
      <div className="policy-cards">
        {/* Card 1 */}
        <div className="policy-card">
          <img
            src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fcms.4handy.vn%2Fapi%2Fmedia%2Ffile%2FShip%2520COD%252020241031.jpg&w=1400&q=75"
            alt="Đặt hàng COD"
            className="policy-image"
          />
        </div>
        {/* Card 2 */}
        <div className="policy-card">
          <img
            src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Fpolicy%2FvoucherFbPolicy.jpg&w=1400&q=75"
            alt="Voucher Feedback"
            className="policy-image"
          />
        </div>
        {/* Card 3 */}
        <div className="policy-card">
          <img
            src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Fpolicy%2FdiscountPolicy.jpg&w=1400&q=75"
            alt="Chính sách chiết khấu"
            className="policy-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
