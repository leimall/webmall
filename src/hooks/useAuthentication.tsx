// hooks/useAuthCheck.ts
'use client';
import { useState } from 'react';
import { useAuthStore } from '@/stores/useUserinfoStroe';



interface AuthCheckOptions {
  onNeedLogin?: () => void;
  onLoginSuccess?: () => void;
}

export const useAuthCheck = (callback: () => Promise<void>, options: AuthCheckOptions = {}) => {
  const { token, setAuth } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkLogin = async () => {
    if (!token) {
      options.onNeedLogin?.();
      setIsModalOpen(true);
      return false;
    }
    await callback();
    return true;
  };

  const handleLogin = async (token: string, user: any) => {
    setIsLoading(true);
    try {
      setAuth(token, user);
      options.onLoginSuccess?.();
      setIsModalOpen(false);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return {
    checkLogin,
    isModalOpen,
    isLoading,
    handleLogin,
    setIsModalOpen,
    setIsLoading,
  };
};