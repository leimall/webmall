'use client'
import { Carousel } from 'antd';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CarouselRef } from "antd/es/carousel";
type Banner = {
  imageUrl: string,
  title: string,
  description: string,
}



export default function BannerInIndex() {
  const [adImageIndex, setAdImageIndex ] = useState<number>(0);
  const carouselRef = useRef<CarouselRef>(null);
  const banners: Banner[] = [
    {
      imageUrl: '/images/z/1.png',
      title: 'Aquarius',
      description: 'Aquarius'
    },
    {
      imageUrl: '/images/z/2.png',
      title: 'Pisces',
      description: 'Pisces'
    },
    {
      imageUrl: '/images/z/3.png',
      title: 'Aries',
      description: 'Aries'
    },
    {
      imageUrl: '/images/z/4.png',
      title: 'Taurus',
      description: 'Taurus'
    },
    {
      imageUrl: '/images/z/5.png',
      title: 'Gemini',
      description: 'Gemini'
    },
    {
      imageUrl: '/images/z/6.png',
      title: 'Cancer',
      description: 'Cancer'
    },
    {
      imageUrl: '/images/z/7.png',
      title: 'Leo',
      description: 'Leo'
    },
    {
      imageUrl: '/images/z/8.png',
      title: 'Virgo',
      description: 'Virgo'
    },
    {
      imageUrl: '/images/z/9.png',
      title: 'Libra',
      description: 'Libra'
    },
    {
      imageUrl: '/images/z/10.png',
      title: 'Scorpio',
      description: 'Scorpio'
    },
    {
      imageUrl: '/images/z/11.png',
      title: 'Sagittarius',
      description: 'Sagittarius'
    },
    {
      imageUrl: '/images/z/12.png',
      title: 'Capricorn',
      description: 'Capricorn'
    }
  ]


  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goTo(adImageIndex, false);
    }
  }, [adImageIndex]);

  return (
    <div className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:min-w-80 md:m-4">
          <Carousel autoplay dotPosition="bottom" ref={carouselRef} afterChange={setAdImageIndex} className="w-full">
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
                className={`w-6 h-6 border rounded cursor-pointer ${adImageIndex === index ? 'border-bg-200 bg-bg-100 border-2' : 'border-gray-600 bg-gray-400'} `}
                onClick={() => setAdImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="text-gray-200">
          <div className="p-4 md:p-20 md:text-xl">
            <h1 className="p-2 md:p-4 text-xl font-bold md:text-3xl ">🌌 ZODIAC MUSE COLLECTION</h1>
            <h5 className="pl-8 md:pl-16 text-sm font-bold md:text-2xl">Twelve signs. Twelve muses. One cosmic masterpiece.</h5>
            <p className="p-2">Step into the stars with our Zodiac Muse Collection — a hand-painted journey through the soul of each zodiac sign. Every design is a miniature work of art, blending symbolism, character, and celestial elements into a collectible form of wearable beauty.</p>
            <p className="p-2 pb-4">Each set channels the energy, myth, and magic of its sign — from constellations and cosmic symbols to dreamy portraits and storytelling details.</p>

            <p className="p-1 font-bold">🔹 100% hand-painted</p>
            <p className="p-1 font-bold">🔹 Collector’s edition</p>
            <p className="p-1 font-bold">🔹 One-of-a-kind</p>
            <div className="itemms-center justify-center flex pt-2 md:pt-10">
              <Link rel="stylesheet" href="/category/zodiac_collections">
              <div className="inline-flex font-medium text-custom-sm py-1.5 px-4 md:py-2.5 md:px-7 rounded border-bg-700 border  bg-primary-400 text-bg-300 ease-out duration-200 hover:text-primary-400 hover:bg-bg-300">Shop Now</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
