import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Button,
  Grid,
  IconButton,
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CakeDetail = ({ open, handleClose, cakeId }) => {
  const [cake, setCake] = useState(null);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  useEffect(() => {
    if (cakeId) {
      axios.get(`http://localhost:3000/cakes/${cakeId}`)
        .then(response => {
          setCake(response.data);
        })
        .catch(error => {
          console.error('Error fetching cake details:', error);
        });
    }
  }, [cakeId]);

  if (!cake) return null;

  const selectedSize = cake.size[selectedSizeIndex];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          bgcolor: 'background.paper',
        }
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            {cake.name}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              src={selectedSize.image}
              alt={cake.name}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 8,
                marginBottom: 16
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              {cake.describe}
            </Typography>
            
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Kích thước:
              </Typography>
              <Box display="flex" gap={1}>
                {cake.size.map((size, index) => (
                  <Button
                    key={size._id}
                    variant={selectedSizeIndex === index ? "contained" : "outlined"}
                    size="small"
                    onClick={() => setSelectedSizeIndex(index)}
                    sx={{
                      borderRadius: 20,
                      textTransform: 'none'
                    }}
                  >
                    {size.size}
                  </Button>
                ))}
              </Box>
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Giá:
              </Typography>
              <Typography variant="h5" color="primary">
                {selectedSize.price.toLocaleString()}đ
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textDecoration: 'line-through',
                  color: 'text.secondary'
                }}
              >
                275.000đ
              </Typography>
            </Box>

            <Box
              sx={{
                bgcolor: '#e8f5e9',
                p: 2,
                borderRadius: 2,
                mb: 2
              }}
            >
              <Typography variant="body2">
                Giao được từ <strong>14 giờ 00 hôm nay</strong>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CakeDetail;
