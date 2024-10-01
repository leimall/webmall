'use client'
import React, { useEffect, useState } from 'react';
import CategoryItem from './item';
import { getCategoryList } from '@/apis/category';
import { message } from 'antd';
import Title from '../Title';
import CategoryItemSkeleton from './loading';
import Link from 'next/link';
import type { Category } from '@/types/category';

export default function Category() {
  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const fetchData = async () => {
    try {
      const response = await getCategoryList();
      setCategoryList(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    } catch (error) {
      setLoading(false);
      message.error("Failed to fetch categories");
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
            <div key={index} >
              <CategoryItemSkeleton />
            </div>
          ))
        ) : (
          // 数据加载完成后显示真实内容
          categoryList.map((category: Category) => (
            <Link key={category.ID} href={`/category/${category.title_en}`}>
              <CategoryItem item={category} />
            </Link>
          ))
        )}
      </div>
    </div>
  )
};

