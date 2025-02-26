// /product/[id]/page.tsx
import type { Product, ProductDetail } from "@/types/products";
import { getProductDetail, getProductList } from "@/apis/product";
import ProductDetailPage from "@/components/Layout/ProductDetail/test";
import Link from "next/link";

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
          <li className="text-gray-500 text-base font-bold">
            Product Detail
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row">
        <ProductDetailPage product={product} />
      </div>
    </div>
  );
}
