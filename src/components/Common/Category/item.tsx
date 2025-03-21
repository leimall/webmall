import Link from 'next/link'
import type { CategoryItem } from '@/types/category';

export default function CategoryItem({ item }: { item: CategoryItem }) {
  return (
      <div
      className="bg-white pt-10 pb-5 w-40 max-w-sm hover:scale-[1.03] rounded shadow font-[sans-serif] overflow-hidden mx-auto">
      <div className="flex flex-col items-center">
        {
          item.ID % 2 === 0 ? (
            <img
              src="/images/category/1.webp"
              alt={item.title_en}
              width={80}
              height={80}
              className="w-20 h-20 object-cover"
            />
          ) : (
            <img
              src="/images/category/2.webp"
              alt={item.title_en}
              width={80}
              height={80}
              className="w-20 h-20 object-cover"
            />
          )
        }
        <div className="mt-5 text-center">
          <h3 className="text-main font-bold text-xs leading-relaxed">{item.title_en}</h3>
        </div>
      </div>
    </div>
  );
}
