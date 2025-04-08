'use client'
import Image from "next/image";
import { Carousel, type ButtonProps } from 'antd';
import Link from "next/link";
import { useProductStore } from "@/stores/useProductStore";
import { useEffect, useRef } from "react";
import type { CarouselRef } from "antd/es/carousel";
type Banner = {
  imageUrl: string,
  title: string,
  description: string,
}



export default function BannerInIndex() {
  const { selectedImageIndex, setSelectedImageIndex } = useProductStore();
  const carouselRef = useRef<CarouselRef>(null);
  const banners: Banner[] = [
    {
      imageUrl: '/images/z/1.jpg',
      title: 'Aquarius',
      description: 'Aquarius'
    },
    {
      imageUrl: '/images/z/2.jpg',
      title: 'Pisces',
      description: 'Pisces'
    },
    {
      imageUrl: '/images/z/3.jpg',
      title: 'Aries',
      description: 'Aries'
    },
    {
      imageUrl: '/images/z/4.jpg',
      title: 'Taurus',
      description: 'Taurus'
    },
    {
      imageUrl: '/images/z/5.jpg',
      title: 'Gemini',
      description: 'Gemini'
    },
    {
      imageUrl: '/images/z/6.jpg',
      title: 'Cancer',
      description: 'Cancer'
    },
    {
      imageUrl: '/images/z/7.jpg',
      title: 'Leo',
      description: 'Leo'
    },
    {
      imageUrl: '/images/z/8.jpg',
      title: 'Virgo',
      description: 'Virgo'
    },
    {
      imageUrl: '/images/z/9.jpg',
      title: 'Libra',
      description: 'Libra'
    },
    {
      imageUrl: '/images/z/10.jpg',
      title: 'Scorpio',
      description: 'Scorpio'
    },
    {
      imageUrl: '/images/z/11.jpg',
      title: 'Sagittarius',
      description: 'Sagittarius'
    },
    {
      imageUrl: '/images/z/12.jpg',
      title: 'Capricorn',
      description: 'Capricorn'
    }
  ]


  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goTo(selectedImageIndex, false);
    }
  }, [selectedImageIndex]);

  return (
    <div className={`bg-bg-200 rounded mt-10`}>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:min-w-96 md:m-8">
          <Carousel autoplay dotPosition="bottom" ref={carouselRef} afterChange={setSelectedImageIndex} className="w-full">
            {banners.map((banner, index) => (
              <div key={index} className="relative h-auto">
                <img
                  src={banner.imageUrl}
                  alt={banner.title}
                  className="object-cover"
                />
              </div>
            ))}
          </Carousel >
          <div className="flex flex-wrap gap-1 mx-auto mt-4 justify-center">
            {banners.map((image, index) => (
              <img
                key={index}
                src={image.imageUrl}
                alt={image.title}
                className={`w-6 h-6 border-2 rounded cursor-pointer ${selectedImageIndex === index ? 'border-gray-800 bg-slate-100' : 'border-primary-50'} `}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="">
          <div className="p-4 md:p-24">
            <h1 className="p-2 md:p-4 text-xl font-bold md:text-2xl ">🌌 ZODIAC MUSE COLLECTION</h1>
            <h5 className="pl-8 md:pl-16 text-sm font-bold md:text-xl">Twelve signs. Twelve muses. One cosmic masterpiece.</h5>
            <p className="p-2">Step into the stars with our Zodiac Muse Collection — a hand-painted journey through the soul of each zodiac sign. Every design is a miniature work of art, blending symbolism, character, and celestial elements into a collectible form of wearable beauty.</p>
            <p className="p-2 pb-4">Each set channels the energy, myth, and magic of its sign — from constellations and cosmic symbols to dreamy portraits and storytelling details.</p>

            <p className="p-1 font-bold">🔹 100% hand-painted</p>
            <p className="p-1 font-bold">🔹 Collector’s edition</p>
            <p className="p-1 font-bold">🔹 One-of-a-kind</p>
            <div className="itemms-center justify-center flex">
              <Link rel="stylesheet" href="/category/zodiac_collections">
              <div className="inline-flex font-medium text-custom-sm py-1.5 px-4 md:py-2.5 md:px-7 rounded border-gray-3 border bg-primary-main text-white ease-out duration-200 hover:text-white hover:bg-primary-400">Shop Now</div>
              </Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
