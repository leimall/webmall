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
import ProductCardOne from "@/components/Common/Products/cardtwo";
import { searchProducts } from "@/apis/product";
const SalesPage = () => {
  const { categories } = useMenuStore();

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("default");
  const [showBackTop, setShowBackTop] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.error("111", selectedBrands);
  }, [selectedBrands]);

  useEffect(() => {
    console.error("222", priceRange);
  }, [priceRange]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await searchProducts(searchQuery);

    console.error(res);
  }





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
                    { value: "default", label: "Default" },
                    { value: "sales", label: "Sales" },
                    { value: "price-asc", label: "Price Low to High" },
                    { value: "price-desc", label: "Price High to Low" },
                    { value: "rating", label: "Rating" },
                  ]}
                />
              </div>
              <div className="text-gray-500">共 {products.length} 件商品</div>
            </div>
          </div>
          {/* 商品列表 */}
          <div className="grid grid-cols-3 gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 py-4 gap-2 sm:gap-3 md:gap-4">
              {
                products&& products.length && products.map((product) => (
                  <ProductCardOne key={product.ID} product={product} />
                )
              )}
            </div>

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
