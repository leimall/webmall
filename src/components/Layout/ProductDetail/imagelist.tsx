// pages/product/[id].tsx
"use client";

import React, { useEffect, useRef } from "react";
import { Carousel, Divider, Rate, Tag } from "antd";
import { useProductStore } from "@/stores/useProductStore";
import { useCartStore } from "@/stores/useCartStore";
import Image from "next/image";
import type { CarouselRef } from "antd/es/carousel";
import type { ImageList, ProductDetail } from "@/types/products";

import CartItemComponent from "@/components/UI/QuestCart/cart";
import cartItem from "@/components/Common/ShoppingCartList/cartItem";
import { title } from "process";

export default function ProductImagePage({ images }: { images: ImageList[] }) {
  const { selectedImageIndex, setSelectedImageIndex } = useProductStore();
  const { setQuantity, addItem, items, totalQuantity } = useCartStore();
  const carouselRef = useRef<CarouselRef>(null);
  const [skuTitle, setSkuTitle] = React.useState<string>('Size');
  const [size, setSize] = React.useState<string>('M');
  const [sizeList, setSizeList] = React.useState<string[]>(['L', 'M', 'S', 'XL']);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goTo(selectedImageIndex, false);
    }
  }, [selectedImageIndex]);


  return (
    <div>
      <div className="lg:col-span-5 text-center">
          <div className="md:p-4 relative before:absolute before:inset-0 befo before:rounded">
            <Carousel ref={carouselRef} afterChange={setSelectedImageIndex}>
              {images.map((image, index) => (
                <div key={index} className="relative w-full h-0 pb-[100%] overflow-hidden rounded-t mx-auto">
                  <Image
                    src={image.img_url}
                    alt="product image"
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
            {images.map((image, index) => (
              <img
                key={index}
                src={image.img_url}
                className={`w-16 h-16 border-2 cursor-pointer ${selectedImageIndex === index ? 'border-green-500' : 'border-gray3'} `}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>
    </div>


  );
}
