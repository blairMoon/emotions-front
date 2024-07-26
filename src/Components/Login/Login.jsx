import React from "react";
import { useNavigateExternal } from "../../hooks/useNavigateExternal";
import styled from "styled-components";
import { ReactComponent as NaverIcon } from "../../assets/images/nLogo.svg";
import Logo from "../../assets/images/logo.svg";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f4f4;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LoginText = styled.p`
  font-size: 41.05px;
  font-weight: bold;
  color: #d9d000;
  text-align: center;
  line-height: 160%;
  letter-spacing: -0.821px;
`;

const LoginButton = styled.button`
  width: 100%;
  max-width: 335px;
  height: 65px;
  background-color: #03c75a;
  color: #f4f4f4;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 160%;
  letter-spacing: -0.36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  cursor: pointer;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNaverLogo = styled(NaverIcon)`
  margin-right: 20px;
`;

const Login = () => {
  const navigateExternal = useNavigateExternal();

  const clientId = process.env.REACT_APP_NAVER_CLIENT_ID || "";
  const redirectUri = process.env.REACT_APP_NAVER_REDIRECT_URI || "";

  // TODO: CSRF 방지를 위한 랜덤한 문자열 생성
  const state = "RANDOM_STATEsdsd";

  const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

  const handleLogin = () => {
    navigateExternal(naverLoginUrl);
  };

  return (
    <LoginContainer>
      <LoginBox>
        <img src={Logo} alt="logo" />
      </LoginBox>
      <LoginButton onClick={handleLogin}>
        <ButtonContent>
          <StyledNaverLogo width={20} height={20} />
          네이버로 로그인
        </ButtonContent>
      </LoginButton>
    </LoginContainer>
  );
};

export default Login;
