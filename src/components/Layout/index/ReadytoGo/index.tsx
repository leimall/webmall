'use client'
import ProductCardOne from '@/components/Common/Products/cardtwo'
import { Product } from '@/types/products'
import Title from './title'
import React from 'react'


export default function NewsLists({ products, title }: { products: Product[], title: string }) {
  return (
    <section className="mt-10">
      <Title title={title} />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 py-4 gap-2 sm:gap-3 md:gap-4">
        {
          products.map((product) => (
            <ProductCardOne key={product.ID} product={product} />
          ))
        }
      </div>
    </section>
  );
}
