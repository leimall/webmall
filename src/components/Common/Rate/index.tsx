'use client'
import React, { useEffect } from 'react';
import { Rate } from 'antd';
import type { ReviewItem } from '@/types/products';


export default function CustomRate({review}: {review:ReviewItem}) {
  const [value, setValue] = React.useState<string>(String(5.0));
  useEffect(() => {
    setValue(String(review.average.toFixed(1)));
  }, [review.average]);
  return (
    <div>
      <span className='mr-2'>{value}</span>
      <Rate disabled allowHalf defaultValue={review.average} style={{ fontSize: 14, color: '#FF9100FF' }} />
      <span className='ml-2'>({review.reviews})</span>
    </div>
  );
}