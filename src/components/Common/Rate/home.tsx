'use client'
import React, { useEffect } from 'react';
import { Rate } from 'antd';
import type { ReviewItem } from '@/types/products';
import { formatNumberWithUnit } from '@/utils/tools';


export default function CustomRate({review}: {review:ReviewItem}) {
  const [value, setValue] = React.useState<string>(String(5.0));
  useEffect(() => {
    setValue(String(review.average.toFixed(1)));
  }, [review.average]);
  return (
    <div>
      <span className='text-sm mr-1'>{value}</span>
      <Rate disabled allowHalf defaultValue={review.average} style={{ fontSize: 14, color: '#FF9100FF' }} />
      <span className='text-sm ml-1'>({formatNumberWithUnit(review.reviews, 2)})</span>
      
    </div>
  );
}