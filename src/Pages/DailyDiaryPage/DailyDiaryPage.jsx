import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import NavBar from "../../Components/NavBar";
import ellipse from "../../assets/images/Ellipse2820.svg";
import InfoIcon from "../../assets/images/info.svg";
import EmotionComment from "../../Components/EmtionComment";
const Container = styled.div`
  margin: 0 auto;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 20px 0 20px;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
`;

const DateDisplay = styled.div`
  position: relative;
  z-index: 2;
  font-weight: 500;
  color: #767676;
  font-size: 20px;
  font-style: normal;
  line-height: 160%;
  letter-spacing: -0.4px;
  margin-bottom: 4px;
`;

const Title = styled.div`
  position: relative;
  z-index: 2;
  color: var(--White-01, #f4f4f4);
  margin-bottom: 12px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: -0.48px;
`;

const Info = styled.div`
  margin-bottom: 38px;
  display: flex;
  align-items: center;
`;

const InfoText = styled.span`
  padding-left: 4px;
  color: #cbcbcb;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.28px;
  text-decoration-line: underline;
  cursor: pointer;
  z-index: 2;
`;

const Text = styled.div`
  position: relative;
  z-index: 2;
  padding: 20px;
  width: 335px;
  height: 281px;
  flex-shrink: 0;
  border: 1px solid var(--Gray-01, #727272);
  border-radius: 10px;
  background: rgba(219, 219, 219, 0.08);
  backdrop-filter: blur(19.850000381469727px);
  color: #f4f4f4;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.36px;
  outline: none;
  resize: none;

  &::placeholder {
    color: var(--Gray-01, #727272);
    font-family: SUIT;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 28.8px */
    letter-spacing: -0.36px;
  }
`;

const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;

  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: blur(5px); /* 이미지에 블러 효과 적용 */
  }
`;

const TextDescription = styled.span`
  margin-top: 36px;
  margin-bottom: 18px;
  color: var(--Gray-01, #727272);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.32px;
`;

const DailyDiaryPage = () => {
  const { year, month, day } = useParams();
  const navigate = useNavigate();

  const handleInfoClick = () => {
    navigate("/emotionInfo");
  };

  return (
    <Container>
      <NavBar />
      <ImgContainer>
        <img src={ellipse} alt="ellipse" />
      </ImgContainer>
      <DateDisplay></DateDisplay>
      <Title>
        오늘은 어떤 감정들이 <br /> 나타날까요?
      </Title>
      <Info>
        <img src={InfoIcon} alt="info" />
        <InfoText onClick={handleInfoClick}>감정이가 궁금해요</InfoText>
      </Info>

      <Text>
        오늘은 정말 특별한 날이었어! 친구들이랑 놀이공원에 갔거든 ㅎㅎ 기대하던
        롤러코스터도 타고, 날씨도 너무 좋았어😆 근데 집가는 길에 비가 쏟아져서..
        편의점에서 우산을 샀어ㅠ 내 돈.......
      </Text>

      <TextDescription>가장 인상 깊었던 감정이에요</TextDescription>
      <EmotionComment
        height="100px"
        emotion="sad"
        imgPosition={{ right: "-40px" }}
        padding="20px 55px 20px 20px"
      >
        아 완벽한 하루가 될 뻔 했는데.. 비가 쏟아진게 슬프다.. 비오면 마음도..
        축축..해지는데.. 신발도 다 젖었겠네..
      </EmotionComment>
      <EmotionComment
        height="60px"
        emotion="passion"
        imgPosition={{ left: "-30px" }}
      >
        우산쓰고 열심히 집 도착한 열정칭찬해🔥
      </EmotionComment>
      <EmotionComment
        height="120px"
        emotion="joy"
        imgPosition={{ left: "-40px" }}
      >
        놀이공원이라니, 너무 재밌었겠다! 마지막에 비가 온 건 아쉽지만..
        놀이공원에서의 날씨는 완벽했으니까! 럭키비키라고 생각해 ㅎㅎ
      </EmotionComment>
    </Container>
  );
};

export default DailyDiaryPage;
