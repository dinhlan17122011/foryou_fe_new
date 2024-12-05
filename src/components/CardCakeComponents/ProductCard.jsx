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
    <Box display="flex" alignItems="center" mb={2}>
      <Box
        sx={{
          width: 4,
          height: "100%",
          backgroundColor: "#4caf50",
          marginRight: 1,
        }}
      />
      <Typography
        variant="h5"
        className="styled-text"
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
      for (const category in updatedCakes) {
        updatedCakes[category] = updatedCakes[category].map((cake) =>
          cake._id === cakeId ? { ...cake, selectedSizeIndex: sizeIndex } : cake
        );
      }
      return updatedCakes;
    });
  };

  return (
    <Box className="cake-list-container">
      {Object.keys(categorizedCakes).map((category) => (
        <Box key={category} mb={4}>
          <StyledText text={category} />
          <Grid container spacing={3}>
            {categorizedCakes[category].map((cake) => {
              const selectedSize = cake.size[cake.selectedSizeIndex];
              return (
                <Grid item xs={12} sm={6} md={4} key={cake._id}>
                  <Card className="card">
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
                        Giá: {" "}
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
                          padding: "10px 0",
                          fontWeight: "bold",
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