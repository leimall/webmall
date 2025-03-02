'use client'
import React, { useEffect } from 'react';
import { Rate } from 'antd';


export default function CustomRate({rating}: {rating: number}) {
  const [value, setValue] = React.useState(5);
  useEffect(() => {
    setValue(rating);
  }, [rating]);

  return (
    <div>
      <Rate disabled allowHalf defaultValue={value} style={{ fontSize: 14, color: '#FF9100FF' }} />
      <span className='ml-2'>({value})</span>
    </div>
  );
}