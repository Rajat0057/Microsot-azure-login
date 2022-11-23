import React from "react";
import { Routes, Route } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProtectedRoute from "./ProtectedRoute";


const AppRoutes = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<ProtectedRoute isLoggedIn={isAuthenticated}>
            <Profile />
          </ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;
