import React from "react";
import styled from "styled-components";
import NavBarArrow from "../../Components/NavbarArrow";
import emotionSad from "../../assets/images/emotionSad.svg";
import emotionJoy from "../../assets/images/emotionJoy.svg";
import emotionPassion from "../../assets/images/emotionPassion.svg";

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
const EmotionImg = styled.img`
  height: ${(props) => props.height || "auto"};
  position: absolute;
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
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

const ParentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;

const TextEmotionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => props.padding || "20px 20px 20px 55px"};
`;

const EmotionCommentWrp = styled.div`
  position: relative;
  width: 294px;
  height: ${(props) => props.height || "230px"};
  flex-shrink: 0;
  border-radius: 46px 20px 20px 15px;
  background: #333;
  margin-bottom: 24px;
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
`;

const Text = styled.p`
  color: var(--White-01, #f4f4f4);
  margin: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
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
          <ParentWrapper justifyContent="flex-end">
            <EmotionCommentWrp height="120px">
              <EmotionImg height="79.6px" src={emotionJoy} left="-40px" />
              <TextEmotionContainer>
                <Text>
                  놀이공원이라니, 너무 재밌었겠다! 마지막에 비가 온 건
                  아쉽지만.. 놀이공원에서의 날씨는 완벽했으니까! 럭키비키라고
                  생각해 ㅎㅎ
                </Text>
              </TextEmotionContainer>
            </EmotionCommentWrp>
          </ParentWrapper>
          <ParentWrapper justifyContent="flex-start">
            <EmotionCommentWrp height="100px">
              <EmotionImg height="80px" src={emotionSad} right="-40px" />
              <TextEmotionContainer padding="20px 55px 20px 20px">
                <Text>
                  아 완벽한 하루가 될 뻔 했는데.. 비가 쏟아진게 슬프다.. 비오면
                  마음도.. 축축..해지는데.. 신발도 다 젖었겠네..
                </Text>
              </TextEmotionContainer>
            </EmotionCommentWrp>
          </ParentWrapper>
          <ParentWrapper justifyContent="flex-end">
            <EmotionCommentWrp height="60px">
              <EmotionImg height="69px" src={emotionPassion} left="-30px" />
              <TextEmotionContainer>
                <Text>우산쓰고 열심히 집 도착한 열정칭찬해🔥</Text>
              </TextEmotionContainer>
            </EmotionCommentWrp>
          </ParentWrapper>
        </EmotionsWrp>
      </Container>
    </>
  );
};

export default EmotionResultPage;
