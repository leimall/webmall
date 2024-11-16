import { useCartStore } from '@/stores/useCartStore';
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { useRouter } from 'next/navigation';
import { Order, OrderProduct, OrderItem } from '@/types/stores/orders';
import { CartItem } from '@/types/stores/cart';
import { getOrderId, createOrderForDB } from '@/apis/orders'
import { useEffect, useState } from 'react';
import { useOrderStore } from '@/stores/useOrdersStore';
import { get } from 'http';


export const useOrderHandler = () => {
  const [orderId, setOrderId] = useState('');
  const { createOrder } = useOrderStore();
  const { items, totalPrice, clearCart } = useCartStore();
  const { user } = useAuthStore();
  const router = useRouter();

  const getOrdierId = async () => {
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

  
  const handleBuyNow = async (list: CartItem[]) => {
    if (items.length === 0) {
      alert('No products selected');
      return;
    }

    if (!user || !user.userId) {
      alert('Plase log in to complete the purchase.');
      router.push('/login');
      return;
    }
    getOrdierId();

    // const outOfStockItems = items.filter(item => item.stock < item.quantity);
    // if (outOfStockItems.length > 0) {
    //   alert('部分商品库存不足，请调整购物车中的数量。');
    //   return;
    // }

  

    let OrderList: CartItem[] = [];
    let isClearCart = false;
    if (list.length > 0) {
      OrderList = list
    } else {
      OrderList = items
      isClearCart = true;
    }


    const orderData: Order = {
      ID: 0,
      orderId,
      userId: user.userId,
      totalPrice,
      paymentMethod: '',
      paymentStatus: 'pending',
      orderStatus: 'pending',
      shippingMethod: 'standard',
      shippingPrice: 10.00,
      shippingAddressId: 0,
      products: OrderList.map((item: CartItem) => ({
        order_id: orderId,
        user_id: user.userId,
        product_id: item.product_id,
        title: item.title,
        old_price: item.old_price,
        price_off: item.price_off,
        price: item.price,
        quantity: item.quantity,
        main_img: item.main_img,
        size: item.size,
        color: item.color,
      })),
    };
    console.error(orderData)
    // createOrder(orderData)
    // try {
    //   const response = await createOrderForDB(orderData)
    //   if (response.code === 0 && isClearCart) {
    //     clearCart();
    //   }
      
    //   router.push("/checkout/");
    // } catch (error) {
    //   alert('Error creating order. Please try again later.');
    // }
  };
  return { handleBuyNow };
};
