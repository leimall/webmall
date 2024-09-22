// pages/product/[id].tsx
"use client";

import React, { useEffect, useRef } from "react";
import type { ProductDetail } from "@/types/products";


export default function ProductInfoPage({ product }: { product: ProductDetail }) {
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
    <div className="font-sans tracking-wide mx-auto ">
      <h3 className="text-md font-bold text-gray-800">Price</h3>
      <div className="flex items-end space-x-4 mt-2">
      <span className="line-through text-md text-gray-500 pt-2">${oldprice}</span>
      <div className="flex items-center">
        <div className="text-gray-800 text-3xl font-bold">${newprice}</div>
        <div className="text-red-600 text-sm font-bold px-2">
          {product.priceOff > 0 ? `(-${off})` : ''}
        </div>
      </div>
      </div>
    </div>
  );
}
