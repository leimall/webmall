import React from 'react';
import { Skeleton } from 'antd';

export default function CategoryItemSkeleton() {
  return (
    <div
      className="bg-white pt-10 pb-5 w-40 max-w-sm rounded-md font-[sans-serif] overflow-hidden mx-auto">
      <div className="flex flex-col items-center">
        {/* 模拟图片区域 */}
        <Skeleton.Avatar active size={80} shape="square" className="w-20 h-20" />
        {/* 模拟标题区域 */}
        <div className="mt-5 text-center w-full">
          <Skeleton.Input active size="default" className="w-[60%] mx-auto" />
        </div>
      </div>
    </div>
  );
}
