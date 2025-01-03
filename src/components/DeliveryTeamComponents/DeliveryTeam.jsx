import React from "react";
import "./DeliveryTeam.scss";

const DeliveryTeam = () => {
  return (
    <div className="delivery-container">
      <div className="header">
        <h2>"Biệt đội" Ship hỏa tốc</h2>
        <p>
          Savor Cake xây dựng đội ngũ Shipper chuyên nghiệp & thân thiện, giao
          hàng nhanh chóng đến tay khách yêu trong vòng 1H
        </p>
      </div>
      <div className="delivery-grid">
        <div className="delivery-card card-1">
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Fship%2FshipperRow1.png&w=1400&q=75" alt="Delivery 1" />
        </div>
        <div className="delivery-card card-2">
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Fship%2FshipperRow2.png&w=1400&q=75" alt="Delivery 2" />
        </div>
        <div className="delivery-card card-3">
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Fship%2FshipperCol.png&w=1400&q=75" alt="Delivery 3" />
        </div>
        <div className="delivery-card card-4">
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Fship%2FshipperRow3.png&w=1400&q=75" alt="Delivery 4" />
        </div>
        <div className="delivery-card card-5">
          <img src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Fship%2FshipperRow4.png&w=1400&q=75" alt="Delivery 5" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryTeam;
