'use client'
import { useEffect } from 'react';
import { usePathStore } from '@/stores/usePathStore';
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export const useRequireLogin = () => {
  const router = useRouter();
  const { token } = useAuthStore(); // Zustand 中获取登录状态
  const { setRedirectPath } = usePathStore();


  useEffect(() => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentUrl = `${pathname}${searchParams.toString()}`;

    // 页面加载后执行逻辑
    if (!token) {
      setRedirectPath(currentUrl);
      router.push('/auth/signin');
    }
  }, [token, setRedirectPath, router]);

  return !!token;
}
