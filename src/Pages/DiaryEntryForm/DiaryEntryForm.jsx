import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import styled from "styled-components";
import NavBar from "../../Components/NavBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
`;

const SubTitle = styled.h3`
  color: #666;
  text-align: center;
`;

const DateDisplay = styled.h4`
  color: #999;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 600px;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
`;

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
    return today.toISOString().split("T")[0];
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
      <NavBar />
      <Container>
        <Title>오늘 하루는 어떠셨나요?</Title>
        <SubTitle>
          서비스명을 통해 <br />
          오늘 하루를 기록해보세요
        </SubTitle>
        <DateDisplay>오늘 날짜: {getCurrentDate()}</DateDisplay>

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
