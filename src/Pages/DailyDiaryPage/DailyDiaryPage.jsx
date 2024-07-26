import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams, useForm } from "react-router-dom";
import EmotionMoved from "./../../assets/images/emotionMoved.svg";
import EmotionAnger from "./../../assets/images/emotionAnger.svg";
import EmotionPassion from "./../../assets/images/emotionPassion.svg";
import EmotionAnxiety from "./../../assets/images/emotionAnxiety.svg";
import EmotionSad from "./../../assets/images/emotionSad.svg";
import EmotionJoy from "./../../assets/images/emotionJoy.svg";
import styled from "styled-components";
import NavBar from "../../Components/NavBar";
import ellipse from "../../assets/images/Ellipse2820.svg";
import InfoIcon from "../../assets/images/info.svg";
import EmotionComment from "../../Components/EmtionComment";
import NavBarArrow from "../../Components/NavbarArrow";
import api from "./../../utils/api";
import useAuthStore from "./../../stores/authStore";
const Container = styled.div`
  margin: 0 auto;
  background-color: #191919;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 20px 0 20px;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  overflow: scroll;
  scrollbar-width: none;
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

const EmotionColor = styled.span`
  color: ${(props) => props.color || "black"};
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

const TextDescriptionSecond = styled(TextDescription)`
  margin-top: 6px;
`;

const OtherEmotionWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const DailyDiaryPage = () => {
  const [DetailData, setDetailData] = useState([]);
  const [DetailEmotion, setDetailEmotion] = useState([]);
  const accessToken = useAuthStore((state) => state.accessToken);

  const location = useLocation();
  const { id } = location.state || {};

  const { year, month, day } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const emotionTitle = {
    1: ["열정", "#3BE780"],
    2: ["기쁨", "#F9E44A"],
    3: ["감동", "#F667AC"],
    4: ["불안", "#9250FC"],
    5: ["버럭", "#E14C4C"],
    6: ["슬픔", "#5B75FF"],
    7: ["슬픔", "#5B75FF"],
    8: ["슬픔", "#5B75FF"],
  };
  const handleInfoClick = () => {
    navigate("/emotionInfo");
  };

  useEffect(() => {
    const fetchDetailData = async () => {
      if (!id) return;
      try {
        const response = await api.get(`/api/v1/diaries/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.data) {
          console.log(response.data.data);
          setDetailData(response.data.data);
          setDetailEmotion(response.data.data.emotion_reacts);
          console.log(response.data.data.emotion_reacts);
        } else {
          console.error("Unexpected response structure:", response.data.data);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetailData();
  }, [id]);
  if (isLoading) {
    return (
      <Container>
        <NavBarArrow to="/calendar" />
        <Title>일단 로딩중</Title>
      </Container>
    );
  }
  const chosenEmotion = DetailEmotion.find(
    (emotion) => emotion.emotion_id === DetailData.chosen_emotion_id
  );

  const otherEmotions = DetailEmotion.filter(
    (emotion) => emotion.emotion_id !== DetailData.chosen_emotion_id
  )
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 2);

  return (
    <Container>
      <NavBarArrow to="/calendar" />

      <Title>
        {year}년 {month}월 {day}일에는 <br />
        <EmotionColor color={emotionTitle[DetailData.chosen_emotion_id][1]}>
          {emotionTitle[DetailData.chosen_emotion_id][0]}
        </EmotionColor>
        ,
        {otherEmotions.map((emotion, index) => (
          <React.Fragment key={index}>
            {index > 0 && ","}
            <EmotionColor color={emotionTitle[emotion.emotion_id][1]}>
              &nbsp; {emotionTitle[emotion.emotion_id][0]}
            </EmotionColor>
          </React.Fragment>
        ))}
        이 찾아왔어요!
      </Title>
      <Info>
        <img src={InfoIcon} alt="info" />
        <InfoText onClick={handleInfoClick}>감정이가 궁금해요</InfoText>
      </Info>

      <Text>{DetailData.content}</Text>

      <TextDescription>가장 인상 깊었던 감정이에요</TextDescription>
      {chosenEmotion && (
        <EmotionComment
          emotionId={chosenEmotion.emotion_id}
          imgPosition={{ right: "-40px" }}
          padding="20px 55px 20px 30px"
        >
          {chosenEmotion.content}
        </EmotionComment>
      )}
      <TextDescriptionSecond>다른 감정들도 살펴볼까요? </TextDescriptionSecond>
      <OtherEmotionWrp>
        {otherEmotions.map((emotion, index) => (
          <EmotionComment
            key={index}
            emotionId={emotion.emotion_id}
            imgPosition={{ left: "-40px" }}
          >
            {emotion.content}
          </EmotionComment>
        ))}
      </OtherEmotionWrp>
    </Container>
  );
};

export default DailyDiaryPage;
