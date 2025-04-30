// app/search/page.tsx
'use client';
import { Suspense } from 'react';
import SearchLayout from '@/components/Layout/readytoship'; // 假设已拆分组件

export default function SearchPage() {
  return (
    <Suspense>
      <SearchLayout />
    </Suspense>
  );
}