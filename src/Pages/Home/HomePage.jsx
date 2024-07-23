import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../../Components/Login/Login";
import useAuthStore from "../../stores/authStore";

const HomePage = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  if (accessToken) {
    return <Navigate to="/diary" replace />;
  }

  return (
    <div>
      <Login />
    </div>
  );
};

export default HomePage;
