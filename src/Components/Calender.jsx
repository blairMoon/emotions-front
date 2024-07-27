import React, { useEffect, useState } from "react";
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
import api from "./../utils/api";
import useAuthStore from "../stores/authStore";

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
  cursor: ${(props) => (props.hasEmotion ? "pointer" : "default")};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: left;
  cursor: ${(props) => (props.emotionExists ? "pointer" : "default")};
  width: 111px;
  height: 122px;
`;

const DayUpper = styled.div`
  display: flex;
  color: ${(props) => (props.isToday ? "#F4F4F4" : "var(--Gray-01, #727272)")};
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.isToday ? "700" : "600")};
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
  const accessToken = useAuthStore((state) => state.accessToken);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [emotionData, setEmotionData] = useState([]);
  const today = new Date();
  const navigate = useNavigate();

  const getYYMM = (date) => {
    const year = date.getFullYear().toString();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    return `${year}${month}`;
  };

  useEffect(() => {
    const fetchEmotionData = async () => {
      const yymm = getYYMM(currentDate);
      try {
        const response = await api.get(
          `/api/v1/diaries/?search_date_yymm=${yymm}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        if (response.data) {
          console.log(response.data.data.diaries);
          setEmotionData(response.data.data.diaries);
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (error) {
        if (error.response) {
          console.error("에러 코드:", error.response.status);
          console.error("에러 메시지:", error.response.data);
        } else if (error.request) {
          console.error("서버로부터 응답이 없습니다.", error.request);
        } else {
          console.error("요청 설정 중 오류가 발생했습니다.", error.message);
        }
      }
    };

    fetchEmotionData();
  }, [accessToken, currentDate]);

  const goToMonthCard = () => {
    navigate("/monthcard");
  };

  const getFormattedDate = (date) => {
    const month = date.getMonth() + 1;
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
    if (
      currentDate.getFullYear() === today.getFullYear() &&
      currentDate.getMonth() === today.getMonth()
    ) {
      return;
    }

    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  const handleDayClick = (year, month, day) => {
    const emotion = emotionData.find(
      (e) => new Date(e.created_datetime).getDate() === day,
    );
    if (emotion) {
      navigate(`/diary/${year}/${month}/${day}`, {
        state: { id: emotion.id },
      });
    }
  };

  const getEmotionImage = (emotion) => {
    switch (emotion) {
      case "열정이":
        return EmotionPassion;
      case "불안이":
        return EmotionAnxiety;
      case "슬픔이":
        return EmotionSad;
      case "기쁨이":
        return EmotionJoy;
      case "버럭이":
        return EmotionAnger;
      case "감동이":
        return EmotionMoved;
      default:
        return null;
    }
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

      const emotion = emotionData.find((e) => {
        const date = new Date(e.created_datetime);
        return (
          date.getFullYear() === year &&
          date.getMonth() === month &&
          date.getDate() === day
        );
      });
      console.log(emotion);
      days.push(
        <Day
          key={day}
          isToday={isToday}
          onClick={
            emotion ? () => handleDayClick(year, month + 1, day) : undefined
          }
          emotionExists={emotion}
        >
          <DayUpper isToday={isToday}>
            <span>{day}</span>
          </DayUpper>
          <DayBottom>
            <DayImageLeft>
              <img src={DaySplitbar} alt="day splitbar" />
            </DayImageLeft>
            <DayImageRight>
              {emotion ? (
                <img
                  src={getEmotionImage(emotion.chosen_emotion)}
                  alt="emotion"
                  width={64}
                  height={64}
                />
              ) : null}
            </DayImageRight>
          </DayBottom>
        </Day>,
      );
    }

    return days;
  };

  const isCurrentOrNextMonth = () => {
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    return (
      (today.getFullYear() === currentDate.getFullYear() &&
        today.getMonth() === currentDate.getMonth()) ||
      (nextMonth.getFullYear() === currentDate.getFullYear() &&
        nextMonth.getMonth() === currentDate.getMonth())
    );
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
      <SubmitButton onClick={goToMonthCard} disabled={isCurrentOrNextMonth()}>
        이달의 감정 카드 확인하기
      </SubmitButton>
    </CalendarContainer>
  );
};

export default Calendar;
