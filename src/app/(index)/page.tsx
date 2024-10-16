import BannerInIndex from "@/components/Common/Banner";
import Category from "@/components/Common/Category";
import Adpage from "@/components/Layout/Adpage";
import FaqPage from "@/components/Layout/faq";
import MiniPage from "@/components/Layout/Minilist";
import NewsLists from "@/components/Layout/NewsLists";
import TeamPage from "@/components/Layout/Team";
import { SafetyOutlined, ShoppingCartOutlined, DollarOutlined, CustomerServiceOutlined } from "@ant-design/icons";

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
			<NewsLists />
      <Adpage />
      {/* <MiniPage /> */}

      {/* <TeamPage /> */}

      <FaqPage />

      <div className="flex items-center justify-between py-8">
      <div className="text-center  w-1/4 p-4">
        <SafetyOutlined style={{ fontSize: '4rem', color: '#603813' }} />
        <div className="text-lg font-bold pt-2">
          Secure payments
        </div>
        <p>Your payment are 100% safe and protected</p>
      </div>
      <div className="text-center  w-1/4 p-4">
        <ShoppingCartOutlined style={{ fontSize: '4rem', color: '#603813' }} />
        <div className="text-lg font-bold pt-2">
          Fast Shipping
        </div>
        <p>On your doorstep in just 7-15 days.</p>
      </div>
      <div className="text-center w-1/4 p-4">
        <DollarOutlined style={{ fontSize: '4rem', color: '#603813' }} />
        <div className="text-lg font-bold pt-2">
          Duty Free
        </div>
        <p>No extra taxes or tips.</p>
      </div>
      <div className="text-center w-1/4 p-4">
        <CustomerServiceOutlined style={{ fontSize: '4rem', color: '#603813' }} />
        <div className="text-lg font-bold pt-2">
          Customer Servic
        </div>
        <p>24/7 customer support</p>
      </div>
    </div>
    </main>
  );
}
