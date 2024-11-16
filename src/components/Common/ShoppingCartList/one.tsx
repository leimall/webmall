import CartListItem from './cartItem';
import { useCartStore } from '@/stores/useCartStore';
import type { Order } from '@/types/stores/orders';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { createOrderForDB, getOrderId } from '@/apis/orders';
import { useState, useEffect } from 'react';
import { Flex, Spin, Divider } from 'antd';
import Link from 'next/link';
import { useOrderStore } from '@/stores/useOrdersStore';
import { useNowBuyStore } from '@/stores/useNowBuyStore'; // 引入 Zustand store

export default function ShoppingCartList() {
  const [loading, setLoading] = useState(false);
  const { createOrder } = useOrderStore();
  const { items, totalPrice, price } = useCartStore();
  const [orderId, setOrderId] = useState('');
  const router = useRouter();
  const { user } = useAuthStore();
  const [userId, setUserId] = useState("");
  const {update} = useNowBuyStore(); // 引入 Zustand store}

  useEffect(() => {
    if (!orderId) {
      handleGetOrderId()
    }
  }, [orderId]);

  useEffect(() => {
    if (user?.userId) {
      setUserId(user.userId)
    }
  }, [user?.userId]);


  const handleGetOrderId = async () => {
    try {
      const res = await getOrderId();
      if (res.code === 0 && res.data) {
        setOrderId(res.data);
        console.log('Order ID set:', res.data); // 添加调试日志
      } else {
        alert('Error getting order id. Please try again later.');
        return;
      }
    } catch (error) {
      console.error('Error getting order id:', error);
      alert('Error getting order id. Please try again later.');
      return;
    }
  };



  const BuyNowHandle = async () => {
    setLoading(true);

    const products = items.map((item) => ({
      ...item,
      ID: 0,
      order_id: orderId,
      user_id: userId,
    }))

    const orderData: Order = {
      ID: 0,
      orderId,
      userId: userId,
      totalPrice,
      paymentMethod: '',
      paymentStatus: 'pending',
      orderStatus: 'pending',
      shippingMethod: 'standard',
      shippingPrice: 10.00,
      shippingAddressId: 0,
      products,
    };
    console.error(orderData)
    createOrder(orderData)
    update(orderId)
    try {
      const response = await createOrderForDB(orderData)
      if (response.code === 0) {
        router.push("/checkout/");
      }
    } catch (error) {
      alert('Error creating order. Please try again later.');
    }
  };

  return (
    <>
      <Flex gap="middle" vertical>
        <Spin spinning={loading} size="large" tip="Loading...">
          <div className="flex flex-col  md:flex-row ">
            <div className='w-full md:w-3/4'>
              <div className="flex-1 bg-background-back0 border rounded-md p-2 md:p-4">
                <div className='p-0 md:p-4'>
                  {items?.map((e, index) => (
                    <CartListItem item={e} key={e.product_id} length={items.length} index={index} />
                  ))}
                </div>
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
