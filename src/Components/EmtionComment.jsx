// src/Components/EmotionComment.js

import React from "react";
import styled from "styled-components";
import emotionAnger from "./../assets/images/emotionAnger.svg";
import emotionAnxiety from "./../assets/images/emotionAnxiety.svg";
import emotionJoy from "./../assets/images/emotionJoy.svg";
import emotionMoved from "./../assets/images/emotionMoved.svg";
import emotionPassion from "./../assets/images/emotionPassion.svg";
import emotionSad from "./../assets/images/emotionSad.svg";

const EmotionCommentWrp = styled.div`
  width: 294px;
  background-color: ${(props) =>
    props.isSelected
      ? props.emotion === "joy"
        ? "rgba(249, 228, 74, 0.16)"
        : props.emotion === "sad"
          ? "#262B46"
          : props.emotion === "passion"
            ? "rgba(59, 231, 128, 0.12)"
            : " #333"
      : " #333"};
  position: relative;
  flex-shrink: 0;
  border-radius: 46px 20px 20px 15px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const EmotionImg = styled.img`
  height: 80px;
  position: absolute;
  ${(props) => (props.left ? `left: ${props.left};` : "")}
  ${(props) => (props.right ? `right: ${props.right};` : "")}
`;

const TextEmotionContainer = styled.div`
  padding: ${(props) => props.padding || "20px 20px 20px 55px"};
  cursor: pointer;
  transition: background-color 0.3s ease;
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

const EmotionComment = ({
  emotionId,
  emotion,
  isSelected,
  height,
  imgPosition,
  padding,
  children,
  onClick,
}) => {
  const imagesById = {
    1: emotionPassion,
    2: emotionJoy,
    3: emotionMoved,
    4: emotionAnxiety,
    5: emotionAnger,
    6: emotionSad,
  };

  const imagesByName = {
    anger: emotionAnger,
    anxiety: emotionAnxiety,
    joy: emotionJoy,
    moved: emotionMoved,
    passion: emotionPassion,
    sad: emotionSad,
  };

  const emotionImage = emotionId
    ? imagesById[emotionId]
    : imagesByName[emotion];

  return (
    <EmotionCommentWrp
      emotion={emotion}
      isSelected={isSelected}
      height={height}
      onClick={onClick}
    >
      <EmotionImg height="80px" src={emotionImage} {...imgPosition} />
      <TextEmotionContainer padding={padding}>
        <Text isSelected={isSelected}>{children}</Text>
      </TextEmotionContainer>
    </EmotionCommentWrp>
  );
};

export default EmotionComment;
