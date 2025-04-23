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
import useMenuStore from "@/stores/useMenuStore";
import { useSearchParams } from "next/navigation";
import { getAllProductList } from "@/apis/product";
import type { ProductSearch } from "@/types/products";
import ProductCardOne from "@/components/Common/Products/cardtwo";
import ProductCardSkeleton from "@/components/Common/Products/skeleton";
import { FaListUl, FaXmark } from "react-icons/fa6";
const PAGE_SIZE = 12;
const Min_Price = 0;
const Max_price = 500

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
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [saveAlllist, setSaveAlllist] = useState<ProductSearch[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductSearch[]>([]);
  const [products, setProducts] = useState<ProductSearch[]>([]);
  const [showProduct, setShowProduct] = useState<ProductSearch[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [total, setTotal] = useState(0);


  const { categories } = useMenuStore();

  const [priceRange, setPriceRange] = useState([Min_Price, Max_price]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("default");
  const [showBackTop, setShowBackTop] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    if (selectedBrands.length > 0) {
      handleCategorydChange(selectedBrands);
    } else {
      filterProducts(filteredProducts);
    }
  }, [selectedBrands]);

  useDebounceEffect(() => {
    handlePriceChange();
  }, 300, [priceRange]);

  useEffect(() => {
    setLoading(true)
    getallproductlist(searchParams.get("query"), searchParams.get("tag"));
  }, [searchParams.toString()])

  const getallproductlist = async (query: string | null, tag: string | null) => {
    try {
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

  const initProcess = (data: ProductSearch[], query: string | null, tag: string | null) => {
    console.error("1111", query, tag);
    let productList = data
    if (query) {
      productList = filterProductsBySearch(productList, query)
    }
    if (tag) {
      productList = filterProductsByTagTitle(productList, tag)
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
      const categoryTitles = item.Category.map((cat: { title: string }) => cat.title);
      return categoryTitles.some(title => values.includes(title));
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
  const filterProductsByTagTitle = (products: ProductSearch[], searchTerm: string): ProductSearch[] => {
    if (typeof searchTerm !== 'string' || searchTerm === '') {
      return products;
    }
    const normalizedSearchTerm = normalizeString(searchTerm);
    return products.filter(product => {
      if (!Array.isArray(product.Tags)) {
        return false;
      }
      return product.Tags.some(tag => {
        if (typeof tag.title !== 'string') {
          return false;
        }
        return normalizeString(tag.title).includes(normalizedSearchTerm);
      });
    });
  }
  const filterProductsBySearch = (products: ProductSearch[], searchTerm: string): ProductSearch[] => {

    if (typeof searchTerm !== 'string' || searchTerm === '') {
      return products;
    }
    const normalizedSearchTerm = normalizeString(searchTerm);
    return products.filter(product => {
      try {
        // 检查 product.title 是否为字符串
        const titleMatch = typeof product.title === 'string' && normalizeString(product.title).includes(normalizedSearchTerm);
        // 检查 product.desction 是否为字符串
        const descriptionMatch = typeof product.desction === 'string' && normalizeString(product.desction).includes(normalizedSearchTerm);
        // 检查 product.Category 是否为数组
        const categoryMatch = Array.isArray(product.Category) &&
          product.Category.every(cat => typeof cat.title === 'string') &&
          normalizeString(product.Category.map(cat => cat.title).join(' ')).includes(normalizedSearchTerm);
        // 检查 product.Tags 是否为数组
        const tagsMatch = Array.isArray(product.Tags) &&
          product.Tags.every(tag => typeof tag.title === 'string') &&
          normalizeString(product.Tags.map(tag => tag.title).join(' ')).includes(normalizedSearchTerm);
        return titleMatch || descriptionMatch || categoryMatch || tagsMatch;
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
    <div className="min-h-screen pt-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex gap-6">
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
              {categories && categories.length > 0 ? (
                categories.map((mainCategory, index) => (
                  index === 1 && (
                  <div key={mainCategory.ID} className="bg-bg-50 border border-bg-200 rounded p-4 mb-4">
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
                  )

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
          <div className="border border-bg-200 bg-bg-50 rounded p-4 mb-6">
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
              <div className="text-gray-500 hidden md:block">Total of <span className="font-bold text-primary-600">{total}</span> items</div>
              <div className="lg:hidden" onClick={onOpen}>
                <FaListUl className="text-3xl cursor-pointer text-primary-400" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-3 md:gap-8">
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


      <Drawer title="Filters"  placement={"right"} onClose={onClose} open={open}>
        <div className="w-full p-2">
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
              {categories && categories.length > 0 ? (
                categories.map((mainCategory, index) => (
                  index === 1 && (
                  <div key={mainCategory.ID} className="bg-background-back1 border border-bg-200 rounded p-4 mb-4">
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
                  )
                ))
              ) : (
                <div>No categories available</div>
              )}

            </div>
          </div>
        </div>
      </Drawer>


    </div>
  );
}; export default SearchLayout;
