// stores/authStore.ts
import type { UserInfo } from "@/types/userinfo";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  token: string | null;
  user: UserInfo | null;
  returnUrl: string | null;
  setUser: (user: UserInfo) => void;
  setAuth: (token: string, user: UserInfo) => void;
  clearAuth: () => void;
  setReturnUrl: (url: string) => void;
  clearReturnUrl: () => void;
}

// 类型定义
interface PersistedState {
  token: string | null;
  user: UserInfo | null;
  returnUrl: string | null;
  expiresAt?: string; // `expiresAt` 是可选项
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      returnUrl: null,
      setUser: (user: UserInfo) => set({ user }),
      setAuth: (token: string, user: UserInfo) => set({ token, user }),
      clearAuth: () => set({ token: null, user: null }),
      setReturnUrl: (url: string) => set({ returnUrl: url }),
      clearReturnUrl: () => set({ returnUrl: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      migrate: (state: unknown) => {
        const persistedState = state as PersistedState; // 将 `state` 明确为 `PersistedState` 类型
        if (!persistedState.expiresAt || new Date(persistedState.expiresAt) < new Date()) {
          return { token: null, user: null };
        }
        return persistedState;
      },
    }
  )
);
