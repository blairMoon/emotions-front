import React from "react";

import styled from "styled-components";
import NavBarArrow from "../../Components/NavbarArrow";
import EmotionMoved from "../../assets/images/emotionMoved.svg";
import EmotionAnger from "../../assets/images/emotionAnger.svg";
import EmotionPassion from "../../assets/images/emotionPassion.svg";
import EmotionAnxiety from "../../assets/images/emotionAnxiety.svg";
import EmotionSad from "../../assets/images/emotionSad.svg";
import EmotionJoy from "../../assets/images/emotionJoy.svg";

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

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;

const InfoTextWrp = styled.div`
  color: var(--White-01, #f2f2f2);
  margin-bottom: 20px;
`;

const EmotionInfoWrp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px 16px;
`;

const EmotionInfoItem = styled.div`
  width: 160px;
  height: 257px;
  flex-shrink: 0;
  border-radius: 8px;

  background-color: ${(props) =>
    props.backgroundColor || "var(--Black-01, #25241C)"};
`;

const EmotionInfoUpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 16px;
`;

const EmotionInfoBottom = styled.div`
  margin: 0 14px;
`;

const EmotionName = styled.div`
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.36px;
  margin-bottom: 10px;
  color: ${(props) => props.color || "var(--White-01, #f2f2f2)"};
`;
const EmotionDescription = styled.div`
  color: #c1c1c1;

  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%; /* 22.4px */
  letter-spacing: -0.28px;
`;

const InfoText = styled.div`
  color: var(--White-01, #f4f4f4);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 25.6px */
  letter-spacing: -0.32px;
  margin-bottom: 16px;
`;

const EmotionInfo = () => {
  return (
    <Container>
      <NavBarArrow text="감정이 소개" to="/diary" />
      <InfoWrap>
        <InfoTextWrp>
          <InfoText>
            나의 하루 일상을 기록하면 감정이를 만날 수 있어요.
          </InfoText>
          <InfoText>
            감정이는 내 기록에 따라 한명이 될 수도, <br />
            여러명이 될 수도 있답니다!
          </InfoText>
          <InfoText>
            그럼 <b>마이모지</b>에 살고 있는 감정이들을 소개할게요!
          </InfoText>
        </InfoTextWrp>
        <EmotionInfoWrp>
          <EmotionInfoItem backgroundColor="#25241C">
            <EmotionInfoUpper>
              <img src={EmotionJoy} alt="기쁨" width={92} height={92} />
            </EmotionInfoUpper>
            <EmotionInfoBottom>
              <EmotionName color="#F9E44A">기쁨</EmotionName>
              <EmotionDescription>
                함께 즐거운 순간들을 만들어가고 싶어요! 웃을 일이 많았으면
                좋겠어요
              </EmotionDescription>
            </EmotionInfoBottom>
          </EmotionInfoItem>
          <EmotionInfoItem backgroundColor="#1D1E25">
            <EmotionInfoUpper>
              <img src={EmotionSad} alt="슬픔" width={92} height={92} />
            </EmotionInfoUpper>
            <EmotionInfoBottom>
              <EmotionName color="#5B75FF">슬픔</EmotionName>
              <EmotionDescription>
                가끔은 세상의 어두운 면을 바라보는 걸 좋아해요. 저도 필요한
                존재니까요!
              </EmotionDescription>
            </EmotionInfoBottom>
          </EmotionInfoItem>
          <EmotionInfoItem backgroundColor="#251D1D">
            <EmotionInfoUpper>
              <img src={EmotionAnger} alt="버럭" width={92} height={92} />
            </EmotionInfoUpper>
            <EmotionInfoBottom>
              <EmotionName color="#E14C4C">버럭</EmotionName>
              <EmotionDescription>
                가끔 감정이 격해질 때가 많지만, 그만큼 열정이 넘쳐요. 아무도 못
                말려~
              </EmotionDescription>
            </EmotionInfoBottom>
          </EmotionInfoItem>
          <EmotionInfoItem backgroundColor="#1B221E">
            <EmotionInfoUpper>
              <img src={EmotionPassion} alt="열정" width={92} height={92} />
            </EmotionInfoUpper>
            <EmotionInfoBottom>
              <EmotionName color="#3BE780">열정</EmotionName>
              <EmotionDescription>
                항상 새로운 도전을 좋아해요. 저랑 같이 열정있는 하루를 보내봐요!
                아자!
              </EmotionDescription>
            </EmotionInfoBottom>
          </EmotionInfoItem>
          <EmotionInfoItem backgroundColor="rgba(246, 103, 172, 0.05)">
            <EmotionInfoUpper>
              <img src={EmotionMoved} alt="감동" width={92} height={92} />
            </EmotionInfoUpper>
            <EmotionInfoBottom>
              <EmotionName color="#F667AC">감동</EmotionName>
              <EmotionDescription>
                오늘은 또 감동적인 일이 얼마나 많을까요? 일상은 항상 설렘의
                연속이죠.
              </EmotionDescription>
            </EmotionInfoBottom>
          </EmotionInfoItem>
          <EmotionInfoItem backgroundColor="rgba(146, 80, 252, 0.05)">
            <EmotionInfoUpper>
              <img src={EmotionAnxiety} alt="불안" width={92} height={92} />
            </EmotionInfoUpper>
            <EmotionInfoBottom>
              <EmotionName color="#9250FC">불안</EmotionName>
              <EmotionDescription>
                미래에 대한 걱정이 아주 많지만 그런 불안이 우리를 더 강하게
                만들어요!
              </EmotionDescription>
            </EmotionInfoBottom>
          </EmotionInfoItem>
        </EmotionInfoWrp>
      </InfoWrap>
    </Container>
  );
};

export default EmotionInfo;
