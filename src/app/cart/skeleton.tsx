import React from 'react';
import { Divider, Skeleton } from 'antd';
import CartListItem from './skeletonItem';

export default function CartSkeleton() {
  return (
    <div className="flex flex-col  md:flex-row ">
      <div className="flex-1 bg-background-back0 border rounded-md p-2 md:p-4">
        <div className='p-0 md:p-4'>
        {Array.from({ length: 3 }).map((_, index) => (
            <CartListItem key={index} />
          ))}
        </div>
      </div>
      <div className='w-full md:w-1/4 md:ml-8 sx:ml-0 '>
        <div className="border rounded-md md:mt-0 mt-4 sm:ml-0 p-4 bg-gray-100">
          <div className="px-4">
          <Skeleton.Input active={true} />
          </div>
          <Divider />
          <div className="px-4 text-gray-800 space-y-2">
            <p className="flex justify-between py-1">
              <Skeleton.Input active={true} />
            </p>
            <p className="flex justify-between py-1">
              
              <Skeleton.Input active={true} />
            </p>
            <p className="flex justify-between py-1">
              <Skeleton.Input active={true} />
            </p>

            <p className="flex justify-between py-1">
              <Skeleton.Input active={true} />
            </p>
            <p className="flex justify-between py-1">
              <Skeleton.Input active={true} />
            </p>
            <p className="flex justify-between py-1">
              <Skeleton.Input active={true} />
            </p>
          </div>
          <Divider />
          <div className="px-4">
            <div className="flex justify-between font-bold text-lg mt-4">
            <Skeleton.Input active={true} />
            </div>
          </div>
          <div className="mt-8 space-y-4">
          <Skeleton.Input active={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
