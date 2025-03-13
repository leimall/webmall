'use client'
import { validateBoolean } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/stores/useUserinfoStroe'
import { useRouter } from 'next/navigation';
import { message } from 'antd';

export function useAuthenticated() {
  const { user, token, setReturnUrl } = useAuthStore()
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(Boolean)

  useEffect(() => {
    try {
      if (user && token) {
        setAuthenticated(true)
      } else {
        setAuthenticated(false)
        message.error('Please log in to complete the purchase.');
        const currentUrl = window.location.href
        setReturnUrl(currentUrl)
        router.push(`/auth/signin?returnUrl=${encodeURIComponent(currentUrl)}`);
      }
    } catch (error) {
      console.error({ error })
    }
  }, [user, token])

  return { authenticated: validateBoolean(authenticated, true) }
}
