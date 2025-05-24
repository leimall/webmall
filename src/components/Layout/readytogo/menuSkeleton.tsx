import React from 'react';
import { Skeleton } from 'antd';

export default function MenuSkeleton() {
  return (
    <div className="transition-all relative">
      <div className="p-1 pl-2">
        <Skeleton.Input active className="w-full" style={{ height: '20px' }} />
      </div>
      <div className="p-1 pl-2">
        <Skeleton.Input active className="w-full" style={{ height: '20px' }} />
      </div>
      <div className="p-1 pl-2">
        <Skeleton.Input active className="w-full" style={{ height: '20px' }} />
      </div>
      <div className="p-1 pl-2">
        <Skeleton.Input active className="w-full" style={{ height: '20px' }} />
      </div>
      <div className="p-1 pl-2">
        <Skeleton.Input active className="w-full" style={{ height: '20px' }} />
      </div>
    </div>
  );
}
