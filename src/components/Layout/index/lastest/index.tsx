'use client'

import { useState, useEffect } from 'react'
import ProductCardOne from '@/components/Common/Products/cardtwo'
import { Product } from '@/types/products'
import Title from '@/components/Common/Title'
import React from 'react'
import ProductCardSkeleton from '@/components/Common/Products/skeleton'


export default function NewsLists({ products }: { products: Product[] }) {
  return (
    <div>
      <Title title="Lastest Products" />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 py-4 gap-2 sm:gap-3 md:gap-4">
      {
        products.map((product) => (
          <ProductCardOne key={product.ID} product={product} />
        )
        )}
      </div>
    </div>
  );
}
