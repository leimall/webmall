'use client'
import React, { useEffect, useRef, useState } from "react";
import {
  Input,
  Slider,
  Select,
  Checkbox,
  Pagination,
  FloatButton,
  Drawer,
} from "antd";
import { useSearchParams } from "next/navigation";
import { getAllProductList, getAllTagList } from "@/apis/product";
import type { ProductSearch, TagItem } from "@/types/products";
import ProductCardOne from "@/components/Common/Products/cardtwo";
import ProductCardSkeleton from "@/components/Common/Products/skeleton";
import { FaListUl, FaXmark } from "react-icons/fa6";
import { getMenuList } from "@/apis/category";
import type { CategoryItem } from "@/types/category";
import MenuSkeleton from "./menuSkeleton";
const PAGE_SIZE = 12;
const Min_Price = 0;
const Max_price = 2000
const shopAllNails = "Shop All Nails"
const readyToGo = "Ready To Go"

function useDebounceEffect(callback: () => void, delay: number, dependencies: any[]) {
  const savedCallback = useRef<() => void>();

  // 保存最新的回调函数
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // 实现防抖逻辑
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    const id = setTimeout(tick, delay);
    return () => clearTimeout(id);
  }, [delay, ...dependencies]);
}

const SearchLayout = () => {
  const title = "Ready To Go"
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [saveAlllist, setSaveAlllist] = useState<ProductSearch[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductSearch[]>([]);
  const [products, setProducts] = useState<ProductSearch[]>([]);
  const [showProduct, setShowProduct] = useState<ProductSearch[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [total, setTotal] = useState(12);

  const [priceRange, setPriceRange] = useState([Min_Price, Max_price]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("default");
  const [showBackTop, setShowBackTop] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuList, setMenuList] = useState<CategoryItem[]>([]);

  useEffect(() => {
    if (selectedBrands.length > 0) {
      handleCategorydChange(selectedBrands);
    } else {
      filterProducts(saveAlllist);
    }
  }, [selectedBrands]);

  useDebounceEffect(() => {
    handlePriceChange();
  }, 300, [priceRange]);

  useEffect(() => {
    getallproductlist(searchParams.get("query"), searchParams.get("tag"));
  }, [searchParams.toString()])

  const getallproductlist = async (query: string | null, tag: string | null) => {
    try {
      setLoading(true)
      await fetchMenu()
      const res = await getAllProductList()
      if (res.code === 0) {
        setSaveAlllist(res?.data)
        filterProducts(res?.data)
        initProcess(res?.data, query, tag)
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const fetchMenu = async () => {
    const menuList = await getMenuList();
    if (menuList.code === 0 && menuList.data && menuList.data.length > 0) {
      const filteredArray = menuList.data.filter((item) => item.title_en !== shopAllNails);
      setMenuList(filteredArray);
    }
  }

  const initProcess = (data: ProductSearch[], query: string | null, tag: string | null) => {
    let productList = data
    productList = filterProductsBySearch(productList, readyToGo)
    setSaveAlllist(productList)
    if (query) {
      if (query !== shopAllNails && query !== readyToGo) {
        setSelectedBrands([query])
      } else {
        setSelectedBrands([])
      }
    }
    if (selectedBrands.length > 0) {
      productList = filterObjectsByCategoryTitle(selectedBrands, productList)
    }
    if (priceRange[0] > Min_Price || priceRange[1] > Max_price) {
      productList = filterObjectsByPriceOfPruduct(productList)
    }
    filterProducts(productList)
  }
  const showproduct = (data: ProductSearch[]) => {
    setProducts(data);
    setTotal(data.length);
    setCurrentPage(1);
    setShowProduct(getPaginatedItems(data, 1, PAGE_SIZE))
  }

  const getPaginatedItems = (items: ProductSearch[], page: number, pageSize: number) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
  };

  const filterProducts = (data: ProductSearch[]) => {
    setFilteredProducts(data);
    showproduct(data);
  }

  const handleCategorydChange = (value: string[]) => {
    showproduct(filterObjectsByCategoryTitle(value, filteredProducts));

  };

  const filterObjectsByCategoryTitle = (values: string[], product: ProductSearch[]): ProductSearch[] => {
    return product.filter(item => {
      if (item.Category && item.Category.length > 0) {
        const categoryTitles = item.Category.map((cat: { title: string }) => cat.title);
        return categoryTitles.some(title => values.includes(title));
      }
    });
  }

  const handlePriceChange = () => {
    showproduct(filterObjectsByPriceOfPruduct(filteredProducts));
  };

  const filterObjectsByPriceOfPruduct = (product: ProductSearch[]): ProductSearch[] => {
    return product.filter(item => {
      const price = (item.price * item.priceOff) / 100;
      return (price >= priceRange[0] && price <= priceRange[1])
    });
  }

  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);
    showproduct(sortProducts(filteredProducts, sortBy));
  };

  const sortProducts = (products: ProductSearch[], sortBy: string): ProductSearch[] => {
    switch (sortBy) {
      case "sales":
        return [...products].sort((a, b) => b.sales - a.sales);
      case "priceasc":
        return [...products].sort((a, b) => a.price * a.priceOff - b.price * b.priceOff);
      case "pricedesc":
        return [...products].sort((a, b) => b.price * b.priceOff - a.price * a.priceOff);
      case "rating":
        return [...products].sort((a, b) => b.Review.average - a.Review.average);
      default:
        return products;
    }
  }



  const onChange = (page: number) => {
    setCurrentPage(page);
    setShowProduct(getPaginatedItems(filteredProducts, page, PAGE_SIZE));
  };

  const normalizeString = (str: string): string => {
    return str.toLowerCase().trim();
  }

  // 筛选函数
  const filterProductsBySearch = (products: ProductSearch[], searchTerm: string): ProductSearch[] => {

    if (typeof searchTerm !== 'string' || searchTerm === '') {
      return products;
    }
    if (searchTerm === "Shop All Nails") {
      searchTerm = "Ready To Go"
    }
    const normalizedSearchTerm = normalizeString(searchTerm);
    return products.filter(product => {
      try {
        const tagsMatch = Array.isArray(product.Tags) &&
          product.Tags.every(tag => typeof tag.title === 'string') &&
          normalizeString(product.Tags.map(tag => tag.title).join(' ')).includes(normalizedSearchTerm);
        return tagsMatch;
      } catch (error) {
        console.error('Error:', error);
        return false;
      }
    });
  };

  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };



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
    <div className="min-h-screen pt-2 md:pt-8 bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-4 mb-12 flex gap-6">
        {/* 左侧筛选区域 */}
        <div className="hidden md:block md:w-64 flex-shrink-0">
          <div className="">
            <div className="bg-bg-50 border border-bg-200 rounded p-4 space-y-6 mb-4">
              <h3 className="text-gray-700 font-medium mb-4">Price Range</h3>
              <Slider
                range
                min={Min_Price}
                max={Max_price}
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
              <div className="bg-bg-50 border border-bg-200 rounded p-4 mb-4">
                <h3 className="text-gray-700 font-medium mt-2` my-2">{title}</h3>
                {loading ? (
                  <MenuSkeleton />
                ) : (menuList && menuList.length > 0 && (
                  menuList.map((tag) => (
                    <div key={tag.ID} className="flex items-center pt-1">
                      <Checkbox
                        checked={selectedBrands.includes(tag.title_en)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, tag.title_en]);
                          } else {
                            setSelectedBrands(
                              selectedBrands.filter((b) => b !== tag.title_en),
                            );
                          }
                        }}
                      >
                        <span className="text-gray-600">{tag.title_en}</span>
                      </Checkbox>
                    </div>
                  ))))}
              </div>

            </div>
          </div>
        </div>
        {/* 右侧商品区域 */}
        <div className="flex-1">
          {/* 排序工具栏 */}
          <div className="border border-bg-200 bg-bg-50 rounded p-4 mb-2 md:mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-40 min-w-40">
                  <Select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="min-w-full"
                    options={[
                      { value: "default", label: "Default Sort" },
                      { value: "sales", label: "Best Selling" },
                      { value: "priceasc", label: "Price: Low to High" },
                      { value: "pricedesc", label: "Price: High to Low" },
                      { value: "rating", label: "Top Rated" }
                    ]}
                  />
                </div>
              </div>
              <div className="text-gray-500 hidden md:block">Total of <span className="font-bold text-primary-600"> {loading ? (12) : (total)}</span> items</div>
              <div className="lg:hidden" onClick={onOpen}>
                <FaListUl className="text-3xl cursor-pointer text-primary-400" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-4">
            {loading ? (
              // 显示 8 个骨架屏
              Array.from({ length: 12 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            ) : (
              showProduct.map((product) => (
                <ProductCardOne key={product.ID} product={product} />
              )
              ))}
          </div>
          <div className='flex justify-center mt-8'>
            <Pagination
              hideOnSinglePage={true}
              current={currentPage}
              onChange={onChange}
              pageSize={PAGE_SIZE}
              total={total}
            />
          </div>
        </div>
      </div>
      {
        showBackTop &&
        <FloatButton.Group shape="circle" style={{ insetInlineEnd: 94 }}>
          <FloatButton.BackTop visibilityHeight={0} />
        </FloatButton.Group>
      }


      <Drawer title="Filters" placement={"right"} onClose={onClose} open={open}>
        <div className="w-full">
          <div className="">
            <div className="bg-background-back1 border border-bg-200 rounded p-4 space-y-6 mb-4">
              <h3 className="text-gray-700 font-medium mb-4">Price Range</h3>
              <Slider
                range
                min={Min_Price}
                max={Max_price}
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
              <div className="bg-background-back1 border border-bg-200 rounded p-4 mb-4">
                <h3 className="text-gray-700 font-medium mt-2` my-2">{title}</h3>
                {menuList && menuList.length > 0 && (
                  menuList.map((item) => (
                    <div key={item.ID} className="flex items-center pt-1">
                      <Checkbox
                        checked={selectedBrands.includes(item.title_en)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, item.title_en]);
                          } else {
                            setSelectedBrands(
                              selectedBrands.filter((b) => b !== item.title_en),
                            );
                          }
                        }}
                      >
                        <span className="text-gray-600">{item.title_en}</span>
                      </Checkbox>
                    </div>
                  )))}
              </div>
            </div>
          </div>
        </div>
      </Drawer>


    </div >
  );
}; export default SearchLayout;
