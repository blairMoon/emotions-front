import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";
import NavBarArrow from "../../Components/NavbarArrow";
import SubmitButton from "../../Components/Btn";
import Modal from "../../Components/Modal";
import { ReactComponent as EmotionMoved } from "../../assets/images/emotionMoved.svg";
import { ReactComponent as EmotionAnger } from "../../assets/images/emotionAnger.svg";
import { ReactComponent as EmotionPassion } from "../../assets/images/emotionPassion.svg";
import { ReactComponent as EmotionAnxiety } from "../../assets/images/emotionAnxiety.svg";
import { ReactComponent as EmotionSad } from "../../assets/images/emotionSad.svg";
import { ReactComponent as EmotionJoy } from "../../assets/images/emotionJoy.svg";
import api from "../../utils/api";
import useAuthStore from "../../stores/authStore";

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

const EmotionCommentWrp = styled.div`
  background-color: ${(props) =>
    props.isSelected
      ? props.emotion === "joy"
        ? "rgba(249, 228, 74, 0.16)"
        : props.emotion === "sad"
          ? "#262B46"
          : props.emotion === "passion"
            ? "rgba(59, 231, 128, 0.12)"
            : props.emotion === "anger"
              ? "rgba(205, 71, 71, 0.13)"
              : props.emotion === "moved"
                ? "rgba(221, 84, 156, 0.15)"
                : props.emotion === "anxiety"
                  ? "rgba(146, 80, 252, 0.13)"
                  : "#333"
      : "#333"};
  position: relative;
  width: 294px;
  flex-shrink: 0;
  border-radius: 46px 20px 20px 15px;

  margin-bottom: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const TextEmotionContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => props.padding || "20px 20px 20px 55px"};

  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Text = styled.p`
  color: var(--White-01, #f4f4f4);
  margin: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => (props.isSelected ? "500" : "400")};
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
`;

const emotionMap = {
  기쁨이: "joy",
  슬픔이: "sad",
  열정이: "passion",
  버럭이: "anger",
  감동이: "moved",
  불안이: "anxiety",
};

const emotionImgMap = {
  joy: EmotionJoy,
  sad: EmotionSad,
  passion: EmotionPassion,
  anger: EmotionAnger,
  moved: EmotionMoved,
  anxiety: EmotionAnxiety,
};

const emotionColorMap = {
  기쁨이: "#F9E44A",
  슬픔이: "#5B75FF",
  열정이: "#3BE780",
  버럭이: "#E14C4C",
  감동이: "#F667AC",
  불안이: "#9250FC",
};

const emotionEnum = {
  열정이: 1,
  기쁨이: 2,
  감동이: 3,
  불안이: 4,
  버럭이: 5,
  슬픔이: 6,
};

const EmotionResultPage = () => {
  const location = useLocation();
  const emotionData = location.state.result;

  const sortedEmotions = useMemo(() => {
    if (!emotionData?.data?.emotions || !emotionData?.data?.percentage) {
      return [];
    }

    return Object.entries(emotionData.data.emotions)
      .map(([emotion, comment]) => ({
        emotion,
        comment,
        percentage: emotionData.data.percentage[emotion] || 0,
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 3);
  }, [emotionData]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { handleSubmit, setValue } = useForm();
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [currentDate, setCurrentDate] = useState("");
  const navigate = useNavigate();
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    setIsButtonDisabled(selectedEmotion === null);

    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${month}월 ${day}일`;
    setCurrentDate(formattedDate);
  }, [selectedEmotion]);
  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotionMap[emotion]);
    setValue("emotion_id", emotionEnum[emotion]);
  };

  const sendMainEmotion = async (emotion_id) => {
    try {
      const response = await api.patch(
        `/api/v1/diaries/${emotionData.data.diary_id}/`,
        {
          main_emotion_id: emotion_id,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (data) => {
    await sendMainEmotion(data.emotion_id);
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
          {sortedEmotions.map(({ emotion, comment, percent }, index) => {
            return (
              <React.Fragment key={index}>
                <EmotionColor key={index} color={emotionColorMap[emotion]}>
                  {emotion.slice(0, -1)}
                </EmotionColor>
                {index < sortedEmotions.length - 1 && ", "}
              </React.Fragment>
            );
          })}
          이
          <br /> 포텐님께 찾아왔어요!
        </Title>
        <SubTitle>가장 인상 깊은 감정이를 선택해주세요</SubTitle>

        <EmotionsWrp>
          {sortedEmotions.map(({ emotion, comment, percent }, index) => {
            const currentEmotion = emotionMap[emotion] || "";
            const EmotionSvg = emotionImgMap[currentEmotion];

            return (
              <ParentWrapper
                key={index}
                justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
              >
                <EmotionCommentWrp
                  emotion={currentEmotion}
                  isSelected={selectedEmotion === currentEmotion}
                  onClick={() => handleEmotionClick(emotion)}
                >
                  <EmotionSvg
                    height="80px"
                    width="80px"
                    style={
                      index % 2 === 0
                        ? { position: "absolute", left: "-40px" }
                        : { position: "absolute", right: "-40px" }
                    }
                  />
                  <TextEmotionContainer
                    padding={
                      index % 2 === 0
                        ? "20px 20px 20px 55px"
                        : "20px 55px 20px 20px"
                    }
                  >
                    <Text isSelected={selectedEmotion === currentEmotion}>
                      {comment}
                    </Text>
                  </TextEmotionContainer>
                </EmotionCommentWrp>
              </ParentWrapper>
            );
          })}
        </EmotionsWrp>
        <input type="hidden" name="emotion" />
        <SubmitButton type="submit" disabled={isButtonDisabled}>
          선택 완료
        </SubmitButton>
        {isModalOpen && (
          <Modal
            selectedEmotion={selectedEmotion}
            onClose={handleCloseModal}
            currentDate={currentDate}
          />
        )}
      </Container>
    </form>
  );
};

export default EmotionResultPage;
