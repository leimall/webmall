import React from 'react';
import { Skeleton } from 'antd';

export default function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-md transition-all relative">
      {/* 模拟图片区域 */}
      <div className="relative w-full h-0 pb-[100%] overflow-hidden mx-auto bg-gray-200 rounded-md">
        <div className="absolute inset-0 flex justify-center items-center animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-400"
            fill="none"
            viewBox="0 0 36 36"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 3v18h18V3H3zM12 12l4 4H8l4-4zm0-2l-4-4h8l-4 4z"
            />
          </svg>
        </div>
      </div>

      <div className="p-1 pl-2">
        <Skeleton.Input active className="w-full" style={{ height: '20px' }} />
        <div className="my-1">
          <Skeleton.Input active size="small" className="min-w-full" style={{ height: '16px' }} />
        </div>
      </div>
    </div>
  );
}
