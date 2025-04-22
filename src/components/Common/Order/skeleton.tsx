import React from 'react';
import { Skeleton } from 'antd';

export default function ProductOrderSkeleton() {
  return (
    <div className="flex flex-row justify-between items-center gap-2 p-4 my-6 bg-bg-50 border-bg-200 border rounded">
      <div className="flex justify-between items-center">
        <h3 className="text-sm md:text-base">
          <Skeleton.Input active className="w-full" size="small" />
        </h3>
      </div>

      <div className="flex flex-col gap-1">
        <Skeleton.Button active size="small" shape="default" />
      </div>


      <div className="text-sm text-gray-500 ">
        <Skeleton.Input active className="w-full" style={{ height: '1.5rem' }} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-base text-right">
          <Skeleton.Button active className="w-full" style={{ height: '1.5rem' }} />
        </div>
      </div>
      <div className="text-gray-500">
        <Skeleton.Button active size="small" shape="default" />
      </div>
    </div>

  );
}
