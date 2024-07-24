import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "../../assets/images/backArrow.svg";

const PageContainer = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  width: 375px;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  color: #f4f4f4;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  position: relative;
  border-bottom: 1px solid #e0e0e0;
`;

const StyledBackArrow = styled(BackArrow)`
  cursor: pointer;
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  flex: 1;
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const SettingTitle = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ToggleSwitch = styled.input.attrs({ type: "checkbox" })`
  // 토글
`;

const ChevronRight = styled.span`
  // 오른쪽 화살표 아이콘
  cursor: pointer;
`;

const SettingPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <PageContainer>
      <Header>
        <StyledBackArrow width={24} height={24} onClick={handleBack} />
        <Title>설정</Title>
      </Header>
      <SettingsContainer>
        <SettingItem>
          <SettingTitle>서비스 알림 허용</SettingTitle>
          <ToggleSwitch />
        </SettingItem>
        <SettingItem>
          <SettingTitle>나의 프로필</SettingTitle>
          <ChevronRight>&gt;</ChevronRight>
        </SettingItem>
        <SettingItem>
          <SettingTitle>서비스 가이드 보기</SettingTitle>
          <ChevronRight>&gt;</ChevronRight>
        </SettingItem>
        <SettingItem>
          <SettingTitle>1:1 문의</SettingTitle>
          <ChevronRight>&gt;</ChevronRight>
        </SettingItem>
        <SettingItem>
          <SettingTitle>서비스 정보 (현재 ver 1.0)</SettingTitle>
          <ChevronRight>&gt;</ChevronRight>
        </SettingItem>
        <SettingItem>
          <SettingTitle>개인정보 처리 방침</SettingTitle>
          <ChevronRight>&gt;</ChevronRight>
        </SettingItem>
        <SettingItem>
          <SettingTitle>서비스 이용 약관</SettingTitle>
          <ChevronRight>&gt;</ChevronRight>
        </SettingItem>
        <SettingItem>
          <SettingTitle>로그아웃</SettingTitle>
          <ChevronRight>&gt;</ChevronRight>
        </SettingItem>
      </SettingsContainer>
    </PageContainer>
  );
};

export default SettingPage;
