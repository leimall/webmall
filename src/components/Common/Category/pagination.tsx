'use client';
import { useEffect, useState } from 'react';
import { Pagination, Skeleton, type PaginationProps } from 'antd';
import { getProductByCategory } from "@/apis/product";
import ProductCardOne from "@/components/Common/Products/cardtwo";
import type { Product } from "@/types/products";
import ProductCardSkeleton from '../Products/skeleton';

const PAGE_SIZE = 12;

const ProductPagination: React.FC<{ id: string; initialData: Product[]; initialTotal: number }> = ({ id, initialData, initialTotal }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>(initialData);
  const [total, setTotal] = useState(initialTotal);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (page: number) => {
    setLoading(true);
    try {
      const offset = (page - 1) * PAGE_SIZE;
      const res = await getProductByCategory(id, { offset, limit: PAGE_SIZE });
      if (res && res.data) {
        setProducts(res.data.list);
        setTotal(res.data.total);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false); // 请求结束，无论成功失败都停止加载状态
    }
  };
  useEffect(() => {
    if (currentPage) {
      fetchProducts(currentPage);
    }
  }, [currentPage, id]);

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 pt-2 pb-10 gap-4 sm:gap-6 md:gap-8">
        {loading ? (
          // 显示 12 个商品的骨架
          Array.from({ length: 12 }).map((_, index) => (
            <ProductCardSkeleton key={index}  />
          ))
        ) : (
          products.map((product) => (
            <ProductCardOne key={product.ID} product={product} />
          ))
        )}
      </div>
      <div className='flex justify-center pb-10'>
        <Pagination
          current={currentPage}
          onChange={onChange}
          pageSize={PAGE_SIZE}
          total={total}
        />
      </div>
    </div>
  );
};
export default ProductPagination;