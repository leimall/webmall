// pages/product/[id].tsx
"use client";

import React, { useEffect, useRef } from "react";
import { Carousel, Divider, Rate, Tag } from "antd";
import { useProductStore } from "@/stores/useProductStore";
import { useCartStore } from "@/stores/useCartStore";
import Image from "next/image";
import type { CarouselRef } from "antd/es/carousel";
import type { ProductDetail } from "@/types/products";

import CartItemComponent from "@/components/UI/QuestCart/cart";
import { CartItem } from "@/types/stores/cart";

export default function ProductDetailPage({ product }: { product: ProductDetail }) {
  const { selectedImageIndex, setSelectedImageIndex } = useProductStore();
  const { setQuantity, addItem, items, totalQuantity } = useCartStore();
  const existingItem = items.find((e) => e.productId === product?.productId);
  const quantity = existingItem ? existingItem.quantity : 0;
  const carouselRef = useRef<CarouselRef>(null);
  const [skuTitle, setSkuTitle] = React.useState<string>('Size');
  const [size, setSize] = React.useState<string>('M');
  const [sizeList, setSizeList] = React.useState<string[]>(['L', 'M', 'S', 'XL']);

  const [cartItem, setCartitem] = React.useState<CartItem>()

  const initCartItem = async () => {
    console.error("object-=existingItem", existingItem);
    console.error("object-=existingItem", items);
    console.error("object-=existingItem", totalQuantity);

    const res = await addItem()

    
    if (quantity === 0) {
      setCartitem({
        ...product,
        quantity: 1,
        sku: product.productId + '-' + size,
        skuTitle: skuTitle,
        skuValue: size,
      })
    } else {
      setCartitem(existingItem)
    }
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goTo(selectedImageIndex, false);
    }
    if (product.Sku.title) {
      setSkuTitle(product.Sku.title)
    }
    if (product.Sku.List && product.Sku.List.length > 0) {
      setSizeList(product.Sku.List.map(item => item.title))
    }
    initCartItem()

  }, [selectedImageIndex]);


  return (
    <div className="font-sans tracking-wide p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto">
      <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8">

        <div className="lg:col-span-3 text-center">
          <div className="md:p-4 relative before:absolute before:inset-0 befo before:rounded">
            <Carousel ref={carouselRef} afterChange={setSelectedImageIndex}>
              {product.ImageList.map((image, index) => (
                <div key={index} className="relative w-full h-0 pb-[100%] overflow-hidden rounded-t mx-auto">
                  <Image
                    src={image.img_url}
                    alt={product.title}
                    fill
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
                className={`w-16 h-16 border-2 cursor-pointer ${selectedImageIndex === index ? 'border-green-500' : 'border-gray3'} `}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 md:p-4">
          <div className="flex flex-wrap items-start gap-4">
            <div className="w-full">
              <div className="text-2xl font-extrabold line-clamp-2 overflow-hidden">
                <h1 style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, lineHeight: '1.5em', maxHeight: '4.5em' }}>
                  {product.title}
                </h1>
              </div>

              <div className="flex space-x-1 mt-4">
                <svg className="w-5 fill-orange-500" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-5 fill-orange-500" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-5 fill-orange-500" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-5 fill-orange-500" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>
          </div>

          <Divider />

          <div>
            <h3 className="text-xl font-bold text-gray-800">Price</h3>
            <p className="text-gray-800 text-4xl font-bold mt-4">${product.price}</p>
          </div>

          <Divider />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Desp</h3>
            <p className="text-gray-800 text-md font-bold mt-4">{product.desction}</p>
          </div>
          <Divider />

          <div>
            <h2 className="text-md md:text-xl font-bold text-gray-800">Choose a {skuTitle}</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              {
                sizeList.map((e, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-10 h-10 border hover:border-gray-800 hover:bg-slate-100  font-semibold text-sm rounded-md flex items-center justify-center shrink-0 ${e === size ? 'border-gray-800 bg-slate-100' : 'border-gray-300'}`}
                    onClick={() => setSize(e)}
                  >
                    {e}
                  </button>
                ))
              }
            </div>
          </div>
          <Divider />
          <div>
            <h3 className="text-xl font-bold text-gray-800">Quantity</h3>
            <CartItemComponent item={cartItem} />
          </div>
        </div>
      </div>
    </div>
  );
}
