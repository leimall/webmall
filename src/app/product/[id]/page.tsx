// /product/[id]/page.tsx
import { getProductDetail } from "@/apis/product";
import ProductDetailPage from "@/components/Layout/ProductDetail/test";
import type { ProductDetail } from "@/types/products";

export async function generateStaticParams() {
  return [{ id: "650157200295071744" }, { id: "648844539087294464" }];
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
    <div className="relative mx-auto max-w-c-1440 py-5 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0">
      <ProductDetailPage product={product} />
    </div>
  );
}
