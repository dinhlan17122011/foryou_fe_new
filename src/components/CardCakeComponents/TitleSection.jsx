import React from "react";
import { Box, Typography } from "@mui/material";

const TitleSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center", // Căn giữa nội dung
        padding: "40px 0", // Khoảng cách trên và dưới
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Tiêu đề */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: "#4CAF50", marginBottom: "10px" }}
      >
        Bộ sưu tập bánh kem, bánh sinh nhật
      </Typography>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          color: "#4CAF50",
          marginBottom: "10px",
        }}
      >
        Savor Cake
      </Typography>
      {/* Đường gạch chân */}
      <Box
        sx={{
          width: "80px",
          height: "4px",
          backgroundColor: "#4CAF50",
          margin: "0 auto",
          borderRadius: "2px",
        }}
      />
    </Box>
  );
};

export default TitleSection;
