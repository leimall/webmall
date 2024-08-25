'use client'
import React, { useEffect, useState } from 'react';

import CategoryItem from './item';
import { getCategoryList } from '@/apis/category';
import { Avatar, List, message, Skeleton } from 'antd';
import Title from '../Title';
import item from './item';
import CategoryItemSkeleton from './loading';



export default function Category() {
  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await getCategoryList();
      setCategoryList(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    } catch (error) {
      setLoading(false);
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
      {loading ? (
          // 显示 8 个骨架屏
          Array.from({ length: 8 }).map((_, index) => (
            <CategoryItemSkeleton key={index} />
          ))
        ) : (
          // 数据加载完成后显示真实内容
          categoryList.map((category: any) => (
            <CategoryItem key={category.id} item={{ ...category }} />
          ))
        )}
      </div>
    </div>
  )
};

