import React from "react";
import styled from "styled-components";
import NavBarArrow from "../../Components/NavbarArrow";

const Container = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  border: 1px solid;
  margin: 0 auto;
  width: 375px;
  background-color: black;
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  position: relative;
  z-index: 2;
  color: var(--White-01, #f4f4f4);
  margin-top: 0;
  font-size: 24px;
  line-height: 160%;
`;

const SubTitle = styled.p`
  margin: 0 0 24px 0;
  color: var(--Gray-01, #727272);

  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.32px;
`;

const EmotionColor = styled.span`
  color: ${(props) => props.color || "black"};
`;

const EmotionsWrp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const EmotionCommentWrp = styled.div`
  width: 294px;
  height: ${(props) => props.height || "230px"};
  flex-shrink: 0;
  border-radius: 46px 20px 20px 15px;
  background: #333;
  margin-bottom: 24px;
  display: flex;
  justify-content: end;
`;
const EmotionResultPage = () => {
  return (
    <>
      <NavBarArrow />
      <Container>
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
          <EmotionCommentWrp height="120px"></EmotionCommentWrp>
          <EmotionCommentWrp height="100px"> </EmotionCommentWrp>
          <EmotionCommentWrp height="100px"></EmotionCommentWrp>
        </EmotionsWrp>
      </Container>
    </>
  );
};

export default EmotionResultPage;
