import React, { useRef } from "react";
import styled from "styled-components";
import NavBarArrow from "../../Components/NavbarArrow";
import EmotionCard from "./../../assets/images/emoji_card.svg";
import Btn from "./../../Components/Btn";
import html2canvas from "html2canvas";

const CustomBtn = styled(Btn)`
  position: static;
  margin-top: 20px;
  margin-bottom: 36px;
`;

const Container = styled.div`
  margin: 0 auto;
  background-color: var(--Black-03, #1a1a1a);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 20px;
  height: calc(var(--vh, 1vh) * 100);
  overflow: scroll;
  scrollbar-width: none;
`;

//todo : fixed 왜 안되는지 확인해봐야함
const FixedBar = styled(NavBarArrow)`
  border: 3px solid pink;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const CardImg = styled.img``;

const MonthlyEmotionPage = () => {
  const cardRef = useRef(null);

  const handleSaveImage = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current);
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpeg");
      link.download = "emotion_card.jpg";
      link.click();
    }
  };

  return (
    <>
      <Container>
        <FixedBar to="/calendar" text="감정 카드" />
        <CardImg src={EmotionCard} ref={cardRef} />
        <CustomBtn onClick={handleSaveImage}>
          감정카드 이미지로 저장하기
        </CustomBtn>
      </Container>
    </>
  );
};

export default MonthlyEmotionPage;
