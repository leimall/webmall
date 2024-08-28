'use client'

import { useEffect } from 'react';
import { usePathStore } from '@/stores/usePathStore';
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export const useRequireLogin = () => {
  const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  const { token } = useAuthStore(); // Zustand 中获取登录状态
  const { setRedirectPath } = usePathStore();
  
  
  useEffect(() => {
    // const currentUrl = `${pathname}${searchParams}`;
    
    if (!token) {
      // setRedirectPath(pathname);
      router.push('/auth/signin');
    }
  }, [token, setRedirectPath, router ]);

  return !!token;
}
