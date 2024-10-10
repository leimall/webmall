import { getCategoryList } from '@/apis/category';
import Title from '../Title';
import CategoryItem from './item';
import Link from 'next/link';
import type { Category } from '@/types/category';

async function getCategories(): Promise<Category[]> {
  const response = await getCategoryList();
  return response.data;
}

export default async function Category() {
  const categoryList = await getCategories();

  return (
    <div className='gap-4 py-8'>
      <Title title='Featured Category' />
      <div className='flex justify-between flex-wrap gap-4 py-8'>
        {categoryList.map((category: Category) => (
          <Link key={category.ID} href={`/category/${category.title_en}`}>
            <CategoryItem item={category} />
          </Link>
        ))}
      </div>
    </div>
  )
}

