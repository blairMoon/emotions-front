import create from "zustand";
import { persist } from "zustand/middleware";
import api from "../utils/api";

const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (token) => {
        set({ accessToken: token });
        if (token) {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
          delete api.defaults.headers.common["Authorization"];
        }
      },

      clearToken: () => {
        set({ accessToken: null });
        delete api.defaults.headers.common["Authorization"];
      },
      setNickname: (nickname) => {
        set({ nickname });
      },
      nickname: "",
    }),
    {
      name: "auth-storage", // 스토리지에 저장될 때 사용할 키 이름
      getStorage: () => localStorage, // 또는 sessionStorage
    },
  ),
);

export default useAuthStore;
