import React from "react";
import { Box, Typography, Button } from "@mui/material";

const AddFruit = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Tiêu đề */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#3a7a2d",
          marginBottom: "20px",
        }}
      >
        Thêm nhân hoa quả
      </Typography>

      {/* Nội dung */}
      <Typography
        sx={{
          fontSize: "1rem",
          color: "#555",
          marginBottom: "20px",
          lineHeight: "1.6",
        }}
      >
        Nếu trước đây Savor chỉ có nhân xoài tươi cho cả nhà lựa chọn, thì hiện tại Savor đã bổ
        sung thêm các loại nhân hoa quả khác, đặc biệt phải kể:{" "}
        <strong>NHÂN XOÀI DỨA</strong> - Sự kết hợp hoàn hảo giữa vị chua của dứa cân bằng với vị
        ngọt của xoài cùng hương thơm tươi mát, dịu nhẹ ~~~~~~~~~~~~~~~~~~~~~~~~
      </Typography>

      <Typography
        sx={{
          fontSize: "1rem",
          color: "#555",
          marginBottom: "20px",
          lineHeight: "1.6",
        }}
      >
        Chỉ cần thêm một chút phí nho nhỏ tùy theo size bánh
        <br />
        <strong>Size mini:</strong> 10k/60g
        <br />
        <strong>Size nhỏ:</strong> 25k/150g
        <br />
        <strong>Size vừa:</strong> 40k/240g
        <br />
        ~~~~~~~~~~~~~~~~~~~~~~~~
      </Typography>

      <Typography
        sx={{
          fontSize: "1rem",
          color: "#555",
          marginBottom: "30px",
          lineHeight: "1.6",
        }}
      >
        <strong>Lưu ý:</strong> Các mẫu bánh Mousse không được áp dụng thêm nhân hoa quả, cả nhà
        nhắn Savor để được tư vấn các mẫu bánh nha
      </Typography>

      {/* Nút đặt bánh */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#f09020",
          color: "white",
          padding: "10px 20px",
          fontWeight: "bold",
          fontSize: "1rem",
          borderRadius: "30px",
          "&:hover": {
            backgroundColor: "#d87c18",
          },
        }}
      >
        ĐẶT BÁNH NGAY
      </Button>
    </Box>
  );
};

export default AddFruit;
