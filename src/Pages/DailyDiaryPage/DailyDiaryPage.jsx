import React from "react";
import { useParams } from "react-router-dom";
const DailyDiaryPage = () => {
  const { year, month, day } = useParams();

  return (
    <div>
      <h1>HI~~~</h1>
      <p>
        Date: {year}년 {month}월 {day}일
      </p>
    </div>
  );
};

export default DailyDiaryPage;
