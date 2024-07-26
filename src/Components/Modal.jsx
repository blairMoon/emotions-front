import React from "react";
import styled from "styled-components";
import Btn from "./Btn";
import Joy from "../assets/images/emotionJoy.svg";
import Sad from "../assets/images/emotionSad.svg";
import Passion from "../assets/images/emotionPassion.svg";

const CustomSubmitButton = styled(Btn)`
  margin-top: 40px;
`;
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: end;
`;

const ModalContent = styled.div`
  height: 424px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

// const CloseButton = styled.button`
//   margin-top: 20px;
//   padding: 10px 20px;
//   border: none;
//   background-color: #333;
//   color: white;
//   cursor: pointer;
//   border-radius: 5px;
// `;
const ModalText = styled.div`
  color: var(--Black-02, #1f1f1f);
  text-align: center;
  /* Title 4 */
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 32px */
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
