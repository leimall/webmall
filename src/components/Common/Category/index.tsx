'use client'
import React, { useEffect } from 'react';

import CategoryItem from './item';
import { getCategoryList } from '@/apis/category';
import { message } from 'antd';
import Title from '../Title';



export default function Category() {

  const [categoryList, setCategoryList] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await getCategoryList();
      setCategoryList(response.data);
    } catch (error) {
      message.error("Failed to fetch captcha");
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className='gap-4 py-8'>
      <Title title='Featured Category' />
      <div className='flex justify-between flex-wrap gap-4 py-8'>
        {
          categoryList.map((category: any) => (
            <CategoryItem key={category.id} item={{ ...category }} />
          ))
        }
      </div>
    </div>
  )
};

