import React from "react";
import styled from "styled-components";
import JoyNoeye from "./../assets/images/joy_noeye.svg";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  color: #f4f4f4;
  height: calc(var(--vh, 1vh) * 100);
`;

const LoadingMessage = styled.h1`
  color: var(--White-01, #f4f4f4);
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 32px */
  letter-spacing: -0.4px;
  margin-top: 24px;
`;

const DiaryLoading = () => {
  return (
    <PageContainer>
      <img src={JoyNoeye} alt="Joy" width={60} height={60} />
      <LoadingMessage>
        감정이들에게 전달 중이에요.
        <br />
        조금만 기다려주세요!
      </LoadingMessage>
    </PageContainer>
  );
};

export default DiaryLoading;
