import React from 'react';
import ReactDOM from 'react-dom/client';  // Sử dụng 'react-dom/client' thay vì 'react-dom'
import App from './App';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import 'bootstrap/dist/css/bootstrap.min.css';

// Sử dụng createRoot thay vì render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
