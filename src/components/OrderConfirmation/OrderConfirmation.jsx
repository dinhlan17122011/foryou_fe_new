import React, { useState } from "react";
import "./OrderConfirmation.scss";

const OrderConfirmation = () => {
  const [sameAsPlacer, setSameAsPlacer] = useState(true);

  const handleSameAsPlacer = () => setSameAsPlacer(!sameAsPlacer);

  return (
    <div className="order-confirmation">
      <h2 className="title">Xác nhận đơn hàng</h2>
      <div className="order-form">
        {/* Thông tin người đặt */}
        <div className="section">
          <h3>Thông tin người đặt</h3>
          <div className="input-group">
            <label>Họ và tên</label>
            <input type="text" placeholder="VD: Nguyễn Văn A" />
          </div>
          <div className="input-group">
            <label>Số điện thoại</label>
            <input type="text" placeholder="VD: 097854321" />
          </div>
        </div>

        {/* Thông tin người nhận */}
        <div className="section">
          <h3>Thông tin người nhận</h3>
          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={sameAsPlacer}
              onChange={handleSameAsPlacer}
            />
            <label>Giống người đặt hàng</label>
          </div>
          {!sameAsPlacer && (
            <>
              <div className="input-group">
                <label>Họ và tên</label>
                <input type="text" placeholder="VD: Nguyễn Văn A" />
              </div>
              <div className="input-group">
                <label>Số điện thoại</label>
                <input type="text" placeholder="VD: 097854321" />
              </div>
            </>
          )}
        </div>

        {/* Địa chỉ nhận hàng */}
        <div className="section">
          <h3>Địa chỉ nhận hàng</h3>
          <div className="input-group">
            <label>Quận</label>
            <select>
              <option>Chọn quận...</option>
            </select>
          </div>
          <div className="input-group">
            <label>Phường</label>
            <select>
              <option>Chọn phường...</option>
            </select>
          </div>
          <div className="input-group">
            <label>Địa chỉ chi tiết</label>
            <input type="text" placeholder="VD: Số 5 ngõ 2 phố Thụy Sĩ" />
          </div>
        </div>

        {/* Hóa đơn */}
        <div className="section">
          <h3>Hóa đơn</h3>
          <div className="checkbox-group">
            <input type="checkbox" />
            <label>Có xuất hóa đơn trong đơn hàng</label>
          </div>
        </div>

        {/* Thời gian nhận hàng */}
        <div className="section">
          <h3>Thời gian nhận hàng</h3>
          <div className="input-group">
            <label>Ngày nhận</label>
            <input type="date" />
          </div>
          <div className="input-group">
            <label>Giờ nhận</label>
            <select>
              <option>Chọn giờ...</option>
            </select>
          </div>
        </div>

        {/* Ghi chú */}
        <div className="section">
          <h3>Ghi chú khác</h3>
          <textarea placeholder="VD: Vui lòng không gọi nếu tôi không bắt máy..."></textarea>
        </div>

        <button className="submit-button">Đặt hàng</button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
