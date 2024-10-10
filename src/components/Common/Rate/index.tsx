'use client'
import React, { useEffect } from 'react';
import { Rate } from 'antd';


export default function CustomRate({rating}: {rating: number}) {
  const [value, setValue] = React.useState(4.5);
  useEffect(() => {
    setValue(rating);
  }, [rating]);

  return (
    <div>
      <Rate disabled defaultValue={value} style={{ fontSize: 14, color: '#FFA407FF' }} />
    </div>
  );
}