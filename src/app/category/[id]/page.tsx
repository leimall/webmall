import { getCategoryList } from "@/apis/category";
import { getProductByCategory } from "@/apis/product";
import type { Category } from "@/types/category";
import type { Product } from "@/types/products";
import { message } from "antd";
import Title from '@/components/Common/Title'
import ProductPagination from "@/components/Common/Category/pagination";

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