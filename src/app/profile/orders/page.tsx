'use client'

import { getMyselfOrder } from "@/apis/orders";
import { useState, useEffect } from "react";
import Pagination from "@/components/UI/Pagination";
import ProductList from '@/components/Common/checkout/productItem';
import type { OrderType } from "@/types/orders";
import { formatDate } from "@/utils/formatDate";

export default function OrderPage() {
  const [orders, setOrders] = useState<OrderType[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [loading, setLoading] = useState(true);
  const pageSize = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchOrders();
  };
  
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    const data = {page: currentPage, pageSize: pageSize, word: ''}
    try {
      const response = await getMyselfOrder(data);
      if (response.code===0) {
        const {list, total} = response.data;
        setOrders(list);
        setTotalPages(total)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative mx-auto max-w-c-1280 mb-8 items-center justify-between align-items:flex-end px-2 md:px-8 2xl:px-0">
      <div className="bg-white w-full flex flex-col gap-5 px-2 md:px-16 lg:px-28 md:flex-row text-[#161931]">
        <div className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
          <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
            <h2 className="pl-3 mb-4 text-center text-2xl font-semibold">Settings</h2>
            <a href="/profile/myself" className="flex justify-center items-center px-3 py-2.5 font-semibold hover:text-primary-500 hover:border hover:rounded-full border-primary-500">
              Profile
            </a>
            <div className="flex text-bold items-center justify-center px-3 py-2.5 font-bold bg-white text-primary-500 border rounded-full border-primary-500">
            Order
            </div>
            <a href="/profile/address" className="flex justify-center items-center px-3 py-2.5 font-semibold hover:text-primary-500 hover:border hover:rounded-full border-primary-500">
             Address 
            </a>
          </div>
        </div>
        <div className="w-full min-h-screen py-1">
          <div className="md:p-4">
            <div className="w-full md:px-6 pb-8 rounded">
              <h2 className="text-2xl font-bold sm:text-xl">Order Profile</h2>
              {loading && (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"> </div>
                  <p className="pl-2 text-sm text-gray-500">Loading...</p>
                </div>
              ) || (orders?.map((order, index) => (
                <div key={index} className="flex flex-col gap-2 p-4 my-4 bg-background-back1 border rounded-md">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm md:text-lg font-semibold">Order #{order.order_id}</h3>
                    <p className="text-sm font-semibold">{order.order_status==='PS'?"Payment Succes":order.order_status}</p>
                  </div>
  
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-gray-500">Order Date: {formatDate(order.UpdatedAt)}</p>
                    <p className="text-sm text-gray-500">payment status: {order.payment_status}</p>
                    <p className="text-sm text-gray-500">Total Amount: {order.total_price}</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-md font-semibold">Shipping Address:</p>
                    <p className="text-sm text-gray-500">
                      {order.Address?.line1}, {order.Address?.line2}<br />
                      {order.Address?.city}, {order.Address?.state}, {order.Address?.country}, {order.Address?.postalCode}</p>
                  </div>

                  <div className="text-md font-semibold">Products:</div>
                  <div className="flex flex-col gap-2">
                    {order.Products?.map((item) => (
                      <ProductList item={item} key={item.product_id} />
                    ))}
                    <p className="text-sm font-semibold text-right">Total Amount: {order.total_price}</p>
                  </div>
                </div>
              ))
              )}
            </div>
          </div>
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}
