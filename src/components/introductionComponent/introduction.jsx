import React from "react";
import "./ReasonsToChoose.scss";

const Introduction = () => {
  const reasons = [
    {
      icon: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Ffeature-section%2Fship.png&w=1024&q=75",
      title: "Đội ship hòa tốc từ 1h tại Hà Nội",
      description: "COD không cần cọc. Freeship từ 350k.",
    },
    {
      icon: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Ffeature-section%2Ffruits.png&w=1024&q=75",
      title: "Sử dụng nhiều hoa quả tươi nhất",
      description:
        "VBB: dâu, nho, bơ, xoài, cherry, kiwi, chanh leo, việt quất.",
    },
    {
      icon: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Ffeature-section%2Fcake.png&w=1024&q=75",
      title: "Đa dạng size bánh",
      description:
        "Chỉ từ 150k, 99+ mẫu bánh sinh nhật, sự kiện.",
    },
    {
      icon: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flogos%2Flogo-iso-22000.png&w=1024&q=75",
      title: "Chứng nhận ISO 22000:2018",
      description: "Đảm bảo VSATTP. Có hóa đơn VAT.",
    },
  ];

  return (
    <div className="reasons-to-choose">
      <div className="header">
        <h2>Tại sao bạn nên lựa chọn bánh Savor Cake</h2>
        <p>Hãy cùng tìm hiểu những đặc điểm nổi bật của Savor Cake nhé!</p>
      </div>
      <div className="reasons-list">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-item">
            <img src={reason.icon} alt="icon" className="reason-icon" />
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
