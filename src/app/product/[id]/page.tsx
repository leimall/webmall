// /product/[id]/page.tsx
import type { Product, ProductDetail } from "@/types/products";
import { getProductDetail, getProductList } from "@/apis/product";
import ProductDetailPage from "@/components/Layout/ProductDetail/test";
import Link from "next/link";
import type { Metadata } from "next";

// 定义默认的元数据信息，用于产品未找到的情况
const defaultMetadata = {
  title: 'FTAnails press-on-nails | Paint Your Life, Design Your World',
  description: "Indulge in the charm of our hand - crafted nail art sets at FTAnails. Each set is painstakingly created by skilled artisans using top - notch materials. The outcome? Stunning, durable nail designs that maintain their allure through daily life. Perfect for any occasion, they add a dash of sophistication. Now, enjoy a 25% discount in our Celebrate Day Sale. Upgrade your nail style—shop now!",
  openGraph: {
    title: 'FTAnails press-on-nails | Paint Your Life, Design Your World',
    description: "Indulge in the charm of our hand - crafted nail art sets at FTAnails. Each set is painstakingly created by skilled artisans using top - notch materials. The outcome? Stunning, durable nail designs that maintain their allure through daily life. Perfect for any occasion, they add a dash of sophistication. Now, enjoy a 25% discount in our Celebrate Day Sale. Upgrade your nail style—shop now!",
    type: 'website',
    url: 'https://ftanails.com',
    images: [
      {
        url: 'https://ftanails.com/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'FTAnails press - on nails'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FTAnails press-on-nails | Paint Your Life, Design Your World',
    description: "Indulge in the charm of our hand - crafted nail art sets at FTAnails. Each set is painstakingly created by skilled artisans using top - notch materials. The outcome? Stunning, durable nail designs that maintain their allure through daily life. Perfect for any occasion, they add a dash of sophistication. Now, enjoy a 25% discount in our Celebrate Day Sale. Upgrade your nail style—shop now!",
    images: ['https://ftanails.com/images/logo/logo.png']
  }
};

// 生成产品元数据的辅助函数
const generateProductMetadata = (product: ProductDetail, id: string): Metadata => {
  return {
      title: product.title,
      description: product.desction,
      openGraph: {
          title: product.title,
          description: product.desction,
          type: 'website',
          url: `https://ftanails.com/product/${id}`,
          images: [
              {
                  url: product.mainImg,
                  width: 1920,
                  height: 1920,
                  alt: `${product.title} product image`
              }
          ]
      },
      twitter: {
          card: 'summary_large_image',
          title: product.title,
          description: product.desction,
          images: [product.mainImg]
      }
  };
};
// 动态生成元数据
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
  try {
      const response = await getProductDetail(id);
      const product: ProductDetail | undefined = response?.data ?? undefined;

      if (!product) {
          return defaultMetadata;
      }

      return generateProductMetadata(product, id);
  } catch (error) {
      console.error('Error fetching product data for metadata:', error);
      return defaultMetadata;
  }
}
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
          <li className="text-gray-500 text-base">
            {product.title}
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row">
        <ProductDetailPage product={product} />
      </div>
    </div>
  );
}
