import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes"; // Import danh sách routes
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx"; // Import PrivateRoute
import Header from "./components/HeaderComponent/Headerviews.jsx"; // Import Header
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Component = route.component;

          return route.isPrivate ? (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute>
                  <Component />
                </PrivateRoute>
              }
            />
          ) : (
            <Route key={index} path={route.path} element={<Component />} />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
