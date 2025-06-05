// /product/[id]/page.tsx
import type { Product, ProductDetail } from "@/types/products";
import { getProductDetail, getProductList } from "@/apis/product";
import ProductDetailPage from "@/components/Layout/ProductDetail/test";
import type { Metadata } from "next";
import ProductNavigation from "./Navigation";
import ScrollToTopOnMount from "@/components/Common/top/ScrollToTopOnMount";
import { SEO_index_title, SEO_KEYWORDS, SEO_index_description, SEO_ProductDetail_title, SEO_ProductDetail_description } from "@/utils/seo_keywords";

// 定义默认的元数据信息，用于产品未找到的情况
const defaultMetadata = {
  keywords: SEO_KEYWORDS.join(", "),
  title: SEO_index_title,
  description: SEO_index_description,
  openGraph: {
    title: SEO_index_title,
    description: SEO_index_description,
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
    title: SEO_index_title,
    description: SEO_index_description,
    images: ['https://ftanails.com/images/logo/logo.png']
  }
};

// 生成产品元数据的辅助函数
const generateProductMetadata = (product: ProductDetail, id: string): Metadata => {
  return {
    title: SEO_ProductDetail_title(product.title),
    description: SEO_ProductDetail_description(product.desction),
    openGraph: {
      title: SEO_ProductDetail_title(product.title),
      description: SEO_ProductDetail_description(product.desction),
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
      title: SEO_ProductDetail_title(product.title),
      description: SEO_ProductDetail_description(product.desction),
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
  try {

    let list: { id: string }[] = [];
    const res = await getProductList();
    const products = res.data;

    products.forEach((product: Product) => {
      list.push({
        id: product.productId,
      });
    });
    return list
  } catch (err) {
    console.error("err:", err);
    return []
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const response = await getProductDetail(id);
  const product: ProductDetail | undefined = response?.data ?? undefined;

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="relative mx-auto max-w-c-1280 py-5 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0">
      <ScrollToTopOnMount />
      <ProductNavigation product={product} />
      <div className="flex flex-col md:flex-row">
        <ProductDetailPage product={product} />
      </div>
    </div>
  );
}

