import React from "react";
import styled, { keyframes } from "styled-components";
import Btn from "./Btn";
import Joy from "../assets/images/emotionJoy.svg";
import Sad from "../assets/images/emotionSad.svg";
import Passion from "../assets/images/emotionPassion.svg";
import Anger from "../assets/images/emotionAnger.svg";
import Moved from "../assets/images/emotionMoved.svg";
import Anxiety from "../assets/images/emotionAnxiety.svg";

const CustomSubmitButton = styled(Btn)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  animation: ${fadeIn} 0.3s ease-out;
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ModalContent = styled.div`
  height: 424px;
  background: white;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  text-align: center;
  width: 375px;
  animation: ${slideUp} 0.3s ease-out;
  position: relative;
`;

const ModalText = styled.div`
  color: var(--Black-02, #1f1f1f);
  text-align: center;
  /* Title 4 */
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: -0.4px;
`;

const ModalImg = styled.img`
  margin-top: 50px;
  width: 146px;
  height: 146px;
  margin-bottom: 24px;
`;

const Bold = styled.span`
  font-weight: 800;
`;

const emotionMap = {
  joy: { label: "기쁨", img: Joy },
  sad: { label: "슬픔", img: Sad },
  passion: { label: "열정", img: Passion },
  anger: { label: "버럭", img: Anger },
  moved: { label: "감동", img: Moved },
  anxiety: { label: "불안", img: Anxiety },
};

const Modal = ({ selectedEmotion, onClose, currentDate }) => {
  const emotionData = emotionMap[selectedEmotion] || {};
  return (
    <ModalBackground>
      <ModalContent>
        <ModalImg src={emotionData.img} />

        <ModalText>
          {currentDate}의 감정이는 <br /> <Bold>{emotionData.label}</Bold>이에요
        </ModalText>
        <CustomSubmitButton onClick={onClose}>
          감정 캘린더로 이동하기
        </CustomSubmitButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
