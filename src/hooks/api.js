// services/api.js
import axios from 'axios';

const apiUrl = 'http://localhost:3000/cake';  // Thay đổi URL theo server của bạn

export const fetchCakes = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching cakes:', error);
    throw error;
  }
};
