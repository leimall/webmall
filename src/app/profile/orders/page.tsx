'use client'

import { useState } from "react";

export default function OrderPage() {
  const [orders, setOrders] = useState([]);
  

  return (
    <div className="relative mx-auto max-w-c-1280 py-5 items-center justify-between align-items:flex-end px-4 md:px-8 2xl:px-0">
      <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <div className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            <h2 className="pl-3 mb-4 text-center text-2xl font-semibold">Settings</h2>
            <a href="/profile/myself" className="flex justify-center items-center px-3 py-2.5 font-semibold hover:text-fta-primary-500 hover:border hover:rounded-full border-fta-primary-500">
              Profile
            </a>
            <div className="flex text-bold items-center justify-center px-3 py-2.5 font-bold bg-white text-fta-primary-500 border rounded-full border-fta-primary-500">
            Order
            </div>
            <a href="/profile/address" className="flex justify-center items-center px-3 py-2.5 font-semibold hover:text-fta-primary-500 hover:border hover:rounded-full border-fta-primary-500">
             Address 
            </a>
          </div>
        </div>
        <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-6 text-2xl font-bold sm:text-xl">Order Profile</h2>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
