'use client'

import { Product } from '@/types/products'
import React from 'react'
import Link from 'next/link'
import { FiUsers } from "react-icons/fi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


import List from './list'


export default function comment({ products, title }: { products: Product[], title: string }) {
  return (
    <section className='mt-10'>
      <div className="mt-7 flex items-center justify-between"><div>
        <span className="flex items-center gap-2.5 font-medium text-dark">
          <FiUsers className="text-xl text-primary-main" />
          Testimonials
        </span>
        <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">{title}</h2>
      </div>
        <div className="flex items-center gap-3">
          <button className="swiper-button-prev transition-opacity border-bg-200 border my-2.5 bg-white rounded p-2 hover:text-white hover:bg-primary-400">
            <FaAngleLeft />
          </button>
          <button className="swiper-button-prev transition-opacity border-bg-200 border my-2.5 bg-white rounded p-2 hover:text-white hover:bg-primary-400">
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 py-4 gap-6 md:gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <List key={i} />
        ))}
      </div>
    </section>
  );
}