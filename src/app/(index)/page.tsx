import { Metadata } from 'next';
import Adpage from "@/components/Layout/Adpage";
import NewsLists from "@/components/Layout/index/lastest";
import BestLists from "@/components/Layout/index/bast";
import SaleLists from "@/components/Layout/index/sales";
import Comment from "@/components/Layout/index/comment";

import Informatin from "@/template/indexInfo";
import type { Product } from "@/types/products";
import { getBestProductList, getSaleProductList, getLasterProductList } from "@/apis/product";
import { notFound } from 'next/navigation';

import FirstAdPage from '@/components/Layout/index/ad/first';


export const metadata: Metadata = {
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
        width: 1920,
        height: 1920,
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

export async function generateStaticParams() {
  return [];
}


export default async function PageHome() {

  let fetchedLasers: Product[] = [];
  let fetchedBast: Product[] = [];
  let fetchedSale: Product[] = [];
  try {
    const [laserResponse, bestResp, saleResp] = await Promise.all([
      getLasterProductList(),
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
    <main >
      {/* <BannerInIndex banners={banners} /> */}
      <FirstAdPage />
      <div className="relative mx-auto max-w-c-1440 items-center justify-between align-items:flex-end px-2 md:px-8 2xl:px-0">
        <NewsLists title="New Release" products={fetchedLasers} />
        <Adpage />
        <BestLists title="Best Seller" products={fetchedBast} />
        <Adpage />
        <SaleLists title="Sale" products={fetchedSale} />
        {/* <FaqPage /> */}

        <Comment title="User Feedbacks" products={fetchedSale}  />
        <Informatin />
      </div>
    </main>
  );
}


export const revalidate = 3600; // 每 3600 秒（1 小时）重新验证并更新页面