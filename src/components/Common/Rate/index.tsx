import React, { useEffect } from 'react';
import { Rate } from 'antd';


export default function CustomRate({rating}: {rating: number}) {
  const [value,setValue] = React.useState(4.5);
  useEffect(() => {
    console.log(rating);
    setValue(rating);
  }, [rating]);

  return (
    <div>
      <Rate disabled defaultValue={value} />
    </div>
  );
}