import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import DiaryPage from "./Pages/Diary/DiaryPage";
import Calendar from "./Pages/Calendar/Calendar";
import LoginPage from "./Pages/Login/LoginPage";
import NaverCallback from "./Pages/Login/NaverCallback";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/diary" element={<DiaryPage />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/naver-callback" element={<NaverCallback />} />
    </Routes>
  );
};

export default AppRouter;
