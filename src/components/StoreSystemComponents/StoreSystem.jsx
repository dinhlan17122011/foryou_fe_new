// StoreSystem.js
import React from 'react';
import './StoreSystem.scss';

const StoreSystem = () => {
  return (
    <div className="store-system">
      <h1>Hệ thống cửa hàng</h1>
      <div className="store-list">
        <div className="store">
          <h2>Savor Cake Nguyễn Chí Thanh</h2>
          <p>Giờ mở cửa: 8h - 21h T2-CN</p>
          <p>Điện thoại: 0917 086 650 (Tư vấn)</p>
          <p>Địa chỉ: 108, Nguyễn Chí Thanh, Láng Thượng, Đống Đa</p>
        </div>
        <div className="store">
          <h2>Savor Cake Tô Hiệu</h2>
          <p>Giờ mở cửa: 8h - 21h T2-CN</p>
          <p>Điện thoại: 0917 086 650 (Tư vấn)</p>
          <p>Địa chỉ: 108C8 ngõ 26 Tô Hiệu, Nghĩa Tân, Cầu Giấy</p>
        </div>
        <div className="store">
          <h2>Savor Cake Trường Chinh</h2>
          <p>Giờ mở cửa: 8h - 21h T2-CN</p>
          <p>Điện thoại: 0917 086 650 (Tư vấn)</p>
          <p>Địa chỉ: Số 11 ngõ 74 Trường Chinh, Phương Mai, Đống Đa</p>
        </div>
        <div className="store">
          <h2>Savor Cake Hà Đông</h2>
          <p>Giờ mở cửa: 8h - 21h30 T2-CN</p>
          <p>Điện thoại: 0917 086 650 (Tư vấn)</p>
          <p>Địa chỉ: Ngõ 133 đường Tô Hiệu (đi vào thêm 50m bên trái, đối diện bánh ABBY), Hà Cầu, Hà Đông</p>
        </div>
      </div>
    </div>
  );
};

export default StoreSystem;
