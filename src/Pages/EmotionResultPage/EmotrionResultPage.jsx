// src/pages/EmotionResultPage.js

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import NavBarArrow from "../../Components/NavbarArrow";
import emotionSad from "../../assets/images/emotionSad.svg";
import emotionJoy from "../../assets/images/emotionJoy.svg";
import emotionPassion from "../../assets/images/emotionPassion.svg";
import SubmitButton from "../../Components/Btn";
import Modal from "../../Components/Modal";
import EmotionComment from "./../../Components/EmtionComment";
const EmotionColor = styled.span`
  color: ${(props) => props.color || "black"};
`;

const Container = styled.div`
  margin: 0 auto;
  background-color: var(--Black-03, #1a1a1a);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 20px;
  height: calc(var(--vh, 1vh) * 100);
`;

const Title = styled.div`
  position: relative;
  z-index: 2;
  color: var(--White-01, #f4f4f4);
  margin-top: 0;
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 16px;
  font-family: SUIT;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.48px;
`;

const SubTitle = styled.div`
  color: var(--Gray-01, #727272);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.32px;
  margin-bottom: 24px;
`;

const EmotionsWrp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 12px;
`;

const ParentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;

const EmotionResultPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { handleSubmit, setValue } = useForm();
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [currentDate, setCurrentDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setIsButtonDisabled(selectedEmotion === null);

    const date = new Date();
    const formattedDate = `${String(date.getMonth() + 1).padStart(2, "0")}월${String(date.getDate()).padStart(2, "0")}일`;
    setCurrentDate(formattedDate);
  }, [selectedEmotion]);

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
    setValue("emotion", emotion);
    console.log(emotion);
  };

  const onSubmit = (data) => {
    console.log("emotion", data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/calendar");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
      <Container>
        <NavBarArrow to="/diary" />
        <Title>
          <EmotionColor color="var(--Yellow-01, #F9E44A)">기쁨</EmotionColor>,
          <EmotionColor color="var(--Blue-01, #5B75FF)" className="joy">
            슬픔
          </EmotionColor>
          ,
          <EmotionColor color="var(--Green-01, #3BE780)" className="joy">
            열정
          </EmotionColor>
          이
          <br /> 포텐님께 찾아왔어요!
        </Title>
        <SubTitle>가장 인상 깊은 감정이를 선택해주세요</SubTitle>

        <EmotionsWrp>
          <ParentWrapper justifyContent="flex-end">
            <EmotionComment
              height="120px"
              emotion="joy"
              isSelected={selectedEmotion === "joy"}
              imgPosition={{ left: "-40px" }}
              onClick={() => handleEmotionClick("joy")}
            >
              놀이공원이라니, 너무 재밌었겠다! 마지막에 비가 온 건 아쉽지만..
              놀이공원에서의 날씨는 완벽했으니까! 럭키비키라고 생각해 ㅎㅎ
            </EmotionComment>
          </ParentWrapper>
          <ParentWrapper justifyContent="flex-start">
            <EmotionComment
              height="100px"
              emotion="sad"
              isSelected={selectedEmotion === "sad"}
              imgPosition={{ right: "-40px" }}
              padding="20px 55px 20px 20px"
              onClick={() => handleEmotionClick("sad")}
            >
              아 완벽한 하루가 될 뻔 했는데.. 비가 쏟아진게 슬프다.. 비오면
              마음도.. 축축..해지는데.. 신발도 다 젖었겠네..
            </EmotionComment>
          </ParentWrapper>
          <ParentWrapper justifyContent="flex-end">
            <EmotionComment
              height="60px"
              emotion="passion"
              isSelected={selectedEmotion === "passion"}
              imgPosition={{ left: "-30px" }}
              onClick={() => handleEmotionClick("passion")}
            >
              우산쓰고 열심히 집 도착한 열정칭찬해🔥
            </EmotionComment>
          </ParentWrapper>
        </EmotionsWrp>
        <input type="hidden" name="emotion" />
        <SubmitButton type="submit" disabled={isButtonDisabled}>
          선택 완료
        </SubmitButton>
      </Container>
      {isModalOpen && (
        <Modal
          selectedEmotion={selectedEmotion}
          onClose={handleCloseModal}
          currentDate={currentDate}
        />
      )}
    </form>
  );
};

export default EmotionResultPage;
