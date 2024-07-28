import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import styled from "styled-components";
import NavBar from "../../Components/NavBar";
import ellipse from "../../assets/images/Ellipse2820.svg";
import InfoIcon from "../../assets/images/info.svg";
import api from "../../utils/api";
import DiaryLoading from "../../Components/DiaryLoading";
import useAuthStore from "../../stores/authStore";
import CuteAlert from "../../Components/CuteAlert";

const Container = styled.div`
  margin: 0 auto;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 20px 0 20px;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
`;

const DateDisplay = styled.div`
  position: relative;
  z-index: 2;
  font-weight: 500;
  color: #767676;
  font-size: 20px;
  font-style: normal;
  line-height: 160%;
  letter-spacing: -0.4px;
  margin-bottom: 4px;
`;

const Title = styled.div`
  position: relative;
  z-index: 2;
  color: var(--White-01, #f4f4f4);
  margin-bottom: 12px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: -0.48px;
`;

const Info = styled.div`
  margin-bottom: 38px;
  display: flex;
  align-items: center;
`;

const InfoText = styled.span`
  padding-left: 4px;
  color: #cbcbcb;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.28px;
  text-decoration-line: underline;
  cursor: pointer;
  z-index: 2;
`;

const TextArea = styled.textarea`
  position: relative;
  z-index: 2;
  padding: 20px;
  width: 335px;
  height: 281px;
  flex-shrink: 0;
  border: 1px solid var(--Gray-01, #727272);
  border-radius: 10px;
  background: rgba(219, 219, 219, 0.08);
  backdrop-filter: blur(19.850000381469727px);
  color: #f4f4f4;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.36px;
  outline: none;
  resize: none;

  &::placeholder {
    color: var(--Gray-01, #727272);
    font-family: SUIT;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 28.8px */
    letter-spacing: -0.36px;
  }
`;

const ImgContainer = styled.div`
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
    // filter: blur(2px);
  }
`;

const CharCount = styled.div`
  text-align: right;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.32px;
  margin-top: 12px;
  color: ${(props) =>
    props.$charCount > 300 ? "red" : "var(--Gray-01, #727272)"};
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  text-align: center;
  /* Headline 2 */
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.36px;
  width: 100%;
  max-width: 335px;
  height: 65px;
  flex-shrink: 0;
  position: absolute;
  bottom: 20px;

  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.disabled ? "#727272" : "#f4f4f4")};
  background-color: ${(props) => (props.disabled ? "#1f1f1f" : "#101010")};
`;

const emotionMap = {
  1: "열정",
  2: "기쁨",
  3: "감동",
  4: "불안",
  5: "버럭",
  6: "슬픔",
};

const emotionColorMap = {
  열정: "#3BE780",
  기쁨: "#F9E44A",
  감동: "#F667AC",
  불안: "#9250FC",
  버럭: "#E14C4C",
  슬픔: "#5B75FF",
};

const ColoredEmotion = styled.span`
  color: ${(props) => props.color};
`;

const DairyEntryForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [canCreate, setCanCreate] = useState(false);
  const accessToken = useAuthStore((state) => state.accessToken);
  const [topEmotions, setTopEmotions] = useState([]);
  const [diaryData, setDiaryData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  // const [loadingRender, setLoadingRender] = useState(false);
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const diaryEntry = watch("diaryEntry", "");
  const [isDisabled, setIsDisabled] = useState(true);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await api.post(
        `/api/v1/diaries/`,
        {
          content: data.diaryEntry,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (response.status === 201) {
        navigate("/emotionResult", {
          state: {
            result: response.data,
          },
        });
      }
    } catch (error) {
      console.error(error);
      if (
        error.response &&
        (error.response.status === 400 || error.response.status === 500)
      ) {
        setShowAlert(true);
      } else {
        setShowAlert(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();

    const month = today.getMonth() + 1;
    const day = today.getDate();
    return ` ${month}월 ${day}일`;
  };

  const handleInfoClick = () => {
    navigate("/emotionInfo");
  };

  useEffect(() => {
    const fetchTodayDiary = async () => {
      // setLoadingRender(true);
      try {
        const response = await api.get("/api/v1/diaries/today", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 200) {
          setDiaryData(response.data.data);
        }
      } catch (error) {
        setShowAlert(true);
      } finally {
        // setLoadingRender(false);
      }
    };

    fetchTodayDiary();
  }, [accessToken]);
  const processedDiaryData = useMemo(() => {
    if (!diaryData) return null;

    const canCreate = diaryData.can_create;
    const diaryContent = diaryData.diary?.content || "";
    let topEmotions = [];

    if (diaryData.diary && diaryData.diary.emotion_reacts) {
      topEmotions = diaryData.diary.emotion_reacts
        .filter((emotion) => emotion.percent > 0)
        .sort((a, b) => b.percent - a.percent)
        .slice(0, 3)
        .map((emotion) => emotion.emotion_id);
    }

    return { canCreate, diaryContent, topEmotions };
  }, [diaryData]);

  useEffect(() => {
    if (processedDiaryData) {
      setCanCreate(processedDiaryData.canCreate);
      setValue("diaryEntry", processedDiaryData.diaryContent);
      setTopEmotions(processedDiaryData.topEmotions);
    }
  }, [processedDiaryData, setValue]);

  useEffect(() => {
    setIsDisabled(diaryEntry.length === 0 || diaryEntry.length > 300);
  }, [diaryEntry]);

  if (loading) {
    return <DiaryLoading />;
  }
  // if (loadingRender) {
  //   return <GlobalLoading />;
  // }
  return (
    <Container>
      <NavBar />
      <ImgContainer>
        <img src={ellipse} alt="ellipse" />
      </ImgContainer>
      <DateDisplay>{getCurrentDate()}</DateDisplay>
      <Title>
        {canCreate ? (
          <>
            오늘은 어떤 감정들이 <br /> 나타날까요?
          </>
        ) : (
          <>
            오늘은 <br />
            {topEmotions.map((emotionId, index) => (
              <React.Fragment key={emotionId}>
                <ColoredEmotion color={emotionColorMap[emotionMap[emotionId]]}>
                  {emotionMap[emotionId]}
                </ColoredEmotion>
                {index < topEmotions.length - 1 && ", "}
              </React.Fragment>
            ))}
            을 만났어요
          </>
        )}
      </Title>
      <Info>
        <img src={InfoIcon} alt="info" />
        <InfoText onClick={handleInfoClick}>감정이가 궁금해요</InfoText>
      </Info>

      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <TextArea
          {...register("diaryEntry", {
            required: "일기를 작성해 주세요.",
            maxLength: {
              value: 300,
              message: "일기는 300자 이하로 작성해 주세요.",
            },
          })}
          placeholder="오늘 하루를 기록해주세요!&#10;(* 의미 없는 문구나 너무 짧은 문장은 감정이들의 분석이 어려워요!)"
          readOnly={!canCreate}
        />
        {errors.diaryEntry && (
          <ErrorMessage>{errors.diaryEntry.message}</ErrorMessage>
        )}

        <CharCount $charCount={diaryEntry.length}>
          {diaryEntry.length} / 300
        </CharCount>

        <SubmitButton
          type="submit"
          disabled={!canCreate || (canCreate && isDisabled)}
        >
          {canCreate ? "오늘의 감정 만나러 가기" : "내일 다시 만나요!"}
        </SubmitButton>
      </form>
      {showAlert && <CuteAlert onClose={handleCloseAlert} />}
    </Container>
  );
};

export default DairyEntryForm;
