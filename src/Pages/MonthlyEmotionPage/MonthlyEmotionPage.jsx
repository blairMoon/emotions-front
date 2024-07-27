import React, { useRef } from "react";
import styled from "styled-components";
import NavBarArrow from "../../Components/NavbarArrow";
import EmotionCard from "./../../assets/images/emoji_card.svg";
import Btn from "./../../Components/Btn";

const CustomBtn = styled(Btn)`
  position: static;
  margin-top: 40px;
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

const CardImg = styled.img`
  margin-top: 12px;
  border-radius: 24px;
`;

const MonthlyEmotionPage = () => {
  const cardRef = useRef(null);

  const handleSaveImage = () => {
    if (cardRef.current) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = cardRef.current.src;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        // 둥근 모서리를 가진 사각형 클리핑 경로 설정
        const radius = 24;
        ctx.beginPath();
        ctx.moveTo(radius, 0);
        ctx.lineTo(canvas.width - radius, 0);
        ctx.quadraticCurveTo(canvas.width, 0, canvas.width, radius);
        ctx.lineTo(canvas.width, canvas.height - radius);
        ctx.quadraticCurveTo(
          canvas.width,
          canvas.height,
          canvas.width - radius,
          canvas.height,
        );
        ctx.lineTo(radius, canvas.height);
        ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - radius);
        ctx.lineTo(0, radius);
        ctx.quadraticCurveTo(0, 0, radius, 0);
        ctx.closePath();
        ctx.clip();

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
          if (blob) {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "emotion_card.png";
            link.click();
            URL.revokeObjectURL(link.href);
          } else {
            console.error("Blob 생성 실패");
          }
        }, "image/png");
      };

      img.onerror = (error) => {
        console.error("이미지 로드 중 오류:", error);
      };
    } else {
      console.error("cardRef가 null입니다.");
    }
  };

  return (
    <>
      <Container>
        <NavBarArrow to="/calendar" text="감정 카드" />
        <CardImg src={EmotionCard} ref={cardRef} />
        <CustomBtn onClick={handleSaveImage}>
          감정카드 이미지로 저장하기
        </CustomBtn>
      </Container>
    </>
  );
};

export default MonthlyEmotionPage;
