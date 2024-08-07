// stores/authStore.ts
import type { UserInfo } from "@/types/userinfo";
import { setuid } from "process";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  user: UserInfo | null;
  setUser: (user: UserInfo) => void;
  setAuth: (token: string, user: UserInfo) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setUser: (user: UserInfo) => set({ user }),
      setAuth: (token: string, user: UserInfo) => set({ token, user }),
      clearAuth: () => set({ token: null, user: null }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
      serialize: (state) => {
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);
        return JSON.stringify({ ...state, expiresAt: expiresAt.toISOString() });
      },
      deserialize: (str) => {
        const state = JSON.parse(str);
        if (new Date(state.state.expiresAt) < new Date()) {
          localStorage.removeItem("auth-storage");
          return { state: { token: null, user: null }, version: state.version };
        }
        return state;
      },
    }
  )
);
