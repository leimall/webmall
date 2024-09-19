// pages/product/[id].tsx
"use client";

import React, { useEffect, useRef } from "react";
import type { Product } from "@/types/products";


export default function ProductInfoPage({ product }: { product: Product }) {
  const [oldprice, setOldprice] = React.useState<string>('0');
  const [newprice, setNewprice] = React.useState<string>('0');
  const [off, setOff] = React.useState<string>('0');
  useEffect(() => {
    if (product.priceOff > 0) {
      const old = product.price;
      const off = (100 - product.priceOff).toFixed(0) + '%';
      const n = (old * (product.priceOff / 100)).toFixed(0) + '.99';
      setNewprice(n)
      setOldprice(old.toFixed(2))
      setOff(off)
    }
    console.error(product);
  }, [product]);
  return (
    <div className="flex justify-center items-end font-sans">
      <span className="line-through text-sm text-gray-500 px-2">${oldprice}</span>
      <div className="flex items-center">
        <div className="text-gray-800 text-md font-bold">${newprice}</div>
        <div className="text-red-600 text-sm font-bold px-2">
          {product.priceOff > 0 ? `(-${off})` : ''}
        </div>
      </div>
    </div>
  );
}
