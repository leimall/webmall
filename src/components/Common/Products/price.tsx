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
  }, [product]);
  return (
    <div className="flex justify-start md:justify-center items-end font-sans">
      <div className="flex items-center">
        <div className="text-red-400 border-red-400 border rounded-sm px-1 text-xs md:text-sm">
          {product.priceOff > 0 ? `-${off}` : ''}
        </div>
        <div className="text-gray-800 pl-1 md:pl-2 md:text-lg text-sm font-bold">${newprice}</div>
      </div>
      <span className="line-through text-xs md:text-sm text-gray-500 pl-2">${oldprice}</span>
    </div>
  );
}
