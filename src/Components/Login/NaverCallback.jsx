import React, { useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingPage from "./Loading";
import useAuthStore from "../../stores/authStore";
import api from "../../utils/api";

const NaverCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const sendCodeToBackend = useCallback(
    async (code, state, provider) => {
      try {
        const response = await api.post(
          `/api/v1/auth/naver-login?provider=${provider}`,
          { code, state },
        );
        const accessToken = response.data.access_token;
        setAccessToken(accessToken);

        // 프로필 조회
        await fetchUserProfile();

        navigate("/email-check");
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
      const response = await api.get("/api/v1/users/me");
      localStorage.setItem("user_email", response.data.email);
    } catch (error) {
      console.error("Failed to fetch user profile", error);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const provider = "naver";

    if (code && state) {
      sendCodeToBackend(code, state, provider);
    } else {
      console.error("Authorization code not found");
      navigate("/");
    }
  }, [location, navigate, sendCodeToBackend]);

  return <LoadingPage />;
};

export default NaverCallback;
