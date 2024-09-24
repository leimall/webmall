// /product/[id]/page.tsx
import type { Product, ProductDetail } from "@/types/products";
import { getProductDetail, getProductList } from "@/apis/product";
import ProductDetailPage from "@/components/Layout/ProductDetail/test";

export async function generateStaticParams() {
  let list: { id: string }[] = [];
  const res = await getProductList();
  const products = res.data;

  products.forEach((product: Product) => {
    list.push({
      id: product.productId,
    });
  });
  return list
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const response = await getProductDetail(id);
  const product: ProductDetail | undefined = response?.data ?? undefined;

  if (!product) {
    return <div>Product not found</div>;
  }


  // 返回客户端组件，服务器端不处理客户端逻辑
  return (
    <div className="relative mx-auto max-w-c-1280 py-5 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0">
      <div className="flex flex-col md:flex-row">
        <ProductDetailPage product={product} />
      </div>
    </div>
  );
}
