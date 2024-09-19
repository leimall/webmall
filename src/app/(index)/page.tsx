import BannerInIndex from "@/components/Common/Banner";
import Category from "@/components/Common/Category";
import Adpage from "@/components/Layout/Adpage";
import FaqPage from "@/components/Layout/faq";
import MiniPage from "@/components/Layout/Minilist";
import NewsLists from "@/components/Layout/NewsLists";
import TeamPage from "@/components/Layout/Team";

export default function Home() {
	const banners = [
    {
      imageUrl: 'https://example.com/banner1.jpg',
      title: 'Welcome to Our Store',
      description: 'Find the best products at the best prices!',
    },
    {
      imageUrl: 'https://example.com/banner2.jpg',
      title: 'New Collection',
      description: 'Check out our latest arrivals.',
    },
    // 添加更多轮播图数据...
  ];

  return (
    <main className="relative mx-auto max-w-c-1440 pt-5 pb-10 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0">
			<BannerInIndex banners={banners} />

			<Category />

			<NewsLists />

      <Adpage />

      <MiniPage />

      <TeamPage />

      <FaqPage />
    </main>
  );
}
