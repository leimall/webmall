// app/search/page.tsx
'use client';
import { Suspense } from 'react';
import Readytogo from '@/components/Layout/readytogo'; // 假设已拆分组件

export default function ReadytogoPage() {
  return (
    <Suspense>
      <Readytogo />
    </Suspense>
  );
}