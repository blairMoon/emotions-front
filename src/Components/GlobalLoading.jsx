import React from "react";
import styled from "styled-components";
import LoadingGif from "./../assets/images/loading.gif";

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

const GlobalLoading = () => {
  return (
    <PageContainer>
      <img src={LoadingGif} alt="loading" width={60} height={60} />
      <LoadingMessage>잠시만 기다려주세요!</LoadingMessage>
    </PageContainer>
  );
};

export default GlobalLoading;
