import { Metadata } from 'next';
import Adpage from "@/components/Layout/Adpage";
import NewsLists from "@/components/Layout/index/lastest";
import Informatin from "@/template/indexInfo";
import type { Product } from "@/types/products";
import { getProductList, getBestProductList, getSaleProductList } from "@/apis/product";
import { notFound } from 'next/navigation';


export const metadata: Metadata = {
  title: 'FTAnails press-on-nails | Paint Your Life, Design Your World',
  description: "Indulge in the charm of our hand - crafted nail art sets at FTAnails. Each set is painstakingly created by skilled artisans using top - notch materials. The outcome? Stunning, durable nail designs that maintain their allure through daily life. Perfect for any occasion, they add a dash of sophistication. Now, enjoy a 25% discount in our Celebrate Day Sale. Upgrade your nail style—shop now!",
  // openGraph: {
  //   title: 'ftanails | Paint Your Life, Design Your World',
  //   description: 'ftanails相关的描述，体现‘Paint Your Life, Design Your World’的理念',
  //   images: 'https://example.com/ftanails-og-image.jpg'
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'ftanails | Paint Your Life, Design Your World',
  //   description: 'ftanails相关的描述，体现‘Paint Your Life, Design Your World’的理念',
  //   images: 'https://example.com/ftanails-twitter-image.jpg'
  // }
};

export async function generateStaticParams() {
  return [];
}


export default async function PageHome() {
  
  let fetchedLasers: Product[] = [];
  let fetchedBast: Product[] = [];
  let fetchedSale: Product[] = [];
  try {
    const [laserResponse, bestResp, saleResp] = await Promise.all([
      getProductList(),
      getBestProductList(),
      getSaleProductList()
    ]);

    // Assuming each API returns an array of objects
    fetchedLasers = laserResponse.data;
    fetchedBast = bestResp.data;
    fetchedSale = saleResp.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    notFound();
  }


  return (
    <main className="relative mx-auto max-w-c-1440 items-center justify-between align-items:flex-end px-2 md:px-8 2xl:px-0">
      {/* <BannerInIndex banners={banners} /> */}
      <Adpage />
      <NewsLists title="New Release" products={fetchedLasers} />
      <Adpage />
      <NewsLists title="Best Seller" products={fetchedBast} />
      <Adpage />
      <NewsLists title="Sale" products={fetchedSale} />
      {/* <FaqPage /> */}
      <Informatin />
    </main>
  );
}


export const revalidate = 3600; // 每 3600 秒（1 小时）重新验证并更新页面