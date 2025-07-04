// pages/product/[id].tsx
"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Carousel, Divider } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import type { ProductDetail } from "@/types/products";
import Price from "./price"

import CartItemComponent from "@/components/UI/QuestCart/cart";
import CustomRate from "@/components/Common/Rate";

import { FaTruck, FaShieldHalved, FaCheck, FaCopy } from "react-icons/fa6";
import ReviewList from "@/components/Common/ReviewList";
import ReviewSummary from "@/components/Common/ReviewList/ReviewSummary";
import "./detail.css"

export default function ProductDetailPage({ product }: { product: ProductDetail }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const carouselRef = useRef<CarouselRef>(null);
  const [rate, setRate] = useState<number>(5.0);
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goTo(selectedImageIndex, false);
    }
    if (product.Review.average) {
      const averRate = product.Review.average
      setRate(averRate)
    }
  }, [selectedImageIndex, product.Review.average]);

  useEffect(() => {
    if (product.Review.average) {
      setRate(product.Review.average)
    }
  }, [product.Review.average]);

  useEffect(() => {
    if (product.ImageList) {
      const res = [...product.ImageList, { img_url: "/images/product/measure.jpg", title: "measure" }]
      setImages(res)
    }
  }, [product])

  const handleThumbnailClick = (index: number) => {
        // 显式设置轮播图索引并更新外部状态
        setSelectedImageIndex(index);
        if (carouselRef.current) {
            // 调用轮播组件的跳转方法（具体方法名根据轮播库文档调整）
            carouselRef.current.goTo(index);
        }
    };

  const processNewlines = (text: string): React.ReactNode => {
    const parts = text.split('\n');
    return parts.map((part, index) => {
      return (
        <React.Fragment key={index}>
          <div className="pb-2">
            {part}
          </div>
        </React.Fragment>
      );
    });
  };

  const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(product.productId);
    } catch (error) {
        console.error('复制失败:', error);
    }
};


  return (
    <div className="font-sans tracking-wide mx-auto ">
      <div className="grid items-start grid-cols-1 lg:grid-cols-12 gap-8">

        <div className="lg:col-span-7 text-center">
          <div className="md:p-4 relative before:absolute before:inset-0 befo before:rounded">
            <Carousel arrows infinite={false} ref={carouselRef} afterChange={setSelectedImageIndex}>
              {images && images.map((image, index) => (
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
            {images && images.map((image, index) => (
              <img
                key={index}
                src={image.img_url}
                alt={product.title}
                className={`w-16 h-16 border-2 rounded cursor-pointer ${selectedImageIndex === index ? 'border-gray-800 bg-slate-100' : 'border-primary-50'} `}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>

          <div className="w-full hidden md:block">
            <ReviewSummary Review={product.Review} />
            <Divider />
            <ReviewList productID={product.productId} />
          </div>
        </div>

        <div className="lg:col-span-5 md:p-4">
          <div className="flex flex-wrap items-start gap-4">
            <div className="w-full">
              <div className="text-md font-extrabold line-clamp-2 overflow-hidden">
                <h1 style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, lineHeight: '1.5em', maxHeight: '4.5em' }}>
                  {product.title}
                </h1>
              </div>
              <div className="flex text-xs text-gray-500 pt-2">
                <div onClick={copyToClipboard} className="flex items-center gap-2 text-gray-400 cursor-pointer">SKU: {product.productId} <FaCopy className="mr-4 text-blue-500" /></div>
                <CustomRate review={product.Review} />
              </div>
            </div>
          </div>

          <Divider />
          <div>
            <Price product={product} />
          </div>
          <div>
            <CartItemComponent product={product} />
          </div>
          <Divider />
          <div>
            <h3 className="text-md font-bold text-gray-800">Description</h3>
            <div className="text-gray-700 text-sm mt-2">{processNewlines(product.desction)}</div>
          </div>
          <Divider />
          <div className="bg-gray-50 p-4 rounded-sm border border-gray-200">
            <div className="flex items-center gap-2 text-sm font-bold mb-1"><FaTruck className="text-xl text-green-800" /> Free Shipping</div>
            <div className="text-sm text-gray-500 ml-7">
              Free shipping worldwide for orders over $69 (USD)
            </div>
            <div className="flex items-center gap-2 text-sm font-bold mt-2 mb-1"><FaShieldHalved className="text-xl text-green-800" /> Shopping Security</div>
            <div className="text-sm text-gray-500 ml-7">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1"><FaCheck className="text-sm text-green-800" /> Customer Service</div>
                <div className="flex items-center gap-1"><FaCheck className="text-sm text-green-800" /> Safe Payments </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1"><FaCheck className="text-sm text-green-800" /> Privacy Protection</div>
                <div className="flex items-center gap-1"><FaCheck className="text-sm text-green-800" /> Secure Logistics </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="w-full lg:hidden">
            <ReviewSummary Review={product.Review} />
            <Divider />
            <Suspense>
            <ReviewList productID={product.productId} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}