import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import styled from "styled-components";
import NavBar from "../../Components/NavBar";
import ellipse from "../../assets/images/Ellipse2820.svg";
const Container = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  border: 1px solid;
  margin: 0 auto;
  width: 375px;
  background-color:#1a1a1a;
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
position: relative;
z-index:2;
  color: var(--White-01, #F4F4F4);
margin-top: 0;
  font-size: 24px;
line-height:160%;
`;

const SubTitle = styled.h3`

  color: #666;
  text-align: center;
`;

const DateDisplay = styled.h4`
position: relative;
z-index:2;
font-weight: 500;
  color: #767676;
font-size: 20px;
  margin-bottom:8px;
`;

const TextArea = styled.textarea`
 position: relative; 
   z-index: 2;
padding:20px;
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
`

const CharCount = styled.div`
  margin-top: 10px;
  color: ${(props) => (props.$charCount > 300 ? "red" : "#333")};
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const DairyEntryForm = () => {
  const navigate = useNavigate();

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
  };

 const getCurrentDate = () => {
  const today = new Date();

  const month = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
  const day = today.getDate();
  return ` ${month}월 ${day}일`;
};

  const handleLogout = () => {
    localStorage.removeItem("jwt_token");
    navigate("/login");
  };

  useEffect(() => {
    setIsDisabled(diaryEntry.length === 0 || diaryEntry.length > 300);
  }, [diaryEntry]);

  return (
    <>
    
      <Container>
        <NavBar/>
       <Imgcontainer> <img src={ellipse } /></Imgcontainer>
            <DateDisplay> {getCurrentDate()}</DateDisplay>
        <Title>오늘은 어떤 감정들이 <br/> 나타날까요?</Title>
     
   

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextArea
            {...register("diaryEntry", {
              required: "일기를 작성해 주세요.",
              maxLength: {
                value: 300,
                message: "일기는 300자 이하로 작성해 주세요.",
              },
            })}
            placeholder="오늘 하루를 기록해보세요"
          />
          {errors.diaryEntry && (
            <ErrorMessage>{errors.diaryEntry.message}</ErrorMessage>
          )}

          <CharCount $charCount={diaryEntry.length}>
            {diaryEntry.length} / 300
          </CharCount>
          <SubmitButton type="submit" onClick={handleLogout}>
            로그아웃
          </SubmitButton>
          <SubmitButton type="submit" disabled={isDisabled}>
            제출
          </SubmitButton>
        </form>
      </Container>
    </>
  );
};

export default DairyEntryForm;
