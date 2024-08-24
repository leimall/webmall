'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useSWR from 'swr'
import ProductCardOne from '@/components/Common/Products/cardtwo'
import { Product } from '@/types/products'
import Title from '@/components/Common/Title'
import { getProductList } from '@/apis/product'
import { message } from 'antd'
import React from 'react'


export default function NewsLists() {

  const [products, setProducts] = React.useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const response = await getProductList();
      setProducts(response.data);
    } catch (error) {
      message.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <Title title="Lastest Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-8 gap-4 sm:gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCardOne key={product.ID} product={product} />
        ))}
      </div>
    </div>
  );
}
