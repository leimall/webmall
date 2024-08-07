import Link from 'next/link'
import type { CategoryItem } from '@/types/category';

export default function CategoryItem({ item }: { item: CategoryItem }) {
  return (
		<div>
    <Link href={`/category/${item.name}`}>
      <div className="category">
        <div className="category-name">{item.name}</div>
      </div>
    </Link>
		</div>
  );
};
