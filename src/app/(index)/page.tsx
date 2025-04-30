import { Metadata } from 'next';
import NewsLists from "@/components/Layout/index/lastest";
import BestLists from "@/components/Layout/index/bast";
import ReadyToShop from "@/components/Layout/index/ReadytoShip";
import Comment from "@/components/Layout/index/comment";
import PublicLists from "@/components/Layout/index/publists";

import Informatin from "@/template/indexInfo";
import { getBestProductList, getSaleProductList, getLasterProductList } from "@/apis/product";
import { getProductByCategory } from "@/apis/product";
import { notFound } from 'next/navigation';
import FirstAdPage from '@/components/Layout/index/ad/first';

import BannerInIndex from '@/components/Common/Banner';
import type { Product } from "@/types/products";


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
  return []
}

export default async function PageHome() {
  const ZodiacName = "Zodiac Realm"
  const CultureName = "Culture Realm"
  const MastersName = "Masters Realm"
  const OriginalName = "Original Realm"
  const ThreeDName = "3D Sculpted Realm"

  let fetchedLasers: Product[] = [];
  let fetchedBast: Product[] = [];
  let fetchedSale: Product[] = [];

  let ZodiacList: Product[] = [];
  let CultureList: Product[] = [];
  let MastersList: Product[] = [];
  let OriginalList: Product[] = [];
  let ThreeDList: Product[] = [];
  try {
    const [laserResponse, bestResp, saleResp, ZodiacResp, CultureResp, MastersResp, OriginalResp, ThreeDResp] = await Promise.all([
      getLasterProductList(),
      getBestProductList(),
      getSaleProductList(),
      getProductByCategory(ZodiacName, { offset: 1, limit: 4 }),
      getProductByCategory(CultureName, { offset: 1, limit: 8 }),
      getProductByCategory(MastersName, { offset: 1, limit: 8 }),
      getProductByCategory(OriginalName, { offset: 1, limit: 8 }),
      getProductByCategory(ThreeDName, { offset: 1, limit: 8 })
    ]);

    // Assuming each API returns an array of objects
    fetchedLasers = laserResponse.data;
    fetchedBast = bestResp.data;
    fetchedSale = saleResp.data;
    ZodiacList = ZodiacResp.data?.list || [];
    CultureList = CultureResp.data?.list || [];
    MastersList = MastersResp.data?.list || [];
    OriginalList = OriginalResp.data?.list || [];
    ThreeDList = ThreeDResp.data?.list || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    notFound();
  }

  const returnURL = (title: string) => {
    return `/category/${title.toLowerCase().replace(/\s+/g, '_')}`
  }


  return (
    <main >
      <FirstAdPage />
      <div className="relative mx-auto max-w-c-1440 items-center justify-between align-items:flex-end px-2 md:px-8 2xl:px-0">
        <ReadyToShop title="Sale" products={fetchedSale} />
        <NewsLists title="New Release" products={fetchedLasers} />
        <BannerInIndex />
        <PublicLists title={ZodiacName} url={returnURL(ZodiacName)} products={ZodiacList} />
        <PublicLists title={CultureName} url={returnURL(CultureName)} products={CultureList} />
        <PublicLists title={MastersName} url={returnURL(MastersName)} products={MastersList} />
        <PublicLists title={OriginalName} url={returnURL(OriginalName)} products={OriginalList} />
        <PublicLists title={ThreeDName} url={returnURL(ThreeDName)} products={ThreeDList} />
        {/* <BestLists title="Best Seller" products={fetchedBast} /> */}
        <Comment title="User Feedbacks" products={fetchedSale} />
        <Informatin />
      </div>
    </main>
  );
}


export const revalidate = 3600; // 每 3600 秒（1 小时）重新验证并更新页面