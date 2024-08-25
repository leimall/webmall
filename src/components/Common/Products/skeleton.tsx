import React from 'react';
import { Skeleton } from 'antd';

export default function ProductCardSkeleton() {
  return (
    <div className="bg-white hover:shadow-md transition-all relative cursor-pointer">
      {/* 模拟图片区域 */}
      <div className="relative w-full h-0 pb-[100%] overflow-hidden mx-auto bg-gray-200 rounded-md">
        {/* 图标代替图片，带闪烁动画效果 */}
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

      <div className="p-3">
        {/* 模拟标题 */}
        <Skeleton.Input active size="small" className="w-full mb-2" style={{ height: '20px' }} />
        {/* 模拟评分 */}
        <div className="flex items-center mt-2.5 mb-3">
          <Skeleton.Avatar active size="small" className="mr-2" />
          <Skeleton.Input active size="small" className="w-1/4" style={{ height: '16px' }} />
        </div>

        {/* 模拟价格和按钮 */}
        <div className="flex items-center justify-between">
          <Skeleton.Input active size="default" className="w-1/4" style={{ height: '24px' }} />
          <Skeleton.Button active style={{ width: '40%', height: '32px' }} />
        </div>
      </div>
    </div>
  );
}
