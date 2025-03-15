'use client'
import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  Slider,
  Rate,
  Select,
  Checkbox,
} from "antd";
import {
  ArrowUpOutlined,
} from "@ant-design/icons";
import useMenuStore from "@/stores/useMenuStore";
const SalesPage = () => {
  const { fetchCategories, categories } = useMenuStore();

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("default");
  const [showBackTop, setShowBackTop] = useState(false);
  const products = [
    {
      id: 1,
      title: "璀璨星空猫眼胶",
      price: 168,
      image:
        "https://public.readdy.ai/ai/img_res/1d4a8a61dace51cc41e2ec3ccd9cc459.jpg",
      sales: 3562,
      rating: 4.8,
      brand: "OPI",
    },
    {
      id: 2,
      title: "樱花粉嫩美甲贴",
      price: 39.9,
      image:
        "https://public.readdy.ai/ai/img_res/7c6254dfc4fc87e9677d5a12e626227a.jpg",
      sales: 8924,
      rating: 4.6,
      brand: "美诺",
    },
    {
      id: 3,
      title: "专业美甲工具套装",
      price: 299,
      image:
        "https://public.readdy.ai/ai/img_res/24b212933a238b5f7a73c66bc460c101.jpg",
      sales: 2341,
      rating: 4.9,
      brand: "CND",
    },
    {
      id: 4,
      title: "持久光疗甲油套装",
      price: 258,
      image:
        "https://public.readdy.ai/ai/img_res/1c946d6932e60abdcfe9b8e4d8e69850.jpg",
      sales: 5673,
      rating: 4.7,
      brand: "GELISH",
    },
    {
      id: 5,
      title: "闪钻魅力美甲贴",
      price: 45,
      image:
        "https://public.readdy.ai/ai/img_res/5fa2fe0c406fb97caad403885b6633a1.jpg",
      sales: 7234,
      rating: 4.5,
      brand: "奢悦",
    },
    {
      id: 6,
      title: "高级美甲护理油",
      price: 128,
      image:
        "https://public.readdy.ai/ai/img_res/bc6174b7c35395cd328e5f73faf52001.jpg",
      sales: 4521,
      rating: 4.8,
      brand: "卡奇尔",
    },
    {
      id: 7,
      title: "法式美甲套装",
      price: 199,
      image:
        "https://public.readdy.ai/ai/img_res/ace0599216e2bf6d88fcf4019a0e3185.jpg",
      sales: 3987,
      rating: 4.7,
      brand: "OPI",
    },
    {
      id: 8,
      title: "裸色系列甲油",
      price: 158,
      image:
        "https://public.readdy.ai/ai/img_res/358bf1668e60da1e18e2e513bbf02eff.jpg",
      sales: 6543,
      rating: 4.6,
      brand: "CND",
    },
  ];

  useEffect(() => {
    console.error("111", selectedBrands);
  }, [selectedBrands]);
  
  useEffect(() => {
    console.error("222", priceRange);
  }, [priceRange]);



  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="min-h-screen pt-8 bg-gradient-to-b to-white">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex gap-6">
        {/* 左侧筛选区域 */}
        <div className="w-64  flex-shrink-0">
          <div className="bg-background-back1 rounded p-4 space-y-6">
            <div>
              <h3 className="text-gray-700 font-medium mb-4">Price Range</h3>
              <Slider
                range
                min={0}
                max={1000}
                value={priceRange}
                onChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex items-center space-x-2">
                <Input
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  className="w-20"
                />
                <span>-</span>
                <Input
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-20"
                />
              </div>
            </div>

            <div>
              {categories && categories.length > 0 ? (
                categories.map((mainCategory) => (
                  <div key={mainCategory.ID}>
                    <h3 className="text-gray-700 font-medium mt-2` my-2">{mainCategory.title_en}</h3>
                    {mainCategory.children && mainCategory.children.map((subCategory) => (
                      <div key={subCategory.ID} className="flex items-center pt-1">
                        <Checkbox
                          checked={selectedBrands.includes(subCategory.title_en)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedBrands([...selectedBrands, subCategory.title_en]);
                            } else {
                              setSelectedBrands(
                                selectedBrands.filter((b) => b !== subCategory.title_en),
                              );
                            }
                          }}
                        >
                          <span className="text-gray-600">{subCategory.title_en}</span>
                        </Checkbox>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <div>No categories available</div>
              )}

            </div>
          </div>
        </div>
        {/* 右侧商品区域 */}
        <div className="flex-1">
          {/* 排序工具栏 */}
          <div className="bg-background-back1 rounded p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Select
                  value={sortBy}
                  onChange={setSortBy}
                  className="w-32"
                  options={[
                    { value: "default", label: "默认排序" },
                    { value: "sales", label: "销量优先" },
                    { value: "price-asc", label: "价格从低到高" },
                    { value: "price-desc", label: "价格从高到低" },
                    { value: "rating", label: "评分优先" },
                  ]}
                />
              </div>
              <div className="text-gray-500">共 {products.length} 件商品</div>
            </div>
          </div>
          {/* 商品列表 */}
          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <a
                    href="https://readdy.ai/home/56981454-c9bc-494d-99da-955549d12eb0/c7c04e59-ffe7-4bd9-b2fa-9b6a437c3e9d"
                    data-readdy="true"
                  >
                    <h3 className="text-gray-800 font-medium mb-2 hover:text-pink-500 cursor-pointer">
                      {product.title}
                    </h3>
                  </a>
                  <div className="flex items-center mb-2">
                    <Rate
                      disabled
                      defaultValue={product.rating}
                      className="text-sm text-yellow-400"
                    />
                    <span className="ml-2 text-sm text-gray-500">
                      {product.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-pink-500">
                      ¥{product.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      已售 {product.sales}
                    </span>
                  </div>
                  <Button
                    type="primary"
                    className="!rounded-button mt-4 w-full bg-pink-500 hover:bg-pink-600 border-none"
                  >
                    加入购物车
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 返回顶部按钮 */}
      {showBackTop && (
        <div
          className="fixed bottom-8 right-8 bg-pink-500 text-white p-3 rounded-full cursor-pointer hover:bg-pink-600 transition-colors"
          onClick={scrollToTop}
        >
          <ArrowUpOutlined className="text-xl" />
        </div>
      )}
    </div>
  );
};
export default SalesPage;
