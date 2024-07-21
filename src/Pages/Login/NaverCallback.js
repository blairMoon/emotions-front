import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const NaverCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const provider = "naver"

    if (code && state) {
      sendCodeToBackend(code, state, provider);
    } else {
      console.error('Authorization code not found');
      navigate('/');
    }
  }, [location]);

  const sendCodeToBackend = async (code, state, provider) => {
    try {
      // TODO: .env 파일에 백엔드 서버 주소를 저장하고 사용하세요. (추후 배포후)
      const response = await axios.post(`http://localhost:8000/api/v1/auth/naver-login?provider=${provider}`, { code, state });
      console.log('Login successful', response.data);
      localStorage.setItem('jwt_token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
      navigate('/');
    }
  };

  return <div>네이버 로그인 처리 중...</div>;
};

export default NaverCallback;