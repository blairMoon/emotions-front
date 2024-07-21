import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import DiaryPage from "./Pages/DiaryEntryForm/DiaryEntryForm";
import Calendar from "./Pages/CalendarPage/CalendarPage";
import LoginPage from "./Components/Login/Login";
import NaverCallback from "./Components/Login/NaverCallback";
import DailyDiaryPage from "./Pages/DailyDiaryPage/DailyDiaryPage";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/diary" element={<DiaryPage />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/diary/:year/:month/:day" element={<DailyDiaryPage />} />
      <Route path="/naver-callback" element={<NaverCallback />} />
    </Routes>
  );
};

export default AppRouter;
