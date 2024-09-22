import CartListItem from './cartItem';
import { Flex, Spin, Divider } from 'antd';
import Link from 'next/link';
import { useCartStore } from '@/stores/useCartStore';
import { useOrderHandler } from '@/hooks/useOrderHandler'; // 引入订单处理 Hook
import { useState } from 'react';


export default function ShoppingCartList() {
  const [loading, setLoading] = useState(false);
  const { items, totalPrice, price } = useCartStore();
  const { handleBuyNow } = useOrderHandler(); // 使用 Hook

  const BuyNowHandle = () => {
    setLoading(true);
    handleBuyNow(items); // 调用 Hook 中的方法
  };

  return (
    <>
      <Flex gap="middle" vertical>
        <Spin spinning={loading} size="large" tip="Loading...">
          <div className="flex flex-col  md:flex-row ">
            <div className="flex-1 bg-background-back0 border rounded-md p-2 md:p-4">
              <div className='p-0 md:p-4'>
                {items.map((item, index) => (
                  <CartListItem item={item} key={item.product_id} length={items.length} index={index} />
                ))}
              </div>
            </div>
            <div className='w-full md:w-1/4 md:ml-8 sx:ml-0 '>
              <div className="border rounded-md md:mt-0 mt-4 sm:ml-0 p-4 bg-background-back1">
                <div className="px-4">
                  <h2 className="text-2xl font-bold">Cart total</h2>
                  {/* <p className="text-gray-500">No products selected</p> */}
                </div>
                <Divider />
                <div className="px-4 text-gray-800 space-y-2">
                  <p className="flex justify-between py-1">
                    <span className='text-base'>Now Total</span>
                    <span className='ml-auto text-red-500 font-bold'>${totalPrice}</span>
                  </p>
                  <p className="flex justify-between py-1">
                    <span className='text-base'>Total</span>
                    <span className='ml-auto line-through'>${price.toFixed(2)}</span>
                  </p>
                  <p className="flex justify-between py-1">
                    <span className='text-base'>Save</span>
                    <span className='ml-auto'>${(price - totalPrice).toFixed(2)}</span>
                  </p>

                  <p className="flex justify-between py-1">
                    <span className='text-base'>Discount</span>
                    <span className='ml-auto font-bold'>$0.00</span>
                  </p>
                  <p className="flex justify-between py-1">
                    <span className='text-base'>Tax</span>
                    <span className='ml-auto font-bold'>$0.00</span>
                  </p>
                  <p className="flex justify-between py-1">
                    <span className='text-base'>Fee</span>
                    <span className='ml-auto font-bold'>$0.00</span>
                  </p>
                </div>
                <Divider />
                <div className="px-4">
                  <div className="flex justify-between font-bold text-lg mt-4">
                    <span>Total</span>
                    <span className='text-red-500'>${totalPrice}</span>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <button onClick={BuyNowHandle} className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-fta-primary-500 hover:bg-fta-primary-600 text-white rounded-md">
                    Buy Now
                  </button>
                  <div className='w-4'></div>
                  <Link href="/">
                    <button className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-fta-background-100 hover:bg-fta-background-100 border text-fta-primary-500 rounded-md">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Spin>
      </Flex>
    </>
  );
}
