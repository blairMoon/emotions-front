import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import styled from "styled-components";
import NavBar from "../../Components/NavBar";
import ellipse from "../../assets/images/Ellipse2820.svg";
import useAuthStore from "../../stores/authStore";
import NavBarArrow from "../../Components/NavbarArrow";

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

const EmotionColor = styled.span`
  color: ${props => props.color || 'black'};
`;


const EmotionsWrp = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: end;
`

const EmotionCommentWrp = styled.div`
width: 294px;
height:${props => props.height || '230px'};
flex-shrink: 0;
border-radius: 46px 20px 20px 15px;
background: #333;
margin-bottom:24px;
display: flex;
justify-content: end;
`
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

 <EmotionCommentWrp height="120px"></EmotionCommentWrp>
      <EmotionCommentWrp  height="100px"> </EmotionCommentWrp>
      <EmotionCommentWrp height="100px"></EmotionCommentWrp>

      </EmotionsWrp>
    



      </Container>
    </>
  );
};

export default EmotionResultPage;
