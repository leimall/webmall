'use client'

import { Product } from '@/types/products'
import React, { useState } from 'react'
import { FiUsers } from "react-icons/fi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


import List from './list'

// 评论数据类型（根据实际数据结构调整）
interface CommentItem {
  title: string;
  description: string;
  rating: number;
  username: string;
  avatar: string;
  date: string;
}

export default function comment({ products, title }: { products: Product[], title: string }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; 
  const itemOne = 1;
  const comments: CommentItem[] = [
    {
      "title": "Interstellar Nail Art Masterpiece",
      "description": "Amethyst Spell is even more stunning in person! The hand-painted nebula details are incredible, and the thin base fits perfectly—no discomfort at all. Fast shipping (15 days), beautiful packaging with extras, and spot-on size recommendations from customer service. My first press-on nails, but definitely not my last!",
      "rating": 5,
      "username": "Sarah Miller",
      "avatar": "/images/users/user-01.png",
      "date": "20 March 2025"
    },
    {
      "title": "Versatile Design for Every Occasion",
      "description": "Jelly Squad and Deco Noir are my go-to for work and nights out! Smooth edges, gentle glue, and the $69 free shipping was a bonus. Love the independent dust bags and the 'try before paste' tip from customer service—so easy for beginners. Already recommended to everyone at the office!",
      "rating": 5,
      "username": "Jessica Moore",
      "avatar": "/images/users/user-02.png",
      "date": "25 March 2025"
    },
    {
      "title": "Show-Stopping Birthday Gift",
      "description": "Royal Carousel blew my girlfriend away! The hand-carved gold details and velvet pouch made it feel like a luxury gift. customer service warned me about remote area shipping, but it arrived on her birthday exactly. She says it’s the most thoughtful present ever—even better than jewelry!",
      "rating": 5,
      "username": "Michael",
      "avatar": "/images/users/user-03.png",
      "date": "28 March 2025"
    },
    {
      "title": "Oriental Beauty That Wows",
      "description": "Peach Blossom Rain 3D nails are a work of art! The Porcelain Breeze look so real, and the thin base is invisible on my nails. Free shipping + cherry blossom wipes were nice touches. Wore them to the beach for a week—stayed strong and easy to remove. Obsessed with this brand!",
      "rating": 5,
      "username": "Lila Rodriguez",
      "avatar": "/images/users/user-04.png",
      "date": "05 April 2025"
    },
    {
      "title": "Celestial Accuracy for Zodiac Fans",
      "description": "Celestial Flow (Aquarius) is stunning—friends thought it was a salon custom! customer service helped with address changes instantly, and it arrived in 7 days. Sturdy material, no yellowing after a week, even with daily showers. Worth every penny for the unique design!",
      "rating": 5,
      "username": "Emily Wilson",
      "avatar": "/images/users/user-05.png",
      "date": "08 April 2025"
    },
    {
      "title": "Movie-Perfect Dark Aesthetic Nails",
      "description": "Coraline’s Trick or Treat nails are a fan’s dream! The button eye details are so lifelike, and the flexible tips stayed on for 9 days. customer service rushed my order—arrived in 4 days with themed stickers. Get ready for compliments everywhere you go!",
      "rating": 5,
      "username": "Sarah Johnson",
      "avatar": "/images/users/user-06.png",
      "date": "12 April 2025"
    }
  ]
  const totalPages = Math.ceil(comments.length / itemsPerPage);
  // 计算当前页显示的评论
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleComments = comments.slice(startIndex, endIndex);


  // 滑动偏移量（关键：通过 transform 实现动画）
  const sliderStyle = {
    transition: 'transform 1.0s ease-in-out', // 滑动动画
  };

  // 按钮禁用状态
  const isPrevDisabled = currentPage === 0;
  const isNextDisabled = currentPage >= totalPages - 1;

  return (
    <section className='mt-10'>
      {/* 标题和控制按钮 */}
      <div className="mt-7 flex items-center justify-between">
        <div>
          <span className="flex items-center md:gap-2 gap-1 md:font-medium text-sm">
            <FiUsers className="md:text-xl text-md text-primary-main" />
            Testimonials
          </span>
          <h2 className="font-semibold md:text-xl text-md">{title}</h2>
        </div>

        {/* 翻页按钮组 */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={isPrevDisabled}
            className={`transition-opacity border border-bg-200 bg-white rounded p-2 hover:text-white hover:bg-primary-400 
              ${isPrevDisabled ? 'opacity-50 cursor-not-allowed' : 'active:bg-primary-500'}`}
          >
            <FaAngleLeft />
          </button>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={isNextDisabled}
            className={`transition-opacity border border-bg-200 bg-white rounded p-2 hover:text-white hover:bg-primary-400 
              ${isNextDisabled ? 'opacity-50 cursor-not-allowed' : 'active:bg-primary-500'}`}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>

      {/* 滑动容器（关键：overflow-hidden + 绝对定位子元素） */}
      <div className="relative overflow-hidden p-2">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 py-4 gap-6 md:gap-8 animate-fadeOut">
            {visibleComments.map((item, index) => (
              <List
                key={`${item.username}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
    </section>
  );
}