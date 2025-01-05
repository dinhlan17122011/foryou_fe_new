import React, { useEffect, useState } from "react";
import "./Cart.scss";
import axios from "axios";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  List,
  ListItem,
  Paper,
  TableContainer,
  TextField,
  Checkbox,
} from "@mui/material";

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
  const [cartItems1, setCartItems1] = useState([]);
  const [cartItems2, setCartItems2] = useState([]);
  const [id,setId] = useState(null);
  const [id1,setId1] = useState(null);
  const [accessoryList, setAccessoryList] = useState([]);
  
  const [formData, setFormData] = useState({
    placer: { name: '', phone: '' },
    receiver: { similarToAbove: false, name: '', phone: '' },
    address: { district: '', ward: '', details: '' },
    time: { day: '', time: '' },
    bill: { tickBill: false },
    items: [], // Đảm bảo thông tin sản phẩm có sẵn ở đây
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      console.error("Không tìm thấy userId trong localStorage.");
      alert("Bạn chưa đăng nhập. Vui lòng đăng nhập trước khi tiếp tục.");
    }
  }, []);
  
  
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
  
    if (storedUserId) {
      setUserId(storedUserId); // Đảm bảo `userId` được gán giá trị
      axios
        .get(`http://localhost:3000/api/order-confirmation/user/${storedUserId}`)
        .then((response) => {
          if (response.data.orders && response.data.orders.length > 0) {
            setCartItems(response.data.orders[0].items);
            setId(response.data.orders[0]._id);
            setId1(response.data.orders[0]._id);
            setCartItems1(response.data.orders[0].items[0])
            setCartItems2(response.data.orders[0])
            console.log("OK1:", response.data.orders[0]);
            
            console.log("Đơn hàng đầu tiên:", response.data.orders[0]);
          } else {
            console.error("Không tìm thấy đơn hàng.");
          }
        })
        .catch((error) => {
          console.error("Lỗi khi lấy thông tin đơn hàng:", error);
        });
    } else {
      console.error("Không tìm thấy userId trong localStorage.");
      alert("Bạn chưa đăng nhập. Vui lòng đăng nhập trước khi tiếp tục.");
    }
  }, []); // Chỉ thực thi một lần khi component được mount
  
  

  useEffect(() => {
    if (userId == null) {
      console.error("userId is null. Skipping API call.");
      return; // Dừng nếu userId không hợp lệ
    }
  
    axios
      .get(`http://localhost:3000/api/order-confirmation/user/${userId}`)
      .then((response) => {
        setId(response.data.orders[0]._id);
        setCartItems(response.data.orders[0].items);
        console.log("Đã lấy thông tin đơn hàng:", response.data.orders[0]);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy thông tin đơn hàng:", error);
      });
  }, [userId]); // Chỉ gọi khi userId thay đổi

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/accessories")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteItem = async (itemId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")) {
      try {
        await axios.delete(`http://localhost:3000/api/order-confirmation/orders/${id}`);
        setCartItems((prevItems) =>
          prevItems.filter((item) => item._id !== itemId)
        );
        alert("Xóa sản phẩm thành công!");
      } catch (error) {
        console.error("Lỗi khi xóa sản phẩm:", error);
        alert("Không thể xóa sản phẩm.");
      }
    }
  };

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setWards(wardsByDistrict[district] || []);
    setSelectedWard("");
  };

  const handleAddAccessory = async (product) => {
    try {
      // Thêm phụ kiện vào danh sách phụ kiện của đơn hàng
      const newAccessory = {
        name: product.name,
        number: product.code,  // Nếu có
        price: product.price,
        quantity: 1  // Bạn có thể thay đổi số lượng tùy vào yêu cầu
      };

      // Cập nhật giỏ hàng qua API
      const response = await axios.post(`http://localhost:3000/api/order-confirmation/${id1}/accessory`, {
        Accessory: [...accessoryList, newAccessory]  // Gửi danh sách phụ kiện mới lên server
      });

      // Cập nhật lại danh sách phụ kiện trong trạng thái local (nếu cần)
      setAccessoryList([...accessoryList, newAccessory]);

      alert(response.data.message);
    } catch (error) {
      console.error('Lỗi khi thêm phụ kiện:', error);
      alert('Có lỗi xảy ra khi thêm phụ kiện.');
    }
  };

  
  const handlePlaceOrder = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/order-confirmation/${id1}/update`, formData);
      console.log('Đơn hàng đã được cập nhật', response.data);
    } catch (error) {
      console.error('Lỗi khi cập nhật đơn hàng:', error);
    }
  };

  const handlePayment = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/order-confirmation/${id1}/finalize`, { bill: formData.bill });
      console.log('Đơn hàng đã thanh toán', response.data);
    } catch (error) {
      console.error('Lỗi khi thanh toán đơn hàng:', error);
    }
  };
  
  if (!products) {
    return <Typography>Đang tải sản phẩm...</Typography>;
  }

  return (
    <div>
      <Box sx={{ maxWidth: "1200px", margin: "20px auto", padding: 3 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", color: "#4caf50", fontWeight: "bold" }}
        >
          Giỏ hàng
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginBottom: 2, color: "#333" }}
        >
          Bạn có{" "}
          <span style={{ fontWeight: "bold" }}>{cartItems.length} sản phẩm</span>{" "}
          trong giỏ hàng
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sản phẩm</TableCell>
                <TableCell align="center">Giá bán</TableCell>
                <TableCell align="center">Số lượng</TableCell>
                <TableCell align="center">Tạm tính</TableCell>
                <TableCell align="center">Hành động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ color: "#999" }}>
                    Giỏ hàng trống. Vui lòng thêm sản phẩm vào giỏ hàng.
                  </TableCell>
                </TableRow>
              ) : (
                cartItems.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>
                      <strong>{item.namecake}</strong>
                      <br />
                      Mã sản phẩm: {item.code}
                      <br />
                      Kích thước: {item.size}
                    </TableCell>
                    <TableCell align="center">
                      {item.price.toLocaleString()} đ
                    </TableCell>
                    <TableCell align="center">{item.quantity}</TableCell>
                    <TableCell align="center">
                      {(item.price * item.quantity).toLocaleString()} đ
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDeleteItem(item._id)}
                      >
                        Xóa
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Phần dưới không thay đổi */}
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
              <Button
                variant="contained"
                color="success"
                sx={{ marginTop: 2 }}
                onClick={() => handleAddAccessory(product)} // Xử lý sự kiện khi nhấn nút
              >
                Đặt ngay
              </Button>
            </Box>
          ))
        ) : (
          <Typography>Không có sản phẩm nào.</Typography>
        )}
      </Box>
    </Box>
    </div>
        
      <div>
      <div className="order-confirmation">
      <h1 className="title">Xác nhận đơn hàng</h1>
      <div className="content">
        {/* Phần Xác nhận đơn hàng */}
        <form className="order-details">
  <section className="section">
    <h2 className="Bookerinformation">Thông tin người đặt</h2>
    <div className="form-group">
      <label>Họ và tên</label>
      <input 
        type="text" 
        value={formData.placer.name}
        onChange={(e) => setFormData({ ...formData, placer: { ...formData.placer, name: e.target.value } })} 
      />
    </div>
    <div className="form-group">
      <label>Số điện thoại</label>
      <input 
        type="text" 
        value={formData.placer.phone}
        onChange={(e) => setFormData({ ...formData, placer: { ...formData.placer, phone: e.target.value } })}
      />
    </div>
  </section>

  <section className="section">
    <h2>Thông tin người nhận</h2>
    <div className="form-group">
      <label>Họ và tên</label>
      <input 
        type="text" 
        value={formData.receiver.name}
        onChange={(e) => setFormData({ ...formData, receiver: { ...formData.receiver, name: e.target.value } })}
      />
    </div>
    <div className="form-group">
      <label>Số điện thoại</label>
      <input 
        type="text" 
        value={formData.receiver.phone}
        onChange={(e) => setFormData({ ...formData, receiver: { ...formData.receiver, phone: e.target.value } })}
      />
    </div>
  </section>

  <section className="section">
    <h2>Địa chỉ nhận hàng</h2>
    <div className="form-group">
      <label>Quận</label>
      <select 
        value={formData.address.district} 
        onChange={(e) => setFormData({ ...formData, address: { ...formData.address, district: e.target.value } })}
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
        value={formData.address.ward} 
        onChange={(e) => setFormData({ ...formData, address: { ...formData.address, ward: e.target.value } })}
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
      <input 
        type="text" 
        value={formData.address.details}
        onChange={(e) => setFormData({ ...formData, address: { ...formData.address, details: e.target.value } })}
      />
    </div>
  </section>

  <section className="section">
    <h2>Thời gian nhận hàng</h2>
    <div className="form-group">
      <label>Ngày nhận</label>
      <input 
        type="date" 
        value={formData.time.day} 
        onChange={(e) => setFormData({ ...formData, time: { ...formData.time, day: e.target.value } })}
      />
    </div>
    <div className="form-group">
      <label>Giờ nhận</label>
      <select 
        value={formData.time.time} 
        onChange={(e) => setFormData({ ...formData, time: { ...formData.time, time: e.target.value } })}
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
              <p>Tên bánh <samp>{cartItems1.namecake}</samp></p>
  <p>Số lượng sản phẩm: <span>{cartItems1.quantity}</span></p>
  <p>Tổng tiền hàng: <span>{cartItems2.totalAmount} đ</span></p>
  <p>Phí ship: <span>30.000 đ</span></p>
  <p>Tổng tiền: <span>{cartItems2.totalAmount + 30000} đ</span></p>
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

          <button onClick={handlePayment}>Thanh toán</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Cart;
