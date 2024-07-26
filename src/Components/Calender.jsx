import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavBarArrow from "./NavbarArrow";
import ArrowLeft from "./../assets/images/arrowLeft.svg";
import ArrowRight from "./../assets/images/arrowRight.svg";
import DaySplitbar from "./../assets/images/daySplitbar.svg";
import EmotionMoved from "./../assets/images/emotionMoved.svg";
import EmotionAnger from "./../assets/images/emotionAnger.svg";
import EmotionPassion from "./../assets/images/emotionPassion.svg";
import EmotionAnxiety from "./../assets/images/emotionAnxiety.svg";
import EmotionSad from "./../assets/images/emotionSad.svg";
import EmotionJoy from "./../assets/images/emotionJoy.svg";

import SubmitButton from "./Btn";

const CalendarContainer = styled.div`
  margin: 0 auto;
  background-color: var(--Black-03, #1a1a1a);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 20px;
  height: calc(var(--vh, 1vh) * 100);
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 29px;
`;

const TitleArea = styled.div``;

const SubTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonArea = styled.div`
  display: flex;
  gap: 20px;
`;

const Title = styled.div`
  color: var(--White-01, #f4f4f4);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.4px;
`;

const SubTitle = styled.div`
  color: var(--White-01, #f4f4f4);
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: -0.48px;
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: calc(var(--vh, 1vh) * 100 + 200px);
  overflow: scroll;
  margin-bottom: 100px;
  scrollbar-width: none;
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: left;

  cursor: pointer;
  width: 111px;
  height: 122px;
`;

const DayUpper = styled.div`
  display: flex;
  color: ${(props) => (props.isToday ? "blue" : "var(--Gray-01, #727272)")};
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 100%;
  height: 24px;
  padding: 2px 100px 2px 4px;
  align-items: center;
  align-self: stretch;
`;

const DayBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DayImageLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17px;
  height: 98px;
  padding: 12px 8px 19px 8px;
`;

const DayImageRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  const navigate = useNavigate();

  const getFormattedDate = (date) => {
    const month = date.getMonth() + 1; // Months are 0-based
    const year = date.getFullYear();
    return `${year}년 ${month}월`;
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const handleDayClick = (year, month, day) => {
    navigate(`/diary/${year}/${month}/${day}`);
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        year === today.getFullYear() &&
        month === today.getMonth() &&
        day === today.getDate();
      days.push(
        <Day
          key={day}
          isToday={isToday}
          onClick={() => handleDayClick(year, month + 1, day)}
        >
          <DayUpper isToday={isToday}>
            <span>{day}</span>
          </DayUpper>
          <DayBottom>
            <DayImageLeft>
              <img src={DaySplitbar} alt="day splitbar" />
            </DayImageLeft>
            <DayImageRight>
              {day % 6 === 0 ? (
                <img
                  src={EmotionMoved}
                  alt="emotion moved"
                  width={64}
                  height={64}
                />
              ) : day % 6 === 1 ? (
                <img
                  src={EmotionAnger}
                  alt="emotion moved"
                  width={64}
                  height={64}
                />
              ) : day % 6 === 2 ? (
                <img
                  src={EmotionPassion}
                  alt="emotion moved"
                  width={64}
                  height={64}
                />
              ) : day % 6 === 3 ? (
                <img
                  src={EmotionAnxiety}
                  alt="emotion moved"
                  width={64}
                  height={64}
                />
              ) : day % 6 === 4 ? (
                <img
                  src={EmotionSad}
                  alt="emotion moved"
                  width={64}
                  height={64}
                />
              ) : (
                <img
                  src={EmotionJoy}
                  alt="emotion moved"
                  width={64}
                  height={64}
                />
              )}
            </DayImageRight>
          </DayBottom>
        </Day>,
      );
    }

    return days;
  };

  return (
    <CalendarContainer>
      <NavBarArrow to="/diary" />
      <Header>
        <TitleArea>
          <Title>포텐님의 감정 캘린더에요</Title>
        </TitleArea>
        <SubTitleArea>
          <SubTitle>{getFormattedDate(currentDate)}</SubTitle>
          <ButtonArea>
            <img src={ArrowLeft} alt="arrow left " onClick={handlePrevMonth} />
            <img src={ArrowRight} alt="arrow right" onClick={handleNextMonth} />
          </ButtonArea>
        </SubTitleArea>
      </Header>
      <DaysContainer>{renderDays()}</DaysContainer>
      <SubmitButton type="submit">이달의 감정 카드 확인하기</SubmitButton>
    </CalendarContainer>
  );
};

export default Calendar;
