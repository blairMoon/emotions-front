import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import styled from "styled-components";
import NavBar from "../../Components/NavBar";
import ellipse from "../../assets/images/Ellipse2820.svg";
import useAuthStore from "../../stores/authStore";
import NavBarArrow from "../../Components/NavbarArrow";
import emotionSad from "../../assets/images/emotionSad.svg"
import emotionJoy from "../../assets/images/emotionJoy.svg"
import emotionPassion from "../../assets/images/emotionPassion.svg"



const Container = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  border: 1px solid;
  margin: 0 auto;
  width: 375px;
  background-color: black;
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  position: relative;
  z-index: 2;
  color: var(--White-01, #f4f4f4);
  margin-top: 0;
  font-size: 24px;
  line-height: 160%;
`;

const SubTitle = styled.p`
margin:0 0 24px 0;
 color: var(--Gray-01, #727272);

font-family: SUIT;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
letter-spacing: -0.32px;
`;

const DateDisplay = styled.h4`
  position: relative;
  z-index: 2;
  font-weight: 500;
  color: #767676;
  font-size: 20px;
  margin-bottom: 8px;
`;

const TextArea = styled.textarea`
  position: relative;
  z-index: 2;
  padding: 20px;
  width: 335px;
  height: 281px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid var(--Gray-01, #727272);
  border-radius: 10px;
  background: rgba(219, 219, 219, 0.08);
  backdrop-filter: blur(19.850000381469727px);

  &::placeholder {
    color: var(--Gray-01, #727272);
    font-family: SUIT;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 28.8px */
    letter-spacing: -0.36px;
  }
  &:focus {
    color: white;
    font-family: SUIT;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 28.8px */
    letter-spacing: -0.36px;
    outline: none;
  }
`;
const Imgcontainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;

  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: blur(5px); /* 이미지에 블러 효과 적용 */
  }
`;

const CharCount = styled.div`

text-align: right;
font-family: SUIT;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 22.4px */
letter-spacing: -0.32px;
  margin-top: 10px;
  color: ${(props) => (props.$charCount > 300 ? "red" : "var(--Gray-01, #727272)")};
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;



const SubmitButton = styled.button`
color: var(--Gray-01, #727272);
text-align: center;
/* Headline 2 */
font-family: SUIT;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 160%; /* 28.8px */
background: var(--Black-02, #1F1F1F);
letter-spacing: -0.36px;
width: 335px;
height: 65px;
flex-shrink: 0;
margin-top: 134px;
  padding: 10px 20px;


  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
const EmotionImg = styled.img`
height:${props => props.height || 'auto'}; 

  position: absolute;
  left: ${props => props.left || 'auto'}; 
  right: ${props => props.right || 'auto'}; 

`
const EmotionColor = styled.span`
  color: ${props => props.color || 'black'};
`;


const EmotionsWrp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const ParentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
`;
const TextEmotionContainer = styled.div`
width: 100%;
height:100%;
  padding: ${props => props.padding || '20px 20px 20px 55px'};



`
const EmotionCommentWrp = styled.div`
  position: relative; 
  width: 294px;
  height: ${props => props.height || '230px'};
  flex-shrink: 0;
  border-radius: 46px 20px 20px 15px;
  background: #333;
  margin-bottom: 24px;
  display: flex;

  
  align-items: center; /* 세로 가운데 정렬 */
`;

const Text = styled.p`color: var(--White-01, #F4F4F4);
margin:0;

font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 19.6px */
letter-spacing: -0.28px;`


const EmotionResultPage = () => {
  const navigate = useNavigate();
  const clearToken = useAuthStore((state) => state.clearToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const diaryEntry = watch("diaryEntry", "");
  const [isDisabled, setIsDisabled] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
    navigate("/result")
  };

 

  return (
    <>
     <NavBarArrow />
      <Container>

  
        <Title>
        <EmotionColor color="var(--Yellow-01, #F9E44A)">기쁨</EmotionColor>,   
      <EmotionColor color="var(--Blue-01, #5B75FF)" className="joy">슬픔</EmotionColor>, 
      <EmotionColor color="var(--Green-01, #3BE780)" className="joy">열정</EmotionColor>이 
      <br /> 포텐님께 찾아왔어요!

     
        </Title>
        <SubTitle>가장 인상 깊은 감정이를 선택해주세요</SubTitle>

    


        <EmotionsWrp>
      <ParentWrapper justifyContent="flex-end">
        <EmotionCommentWrp height="120px"><EmotionImg height="79.6px" src={emotionJoy} left="-40px"/><TextEmotionContainer><Text>놀이공원이라니, 너무 재밌었겠다!
마지막에 비가 온 건 아쉽지만..
놀이공원에서의 날씨는 완벽했으니까!
럭키비키라고 생각해 ㅎㅎ</Text></TextEmotionContainer></EmotionCommentWrp>
      </ParentWrapper>
      <ParentWrapper justifyContent="flex-start">
        <EmotionCommentWrp height="100px"><EmotionImg height="80px" src={emotionSad}  right="-40px"/><TextEmotionContainer padding="20px 55px 20px 20px"><Text>아 완벽한 하루가 될 뻔 했는데..
비가 쏟아진게 슬프다.. 비오면 마음도..
축축..해지는데.. 신발도 다 젖었겠네..</Text></TextEmotionContainer></EmotionCommentWrp>
      </ParentWrapper>
      <ParentWrapper justifyContent="flex-end">
        <EmotionCommentWrp height="60px"><EmotionImg  height="69px" src={emotionPassion} left="-30px"/><TextEmotionContainer><Text>우산쓰고 열심히 집 도착한 열정칭찬해🔥</Text></TextEmotionContainer></EmotionCommentWrp>
      </ParentWrapper>
    </EmotionsWrp>

      </Container>
    </>
  );
};

export default EmotionResultPage;
