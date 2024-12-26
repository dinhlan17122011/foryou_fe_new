import React from "react";
import "./OrderSummary.scss";

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <h3>Thanh toán</h3>
      <div className="summary-item">
        <span>Bánh kem bơ xoài việt quất - mini</span>
        <span>150,000 đ</span>
      </div>
      <div className="summary-item">
        <span>Số lượng:</span>
        <span>1</span>
      </div>
      <div className="summary-item">
        <span>Tổng tiền hàng:</span>
        <span>150,000 đ</span>
      </div>
      <div className="summary-item">
        <span>Phí ship:</span>
        <span>30,000 đ</span>
      </div>
      <div className="summary-item total">
        <span>Tổng cộng:</span>
        <span>180,000 đ</span>
      </div>
      <div className="payment-methods">
        <label>
          <input type="radio" name="payment" /> Chuyển khoản ngân hàng
        </label>
        <label>
          <input type="radio" name="payment" /> Thanh toán khi nhận hàng
        </label>
      </div>
    </div>
  );
};

export default OrderSummary;
