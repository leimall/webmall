'use client'

import { useState, useEffect } from 'react'
import ProductCardOne from '@/components/Common/Products/cardtwo'
import { Product } from '@/types/products'
import Title from '@/components/Common/Title'
import { getProductList } from '@/apis/product'
import { message } from 'antd'
import React from 'react'
import ProductCardSkeleton from '@/components/Common/Products/skeleton'


export default function NewsLists() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = React.useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const response = await getProductList();
      setProducts(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    } catch (error) {
      setLoading(false);
      message.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <Title title="Lastest Products" />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 py-8 gap-4 sm:gap-6 md:gap-8">
      {loading ? (
          // 显示 8 个骨架屏
          Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : (
        products.map((product) => (
          <ProductCardOne key={product.ID} product={product} />
        )
        ))}
      </div>
    </div>
  );
}
