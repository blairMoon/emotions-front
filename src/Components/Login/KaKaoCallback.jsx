import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingPage from "./Loading";
import useAuthStore from "../../stores/authStore";
import api from "../../utils/api";

const KaKaoCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { accessToken, setAccessToken, setNickname } = useAuthStore(
    (state) => state,
  );

  const sendCodeToBackend = useCallback(
    async (code, state, provider) => {
      try {
        const response = await api.post(
          `/api/v1/auth/kakao-login?provider=${provider}`,
          { code, state },
        );
        const accessToken = response.data.access_token;
        const isNewUser = response.data.is_new_user;

        setAccessToken(accessToken);
        setNickname(response.data.user_nickname);

        // 프로필 조회
        await fetchUserProfile();

        if (isNewUser) {
          navigate("/email-check?provider=kakao");
          return;
        }

        navigate("/diary");
      } catch (error) {
        console.error("Login failed", error);
        alert("로그인에 실패했어요. 다시 시도해주세요.");
        navigate("/");
      }
    },
    [navigate, setAccessToken],
  );

  const fetchUserProfile = async () => {
    try {
      const response = await api.get("/api/v1/users/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        localStorage.setItem("user_email", response.data.data.email);
      }
    } catch (error) {
      console.error("Failed to fetch user profile", error);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const provider = "kakao";

    if (code && state) {
      sendCodeToBackend(code, state, provider);
    } else {
      console.error("Authorization code not found");
      navigate("/");
    }
  }, [location, navigate, sendCodeToBackend]);

  return <LoadingPage />;
};

export default KaKaoCallback;
