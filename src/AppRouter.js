import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import DiaryPage from "./Pages/Diary/DiaryPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/diary" element={<DiaryPage />} />
    </Routes>
  );
};

export default AppRouter;
