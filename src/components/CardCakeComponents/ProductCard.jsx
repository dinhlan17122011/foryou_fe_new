import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import CakeDetail from "../CakeDetail/CakeDetail";

const StyledText = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
        // pl: "170px", // Căn lề trái
        // backgroundColor: "#F9F7EC", // Màu nền
        py: 2, // Khoảng cách trên dưới
      }}
    >
      <Box
        sx={{
          width: 4,
          height: 30,
          backgroundColor: "#4caf50",
          borderRadius: "2px",
          mr: 2,
        }}
      />
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          color: "#4caf50", // Màu chữ
          fontFamily: "Arial, sans-serif",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const CakeList = () => {
  const [categorizedCakes, setCategorizedCakes] = useState({});
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(null);

  const [selectedCakeId, setSelectedCakeId] = useState(null);
const [openDialog, setOpenDialog] = useState(false);

// Thêm hàm xử lý
const handleOpenDialog = (cakeId) => {
  setSelectedCakeId(cakeId);
  setOpenDialog(true);
};

const handleCloseDialog = () => {
  setOpenDialog(false);
  setSelectedCakeId(null);
};
  useEffect(() => {
    // Lấy userId từ localStorage
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setMessage("Vui lòng đăng nhập trước khi tạo đơn hàng.");
    }
  }, []);

  const handleCreateOrder = (cakeId, selectedSizeIndex) => {
    if (!userId) {
      toast.warning("Vui lòng đăng nhập trước khi đặt hàng!", {
        position: "top-center",
        autoClose: 3000, // Thời gian tự đóng (ms)
      });
      return;
    }
  
    const categoryKeys = Object.keys(categorizedCakes);
    let cake;
  
    for (const category of categoryKeys) {
      cake = categorizedCakes[category].find((item) => item._id === cakeId);
      if (cake) break;
    }
  
    if (!cake) {
      toast.error("Không tìm thấy bánh!", {
        position: "top-center",
      });
      return;
    }
  
    const selectedSize = cake.size[selectedSizeIndex];
    const orderItem = {
      namecake: cake.name,
      price: selectedSize.price,
      quantity: 1,
      code: cake.code,
      size: selectedSize.size,
      notecake: "",
    };
  
    const requestBody = {
      userId,
      items: [orderItem],
    };
  
    setLoading(true);
  
    axios
      .post("http://localhost:3000/api/order-confirmation/create", requestBody)
      .then((response) => {
        toast.success("Đặt hàng thành công!", {
          position: "top-center",
        });
        console.log("Đơn hàng:", response.data.order);
      })
      .catch((error) => {
        toast.error("Đặt hàng thất bại, vui lòng thử lại!", {
          position: "top-center",
        });
        console.error("Lỗi khi đặt hàng:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  
  
  

  useEffect(() => {
    axios
      .get("http://localhost:3000/cakes")
      .then((response) => {
        const cakesWithState = response.data.map((cake) => ({
          ...cake,
          selectedSizeIndex: 0,
        }));
        const categorized = cakesWithState.reduce((acc, cake) => {
          const category = cake.category;
          if (!acc[category]) acc[category] = [];
          acc[category].push(cake);
          return acc;
        }, {});
        setCategorizedCakes(categorized);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  const handleSizeChange = (cakeId, sizeIndex) => {
    setCategorizedCakes((prevCategorizedCakes) => {
      const updatedCakes = { ...prevCategorizedCakes };
      Object.keys(updatedCakes).forEach((category) => {
        updatedCakes[category] = updatedCakes[category].map((cake) =>
          cake._id === cakeId ? { ...cake, selectedSizeIndex: sizeIndex } : cake
        );
      });
      return updatedCakes;
    });
  };

  return (
    <div>
    <Box className="cake-list-container">
      {Object.keys(categorizedCakes).map((category) => (
        <Box key={category} mb={4}>
          <StyledText text={category} />
          <Grid
            container
            spacing={3}
            sx={{
              animation: "fadeIn 0.5s ease-in-out",
              "@keyframes fadeIn": {
                from: { opacity: 0, transform: "translateY(20px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            {categorizedCakes[category].map((cake) => {
              const selectedSize = cake.size[cake.selectedSizeIndex];
              return (
                <Grid item xs={12} sm={6} md={4} key={cake._id}>
                  <Card
                    className="card"
                    sx={{
                      borderRadius: 2,
                      boxShadow: 3,
                      "&:hover": {
                        boxShadow: 6,
                        transform: "scale(1.03)",
                        transition: "all 0.3s ease-in-out",
                      },
                    }}
                  >
                    <CardMedia
  component="img"
  height="200"
  image={selectedSize.image}
  alt={cake.name}
  sx={{ cursor: 'pointer' }}
  onClick={() => handleOpenDialog(cake._id)}
/>
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {cake.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {cake.describe}
                      </Typography>
                      <Box
                        sx={{
                          border: "1px solid #4caf50",
                          borderRadius: "8px",
                          padding: "8px",
                          backgroundColor: "#e8f5e9",
                          color: "#388e3c",
                          marginBottom: 1.5,
                        }}
                      >
                        Giao được từ <strong>14 giờ 00 hôm nay</strong>
                      </Box>
                      <Typography variant="body2" sx={{ color: "#757575" }}>
                        Giá:{" "}
                        <span
                          style={{
                            textDecoration: "line-through",
                            marginRight: "8px",
                          }}
                        >
                          275.000đ
                        </span>
                        <span style={{ fontWeight: "bold", color: "#d32f2f" }}>
                          {selectedSize.price.toLocaleString()}đ
                        </span>
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          alignItems: "center",
                          marginTop: 1,
                        }}
                      >
                        <Typography variant="body2">Chọn kích thước:</Typography>
                        {cake.size.map((size, index) => (
                          <Button
                            key={size._id}
                            variant={
                              cake.selectedSizeIndex === index
                                ? "contained"
                                : "outlined"
                            }
                            size="small"
                            sx={{
                              textTransform: "none",
                              borderRadius: "20px",
                              fontSize: "12px",
                              "&:hover": {
                                backgroundColor: "#e8f5e9",
                                color: "#4caf50",
                              },
                            }}
                            onClick={() => handleSizeChange(cake._id, index)}
                          >
                            {size.size}
                          </Button>
                        ))}
                      </Box>
                      <Divider sx={{ marginY: 2 }} />
                      <Button
  variant="contained"
  color="primary"
  fullWidth
  disabled={loading}
  sx={{
    borderRadius: "20px",
    padding: "12px 0",
    fontWeight: "bold",
    backgroundColor: loading ? "#ccc" : "#4caf50",
    "&:hover": {
      backgroundColor: loading ? "#ccc" : "#388e3c",
    },
  }}
  onClick={() => handleCreateOrder(cake._id, cake.selectedSizeIndex)}
>
  {loading ? "Đang xử lý..." : "Đặt ngay"}
</Button>

                    </CardContent>
                  </Card>

                </Grid>
              );
            })}
          </Grid>
        </Box>
      ))}
      
    </Box>
    <CakeDetail
  open={openDialog}
  handleClose={handleCloseDialog}
  cakeId={selectedCakeId}
/>
    </div>
  );
};

export default CakeList;
