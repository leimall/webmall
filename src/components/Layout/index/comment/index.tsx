'use client'

import { Product } from '@/types/products'
import React from 'react'
import Link from 'next/link'
import { FiUsers } from "react-icons/fi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


import List from './list'


export default function comment({ products, title }: { products: Product[], title: string }) {
  return (
    <div>
      <div className="mt-7 flex items-center justify-between"><div>
        <span className="flex items-center gap-2.5 font-medium text-dark">
          <FiUsers className="text-xl text-primary-400" />
          Testimonials
        </span>
        <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">{title}</h2>
      </div>
        <div className="flex items-center gap-3">
          <button className="swiper-button-prev transition-opacity border my-2.5 border-gray-300 bg-white rounded p-2 hover:text-white hover:bg-primary-400">
            <FaAngleLeft />
          </button>
          <button className="swiper-button-prev transition-opacity border my-2.5 border-gray-300 bg-white rounded p-2 hover:text-white hover:bg-primary-400">
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 py-4 gap-2 sm:gap-3 md:gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <List key={i} />
        ))}
      </div>
    </div>
  );
}