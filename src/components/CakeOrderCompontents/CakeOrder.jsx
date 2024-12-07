import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";

const CakeOrder = () => {
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
        Bánh Vẽ - Bánh Order
      </Typography>

      <Typography
        sx={{
          fontSize: "1rem",
          color: "#555",
          marginBottom: "40px",
          lineHeight: "1.6",
        }}
      >
        Bạn muốn có một chiếc bánh thật đặc biệt, mang nét riêng "không đụng hàng" để tặng người
        thân, bạn bè. Hãy gửi ý tưởng và bọn mình sẽ giúp bạn làm điều đó!
      </Typography>

      {/* Lựa chọn kiểu bánh */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#3a7a2d",
          marginBottom: "20px",
        }}
      >
        Lựa chọn kiểu bánh
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              backgroundColor: "#eaf4e6",
              borderRadius: "10px",
            }}
          >
            <img
              src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Fbanh-ve-han-quoc.png&w=1024&q=75"
              alt="Bánh Vẽ"
              style={{ width: "100px", marginBottom: "10px",borderRadius: "50%",objectFit: "cover" }}
              className="img-haha"
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#3a7a2d" }}
            >
              01
            </Typography>
            <Typography>Bánh Vẽ</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              backgroundColor: "#eaf4e6",
              borderRadius: "10px",
            }}
          >
            <img
              src="https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Forder-2024.jpg&w=1024&q=75"
              alt="Bánh Order"
              style={{ width: "100px", marginBottom: "10px" ,borderRadius: "50%",objectFit: "cover" }}
              className="img-haha"
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#3a7a2d" }}
            >
              02
            </Typography>
            <Typography>Bánh Order</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Lựa chọn vị bánh */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#3a7a2d",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        Lựa chọn vị bánh
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {[
          { flavor: "Cốt Vani + Mứt Việt Quất", img: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Fblueberry.png&w=425&q=75" },
          { flavor: "Cốt Vani + Mứt Dâu Tây", img: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Fstrawberry.png&w=425&q=75" },
          { flavor: "Cốt Vani + Mứt Xoài", img: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Fmango-cut.png&w=425&q=75" },
          { flavor: "Cốt Vani + Mứt Cherry", img: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Fcherries.png&w=425&q=75" },
          { flavor: "Cốt Socola + Kem Socola", img: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Fchocolate.png&w=425&q=75" },
          { flavor: "Cốt Cà Phê + Kem Cà Phê", img: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Fcoffee-bean.png&w=425&q=75" },
          { flavor: "Cốt Trà Xanh + Kem Trà Xanh", img: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Fgreen-tea.png&w=425&q=75" },
        ].map((item, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#eaf4e6",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.img}
                alt={item.flavor}
                style={{ width: "50px", marginBottom: "10px" }}
              />
              <Typography sx={{ fontSize: "1rem", color: "#3a7a2d" }}>
                {item.flavor}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Lựa chọn size bánh */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#3a7a2d",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        Lựa chọn size bánh
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {["https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Fbento-sz.png&w=1400&q=75",
         "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Fmini-sz.png&w=1400&q=75", 
         "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Fnho-sz.png&w=1400&q=75", 
         "https://www.savor.vn/_next/image?url=https%3A%2F%2Fs3.kstorage.vn%2Fsavor-web%2Fsrc%2Fassets%2Fimages%2Flanding-page-bsn%2Forder-section%2Fvua-sz.png&w=1400&q=75"].map((size, index) => (
          <Grid item key={index}>
            <Typography sx={{ fontSize: "1rem", color: "#3a7a2d" }}>
              <img src={size}/>
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Nút hành động */}
      <Button
        variant="contained"
        sx={{
          marginTop: "30px",
          backgroundColor: "#f09020",
          color: "white",
          padding: "10px 30px",
          fontWeight: "bold",
          fontSize: "1rem",
          borderRadius: "30px",
          "&:hover": {
            backgroundColor: "#d87c18",
          },
        }}
      >
        INBOX ĐẶT BÁNH
      </Button>
    </Box>
  );
};

export default CakeOrder;
