import React from "react";
import { useNavigateExternal } from "../../hooks/useNavigateExternal";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 320px;
`;

const LogoPlaceholder = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f0f0f0;
  border-radius: 16px;
  margin-bottom: 20px;
`;

const LoginText = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 40px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 15px 0;
  background-color: #03c75a;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #02b350;
  }
`;

const LoginPage = () => {
  const navigateExternal = useNavigateExternal();

  // TODO: clientId, redirectUri, naverLoginUrl 등은 .env 파일로 관리
  const clientId = "DBBq0YrcmGdcmZetwFd6";
  const redirectUri = encodeURIComponent("http://localhost:3000/naver-callback");

  // TODO: CSRF 방지를 위한 랜덤한 문자열 생성
  const state = "RANDOM_STATEsdsd";

  const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

  const handleLogin = () => {
    navigateExternal(naverLoginUrl);
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LogoPlaceholder />
        <LoginText>서비스명과 함께 ~~~~를 해보세요!</LoginText>
        <LoginButton onClick={handleLogin}>네이버로 로그인</LoginButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;