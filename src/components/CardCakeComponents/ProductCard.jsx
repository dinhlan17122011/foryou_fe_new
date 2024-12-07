import React, { useEffect, useState } from "react";
import axios from "axios";
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
                        sx={{
                          borderRadius: "20px",
                          padding: "12px 0",
                          fontWeight: "bold",
                          backgroundColor: "#4caf50",
                          "&:hover": {
                            backgroundColor: "#388e3c",
                          },
                        }}
                      >
                        Đặt ngay
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
  );
};

export default CakeList;
