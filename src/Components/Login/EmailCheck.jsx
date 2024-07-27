import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as NaverLogo } from "../../assets/images/naverLogo.svg";
import { ReactComponent as KaKaoLogo } from "../../assets/images/kakaoLogo.svg";
import NavBarArrow from "../NavbarArrow";

const PageContainer = styled.div`
  margin: 0 auto;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 20px 0 20px;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  color: #f4f4f4;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Message = styled.div`
  font-size: 24px;
  margin-bottom: 40px;
  font-weight: bold;
  line-height: 160%;
  letter-spacing: -0.48px;
`;

const EmailBox = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNaverLogo = styled(NaverLogo)`
  margin-right: 10px;
`;

const StyledKaKaoLogo = styled(KaKaoLogo)`
  margin-right: 10px;
`;

const Email = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.36px;
`;

const NextButton = styled.button`
  text-align: center;
  /* Headline 2 */
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.36px;
  width: 100%;
  max-width: 335px;
  height: 65px;
  flex-shrink: 0;
  position: absolute;
  bottom: 20px;

  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #101010;
  color: #f4f4f4;
`;

const EmailCheck = () => {
  const navigate = useNavigate();
  const location = window.location;
  const provider = location.search.split("=")[1];

  const userEmail = localStorage.getItem("user_email");

  const handleNext = () => {
    navigate("/register");
  };

  return (
    <PageContainer>
      <TopSection>
        <NavBarArrow text="이메일 확인" to="/" />
        <Content>
          <Message>
            {provider === "naver" ? "네이버" : "카카오톡"} 이메일을
            <br />
            확인해주세요
          </Message>
          <EmailBox>
            {provider === "naver" ? (
              <StyledNaverLogo width={28} height={28} />
            ) : (
              <StyledKaKaoLogo width={28} height={28} />
            )}
            <Email>{userEmail}</Email>
          </EmailBox>
        </Content>
      </TopSection>
      <NextButton onClick={handleNext}>다음</NextButton>
    </PageContainer>
  );
};

export default EmailCheck;
