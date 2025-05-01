// app/components/ScrollToTopOnMount.tsx（客户端组件）
'use client';
import { useEffect } from 'react';

export default function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}