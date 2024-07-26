import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as AngerSvg } from "../../assets/images/anger_noeye.svg";
import { ReactComponent as JoySvg } from "../../assets/images/joy_noeye.svg";
import { ReactComponent as PassionSvg } from "../../assets/images/passion_noeye.svg";
import { ReactComponent as SadnessSvg } from "../../assets/images/sadness_noeye.svg";

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
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.48px;
  text-align: center;
  margin-bottom: 40px;
`;

const bounce = keyframes`
  0%, 50%, 100% { transform: translateY(0); }
  25% { transform: translateY(-20px); }
`;

const EmoticonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Emoticon = styled.div`
  margin: 0 10px;
  animation: ${(props) => (props.isActive ? bounce : "none")} 0.6s ease;
`;

const LoadingPage = () => {
  const [activeEmoticon, setActiveEmoticon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEmoticon((prev) => (prev + 1) % 4);
    }, 600); // 600ms마다 다음 이모티콘으로 전환

    return () => clearInterval(interval);
  }, []);

  const emoticons = [
    { Icon: AngerSvg, key: "anger" },
    { Icon: JoySvg, key: "joy" },
    { Icon: SadnessSvg, key: "sadness" },
    { Icon: PassionSvg, key: "passion" },
  ];

  return (
    <PageContainer>
      <LoadingMessage>
        감정이들을
        <br />
        불러 모으고 있어요...
      </LoadingMessage>
      <EmoticonContainer>
        {emoticons.map(({ Icon, key }, index) => (
          <Emoticon key={key} isActive={index === activeEmoticon}>
            <Icon width={28} height={28} />
          </Emoticon>
        ))}
      </EmoticonContainer>
    </PageContainer>
  );
};

export default LoadingPage;
