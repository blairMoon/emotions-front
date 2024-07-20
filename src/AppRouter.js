import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import DiaryPage from "./Pages/Diary/DiaryPage";
import Calendar from "./Pages/Calendar/Calendar";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/diary" element={<DiaryPage />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
};

export default AppRouter;
