import React from "react";
import { useNavigateExternal } from "../../hooks/useNavigateExternal";
import { useEffect } from "react";
import { ReactComponent as NaverIcon } from "../../assets/images/nLogo.svg";
import styled from "styled-components";
import { ReactComponent as KakaoIcon } from "../../assets/images/kakao.svg";
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

const LoginButton = styled.button`
  width: 100%;
  max-width: 335px;
  height: 65px;
  background-color: var(--Gray-01, #727272);

  color: #f4f4f4;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  line-height: 160%;
  letter-spacing: -0.36px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const KakaoLoginButton = styled(LoginButton)`
  flex-direction: row;
  background: #ffe812;
  bottom: 80px;
  color: #000000;
  margin-bottom: 14px;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledKakaoLogo = styled(KakaoIcon)`
  margin-right: 20px;
`;
const StyledNaverLogo = styled(NaverIcon)`
  margin-right: 20px;
`;

const Login = () => {
  const navigateExternal = useNavigateExternal();

  const naverClientId = process.env.REACT_APP_NAVER_CLIENT_ID || "";
  const naverRedirectUri = process.env.REACT_APP_NAVER_REDIRECT_URI || "";
  const kakaoClientId = process.env.REACT_APP_KAKAO_CLIENT_ID || "";
  const kakaoRedirectUri = "http://localhost:3000/kakao-callback";

  const generateRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const state = generateRandomString(16) || "";

  const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&redirect_uri=${naverRedirectUri}&state=${state}`;
  const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectUri}&state=${state}`;

  const handleNaverLogin = () => {
    navigateExternal(naverLoginUrl);
  };

  const handleKakaoLogin = () => {
    navigateExternal(kakaoLoginUrl);
  };

  return (
    <>
      <LoginContainer>
        <LoginBox>
          <img src={Logo} alt="logo" />
        </LoginBox>

        <KakaoLoginButton onClick={handleKakaoLogin}>
          <StyledKakaoLogo width={32} height={32} />
          카카오로 로그인
        </KakaoLoginButton>

        <LoginButton onClick={handleNaverLogin} disabled={true}>
          <ButtonContent>
            <StyledNaverLogo width={20} height={20} />
            네이버로 로그인
          </ButtonContent>
        </LoginButton>
      </LoginContainer>
    </>
  );
};

export default Login;
