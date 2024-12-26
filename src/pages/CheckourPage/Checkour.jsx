import React from 'react'
import OrderConfirmation from "../../components/OrderConfirmation/OrderConfirmation";
import OrderSummary from "../../components/OrderConfirmation/OrderSummary";
import "./Checkour.scss";
const Checkour = () => {
  return (
    <div>Checkour
      <div className="layout">
        {/* Form Xác nhận đơn hàng */}
        <div className="left">
          <OrderConfirmation />
        </div>

        {/* Tóm tắt đơn hàng */}
        <div className="right">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

export default Checkour