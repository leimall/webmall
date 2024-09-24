// pages/product/[id].tsx
"use client";

import React, { useEffect, useRef } from "react";
import { Carousel, Divider, Rate, Tag } from "antd";
import { useProductStore } from "@/stores/useProductStore";
import Image from "next/image";
import type { CarouselRef } from "antd/es/carousel";
import type { ProductDetail } from "@/types/products";
import Price from "./price"

import CartItemComponent from "@/components/UI/QuestCart/cart";
import CustomRate from "@/components/Common/Rate";

export default function ProductDetailPage({ product }: { product: ProductDetail }) {
  const { selectedImageIndex, setSelectedImageIndex } = useProductStore();
  const carouselRef = useRef<CarouselRef>(null);
  const [rate, setRate] = React.useState<number>(5);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goTo(selectedImageIndex, false);
    }
    if (product.Review.average) {
      setRate(product.Review.average)
    }
  }, [selectedImageIndex, product.Review.average]);


  return (
    <div className="font-sans tracking-wide mx-auto ">
      <div className="grid items-start grid-cols-1 lg:grid-cols-12 gap-8">

        <div className="lg:col-span-7 text-center">
          <div className="md:p-4 relative before:absolute before:inset-0 befo before:rounded">
            <Carousel ref={carouselRef} afterChange={setSelectedImageIndex}>
              {product.ImageList.map((image, index) => (
                <div key={index} className="relative w-full h-0 pb-[100%] overflow-hidden rounded-t mx-auto">
                  <Image
                    src={image.img_url}
                    alt={product.title}
                    fill
                    priority
                    sizes="100vw"
                    className="w-full h-auto rounded"
                  />
                </div>
              ))}
            </Carousel>

          </div>

          <div className="flex flex-wrap gap-4 mx-auto mt-4 md:pl-4">
            {product.ImageList.map((image, index) => (
              <img
                key={index}
                src={image.img_url}
                alt={product.title}
                className={`w-16 h-16 border-2 rounded cursor-pointer ${selectedImageIndex === index ? 'border-gray-800 bg-slate-100' : 'border-fta-primary-50'} `}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 md:p-4">
          <div className="flex flex-wrap items-start gap-4">
            <div className="w-full">
              <div className="text-sm font-extrabold line-clamp-2 overflow-hidden">
                <h1 style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, lineHeight: '1.5em', maxHeight: '4.5em' }}>
                  {product.title}
                </h1>
              </div>
              <div className="text-xs text-gray-500 pt-2">
                SKU: {product.productId}
              </div>

              <div className="flex space-x-1 mt-4">
                <CustomRate rating={rate} />
              </div>
            </div>
          </div>

          <Divider />

          <div>
            <Price product={product} />
          </div>

          <Divider />
          <div>
            <h3 className="text-md font-bold text-gray-800">Description</h3>
            <p className="text-gray-700 text-sm mt-2">{product.desction}</p>
          </div>
          <Divider />

          <div>
            <CartItemComponent product={product} />
          </div>
        </div>
      </div>

    </div>
  );
}
