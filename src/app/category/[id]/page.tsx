import { getCategoryList } from "@/apis/category";
import { getProductByCategory } from "@/apis/product";
import type { Category } from "@/types/category";
import type { Product } from "@/types/products";
import { message } from "antd";
import Title from '@/components/Common/Title'
import ProductPagination from "@/components/Common/Category/pagination";
import Link from "next/link";

const categoryTitleMap: { [id: string]: string } = {};

export async function generateStaticParams() {
  try {
    let list: { id: string }[] = [];
    const res = await getCategoryList();
    const products = res.data;

    if (res.code === 0 && res.data.length > 0) {
      products.forEach((product: Category) => {
        let trimmedStr = product.title_en.replace(/\s+/g, ' ').trim();
        const id = trimmedStr.toLowerCase().replace(/[\s\/]+/g, '_')
        list.push({
          id: id
        });
        categoryTitleMap[id] = product.title_en
      });
    }
    return list
  } catch (error) {
    message.error("Failed to fetch categories")
    return []
  }
}


export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const replaced = id.replace(/_/g, ' ');
    const t = replaced.charAt(0).toUpperCase() + replaced.slice(1);
    const title = t.replace(/%26/g, '&');
    const res = await getProductByCategory(id, { offset: 1, limit: 12 });
    const data: Product[] | null = res?.data?.list || null;
    const total: number = res?.data?.total || 0;
    if (!data) {
      return <div>Document not found</div>;
    }

    return (
      <div className="relative mx-auto max-w-c-1280 py-3 items-center justify-between align-items:flex-end px-2 md:px-8 2xl:px-0">
        <div>
          <ul className="flex items-center font-[sans-serif] space-x-4">
            <Link href={'/'} passHref>
              <li className="text-gray-800 text-base cursor-pointer">
                Home
              </li>
            </Link>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3.5 -rotate-90" viewBox="0 0 24 24">
                <path fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd" data-original="#000000"></path>
              </svg>
            </li>
            <li className="text-gray-500 text-base">
              {title}
            </li>
          </ul>
        </div>
        <div>
          <Title title={title} />
          <ProductPagination id={id} initialData={data} initialTotal={total} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching document:', error);
    return <div>Error loading document</div>;
  }
}