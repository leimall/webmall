'use client'

import { getMyselfOrder } from "@/apis/orders";
import { useState, useEffect, Suspense } from "react";
import type { OrderType } from "@/types/orders";
import { formatDate } from "@/utils/formatDate";
import { IoBagHandle } from "react-icons/io5";
import { Pagination, Tag, type PaginationProps } from 'antd';
import { FaArrowRight } from "react-icons/fa6";
import OrderDetails from "./details";
import ProductOrderSkeleton from "@/components/Common/Order/skeleton";


export default function OrderPage() {
  const [orders, setOrders] = useState<OrderType[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [openDetails, setOpenDetails] = useState(false);
  const [orderItem, setOrderItem] = useState<OrderType | undefined>();
  const pageSize = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, [currentPage]);

  const fetchOrders = async () => {
    setLoading(true);
    const data = { page: currentPage, pageSize: pageSize, word: '' }
    try {
      const response = await getMyselfOrder(data);
      if (response.code === 0) {
        const { list, total } = response.data;
        setOrders(list);
        setTotalPages(total)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  const handleDetails = (order: OrderType) => {
    setOpenDetails(true);
    setOrderItem(order)
  }
  const handleCancel = () => {
    setOpenDetails(false);
  }
  return (
    <div className="md:w-2/3">
      {
        openDetails && orderItem && (
          <div>
            <OrderDetails orderItem={orderItem} onClose={handleCancel} />
          </div>
        ) || (
          <div>
            <div className="">
              <div className="w-full md:px-6 pb-8 rounded">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-50">
                    <IoBagHandle className="text-2xl text-red-700" />
                  </div>
                  <h2 className="text-xl font-bold sm:text-xl">My Orders</h2>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                  {
                    loading ? (
                      Array.from({ length: 10 }).map((_, index) => (
                        <ProductOrderSkeleton key={index} />
                      ))
                    ) : (orders?.map((order, index) => (
                      <div key={index} className="flex flex-row justify-between items-center gap-2 p-4 my-6 bg-bg-50 border-bg-200 border rounded">
                        <div className="flex justify-between items-center">
                          <h3 className="text-sm md:text-base">#{order.order_id}</h3>
                        </div>

                        <div className="flex flex-col gap-1">
                          {status(order.payment_status)}
                        </div>


                        <div className="text-sm text-gray-500 ">{formatDate(order.CreatedAt)}</div>
                        <div className="flex flex-col gap-2">
                          <div className="text-base text-right">$ {order.total_price}</div>
                        </div>
                        <div onClick={() => handleDetails(order)} className="text-gray-500">
                          <FaArrowRight />
                        </div>
                      </div>
                    )))}
                </Suspense>
              </div>
            </div>
            <div className='flex justify-center pb-10'>
              <Pagination
                hideOnSinglePage={true}
                current={currentPage}
                onChange={handlePageChange}
                pageSize={pageSize}
                total={totalPages}
              />
            </div>
          </div>
        )
      }
    </div>
  );
}
const status = (status: string) => {

  if (status === 'pending') {
    return (
      <div className="flex flex-col gap-2">
        <Tag color="#2db7f5" className="text-xl" >Pending</Tag>
      </div>
    )
  }
  if (status === 'PS') {
    return (
      <div className="flex flex-col gap-2">
        <Tag color="#87d068" className="text-xl" >Sueccse</Tag>
      </div>
    )
  }
}