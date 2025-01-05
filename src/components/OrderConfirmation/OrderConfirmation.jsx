import React, { useEffect, useState } from 'react';
import './Cart.scss';
import axios from "axios";
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow , Button , List, ListItem} from '@mui/material';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const timeOptions = [
  "10h-11h",
  "11h-12h",
  "12h-13h",
  "13h-14h",
  "14h-15h",
  "15h-16h",
  "16h-17h",
  "17h-18h",
  "18h-19h",
  "19h-20h",
  "20h-21h",
];
const districts = ["Đống Đa", "Thanh Xuân", "Hà Đông"];

const wardsByDistrict = {
  "Đống Đa": ["Văn Miếu", "Văn Chương", "Trung Tự", "Trung Phụng"],
  "Thanh Xuân": ["Hạ Đình", "Khương Đình", "Khương Mai", "Khương Trung"],
  "Hà Đông": ["Biên Giang", "Đồng Mai", "Yên Nghĩa", "Dương Nội"],
};
const Cart = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:3000/api/cart?userId=${userId}`)
        .then((response) => setCartItems(response.data))
        .catch((error) => console.error("Error fetching cart items:", error));
    }
  }, [userId]);
  
  useEffect(() => {
    // Kiểm tra xem userId đã được lưu trong localStorage chưa
    const storedUserId = localStorage.getItem("userId");
    console.log(storedUserId);
    
    if (storedUserId) {
      setUserId(storedUserId);  // Cập nhật userId khi đã đăng nhập
    }
  }, []);
useEffect(() => {
  // Lấy danh sách sản phẩm từ API khi component được mount
  axios
    .get("http://localhost:3000/api/accessories")
    .then((response) => setProducts(response.data))
    .catch((error) => console.error(error));
}, []);

const handleAddProduct = (newProduct) => {
  // Gửi sản phẩm mới lên server
  axios
    .post("http://localhost:3000/api/accessories", newProduct)
    .then((response) => {
      // Cập nhật state với sản phẩm mới
      setProducts((prevProducts) => [...prevProducts, response.data]);
    })
    .catch((error) => console.error("Error adding product:", error));
};


  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setWards(wardsByDistrict[district] || []);
    setSelectedWard("");
  };
  if (!products) {
    return <Typography>Đang tải sản phẩm...</Typography>; // Loading UI
  }

  return (
    <div>
      <div>
    <Box className="cart-container">
      <TableBody>
  {cartItems.length > 0 ? (
    cartItems.map((item) => (
      <TableRow key={item.productId}>
        <TableCell>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={item.image || "https://via.placeholder.com/50"}
              alt={item.name}
              style={{ width: 50, height: 50, marginRight: 8 }}
            />
            <Typography>{item.name}</Typography>
          </Box>
        </TableCell>
        <TableCell>{item.price.toLocaleString()} đ</TableCell>
        <TableCell>{item.quantity}</TableCell>
        <TableCell>
          {(item.price * item.quantity).toLocaleString()} đ
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={4} className="empty-cart">
        Giỏ hàng trống. Vui lòng thêm sản phẩm vào giỏ hàng.
      </TableCell>
    </TableRow>
  )}
</TableBody>

    </Box>
      </div>

    <div>
      <Box className="accessories-info">
      <Typography variant="h4" className="title">
        Chọn thêm phụ kiện
      </Typography>
      <List className="info-list">
        <ListItem>
          Mỗi bánh sinh nhật (trừ SU KEM) khi mua được tặng kèm 1 bộ dao, dĩa, đĩa cho 10 người ăn
        </ListItem>
        <ListItem>
          Với mẫu bánh mousse cốc và panna cotta chỉ tặng kèm dĩa/thìa
        </ListItem>
        <ListItem>Các bánh đều chưa kèm sẵn mũ và nến ạ</ListItem>
      </List>
    </Box>
      
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {products.length > 0 ? (
          products.map((product) => (
            <Box
              key={product._id}
              className="product-card"
              sx={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: 2,
                textAlign: "center",
                width: 250,
              }}
            >
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name}
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
              <Typography variant="h6" className="product-name" sx={{ marginTop: 2 }}>
                {product.name}
              </Typography>
              <Typography variant="body2" className="product-price" sx={{ color: "#28a745" }}>
                Giá: {product.price ? `${product.price.toLocaleString()} đ` : "Không khả dụng"}
              </Typography>
              <Typography variant="body2" className="product-sku" sx={{ color: "#777" }}>
                SKU: {product.code}
              </Typography>
              <Button variant="contained" color="success" sx={{ marginTop: 2 }}>
                Đặt ngay
              </Button>
            </Box>
          ))
        ) : (
          <Typography>Không có sản phẩm nào.</Typography>
        )}
      </Box>

    </div>
    <div>
    <div className="order-confirmation">
      <h1 className="title">Xác nhận đơn hàng</h1>
      <div className="content">
        {/* Phần Xác nhận đơn hàng */}
        <form className="order-details">
          <section className="section">
            <h2 className='Bookerinformation' >Thông tin người đặt</h2>
            <div className="form-group">
              <label>Họ và tên</label>
              <input type="text" placeholder="VD: Nguyễn Văn A" />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input type="text" placeholder="VD: 0987654321" />
            </div>
          </section>

          <section className="section">
            <h2>Thông tin người nhận</h2>
            <div className="checkbox-group">
              <input type="checkbox" id="sameInfo" />
              <label htmlFor="sameInfo">Giống người đặt hàng</label>
            </div>
            <div className="form-group">
              <label>Họ và tên</label>
              <input type="text" placeholder="VD: Nguyễn Văn A" />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input type="text" placeholder="VD: 0987654321" />
            </div>
          </section>

          <section className="section">
            <h2>Địa chỉ nhận hàng</h2>
            <div className="form-group">
              <label>Quận</label>
              <select
                value={selectedDistrict}
                onChange={handleDistrictChange}
              >
                <option value="">Chọn quận...</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Phường</label>
              <select
                value={selectedWard}
                onChange={(e) => setSelectedWard(e.target.value)}
                disabled={!wards.length}
              >
                <option value="">Chọn phường...</option>
                {wards.map((ward) => (
                  <option key={ward} value={ward}>
                    {ward}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Địa chỉ cụ thể</label>
              <input type="text" placeholder="VD: Số 1 ngõ 2 phố Tây Sơn" />
            </div>
          </section>

          <section className="section">
            <h2>Thời gian nhận hàng</h2>
            <div className="form-group">
              <label>Ngày nhận</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Giờ nhận</label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Chọn giờ</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </section>
        </form>

        {/* Phần Thanh toán */}
        <div className="payment-details">
          <section className="section">
            <h2>Thanh toán</h2>
            <div className="payment-summary">
              <p>Số lượng sản phẩm: <span>0</span></p>
              <p>Tổng tiền hàng: <span>0 đ</span></p>
              <p>Phí ship: <span>0 đ</span></p>
              <p>Voucher: <span>0 đ</span></p>
              <p>Tổng tiền: <span>30.000 đ</span></p>
            </div>
            <div className="form-group">
              <label>Mã voucher</label>
              <input type="text" placeholder="VD: BA123456" />
              <button type="button">Áp dụng</button>
            </div>
          </section>

          <section className="section">
            <h2>Phí ship</h2>
            <p>1. Ship 1-2 sản phẩm: 30k</p>
            <p>2. Đơn từ 350k: Free ship</p>
          </section>

          <section className="section">
            <h2>Phương thức thanh toán</h2>
            <div className="radio-group">
              <input type="radio" id="bankTransfer" name="payment" />
              <label htmlFor="bankTransfer">Chuyển khoản ngân hàng</label>
            </div>
            <div className="radio-group">
              <input type="radio" id="cashOnDelivery" name="payment" />
              <label htmlFor="cashOnDelivery">Thanh toán khi nhận hàng</label>
            </div>
          </section>

          <button className="submit-btn" type="submit">Đặt hàng</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Cart;
