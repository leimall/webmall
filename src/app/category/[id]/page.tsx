import { getCategoryList } from "@/apis/category";
import { getProductByCategory } from "@/apis/product";
import ProductCardOne from "@/components/Common/Products/cardtwo";
import ProductCardSkeleton from "@/components/Common/Products/skeleton";
import type { Category } from "@/types/category";
import type { Product } from "@/types/products";
import { message } from "antd";
import Title from '@/components/Common/Title'


export async function generateStaticParams() {
  try {
    let list: { id: string }[] = [];
    const res = await getCategoryList();
    const products = res.data;

    if (res.code === 0 && res.data.length > 0) {
      products.forEach((product: Category) => {
        list.push({
          id: product.title_en.toLowerCase().replace(/[\s\/]+/g, '_'),
        });
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
    const res = await getProductByCategory(id);
    const data: Product[] | null = res.data;
    if (!data) {
      return <div>Document not found</div>;
    }

    return (
      <div className="relative mx-auto max-w-c-1280 py-3 items-center justify-between align-items:flex-end px-2 md:px-8 2xl:px-0">
        <div>
          <Title title="Lastest Products" />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 py-8 gap-4 sm:gap-6 md:gap-8">
            {(
              data.map((product) => (
                <ProductCardOne key={product.ID} product={product} />
              )
              ))}
          </div>
        </div>

      </div>
    );
  } catch (error) {
    console.error('Error fetching document:', error);
    return <div>Error loading document</div>;
  }
}
