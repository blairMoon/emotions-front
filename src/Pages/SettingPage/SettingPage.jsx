import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import NavBarArrow from "../../Components/NavbarArrow";
import ToggleButton from "../../Components/Toggle";
import NextArrow from "../../assets/images/arrowRight.svg";
import useAuthStore from "../../stores/authStore";

const Container = styled.div`
  margin: 0 auto;
  background-color: var(--Black-03, #1a1a1a);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 20px;
  height: calc(var(--vh, 1vh) * 100);
`;

const SettingsWrp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

const SettingText = styled.span`
  color: var(--White-01, #f4f4f4);
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

const VersionInfo = styled.div`
  color: var(--Gray-01, #727272);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  padding: 15px 0;
  text-align: left;
  cursor: pointer;
  color: var(--Red-01, #e14c4c);
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

const SettingsPage = () => {
  const navigate = useNavigate();
  const clearToken = useAuthStore((state) => state.clearToken);
  const handleLogout = () => {
    clearToken();
    navigate("/");
  };

  return (
    <Container>
      <NavBarArrow />
      <SettingsWrp>
        <SettingItem>
          <SettingText>서비스 알림 허용</SettingText>
          <ToggleButton initialState={true} />
        </SettingItem>
        <SettingItem>
          <SettingText>나의 프로필</SettingText>
          <img src={NextArrow} alt="next arrow" />
        </SettingItem>
        <SettingItem>
          <SettingText>1:1 문의</SettingText>
          <img src={NextArrow} alt="next arrow" />
        </SettingItem>
        <SettingItem>
          <SettingText>이용약관</SettingText>
          <img src={NextArrow} alt="next arrow" />
        </SettingItem>
        <SettingItem>
          <SettingText>개인정보 처리 방침</SettingText>
          <img src={NextArrow} alt="next arrow" />
        </SettingItem>
        <SettingItem>
          <SettingText>버전 정보</SettingText>
          <VersionInfo>ver 1.0</VersionInfo>
        </SettingItem>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </SettingsWrp>
    </Container>
  );
};

export default SettingsPage;
