'use client'

import Title from '../Title';
import CategoryItem from './item';
import Link from 'next/link';
import type { Category } from '@/types/category';
import useMenuStore from '@/stores/useMenuStore';
import { useEffect, useState } from 'react';
import CategorySkeleton from './skeleton';

export default function Category() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<Category[]>([]);
  const { categories } = useMenuStore();

  useEffect(() => {
    if (categories.length > 0) {
      setList(categories);
      setLoading(false)
    }
  }, [categories]);

  return (
    <div className='gap-2 py-2 md:py-8 md:gap-4'>
      <Title title='Featured Category' />
      <div>
        {loading ? (
          // 显示 8 个骨架屏
          Array.from({ length: 8 }).map((_, index) => (
            <CategorySkeleton key={index} />
          ))
        ) : (
          list.map((mainCategory) => (
            <div className='pt-4'>
              <h2 className='text-lg font-bold text-gray-600'>{mainCategory.title_en}</h2>
              <div key={mainCategory.ID} className='flex justify-between md:justify-start flex-wrap gap-4 py-2 md:py-4 md:gap-4'>
                {mainCategory.children && mainCategory.children.map((subCategory) => (
                  <Link key={subCategory.ID} href={`/category/${subCategory.url}`}>
                    <CategoryItem item={subCategory} />
                  </Link>
                ))}
              </div>
            </div>
              ))
          )}
      </div>
    </div>
  )
}

