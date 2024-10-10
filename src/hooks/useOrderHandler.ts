import { useOrderStore } from '@/stores/useOrdersStore';
import { useCartStore } from '@/stores/useCartStore';
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { useRouter } from 'next/navigation';
import { Order, OrderProduct, OrderItem } from '@/types/stores/orders';
import { CartItem } from '@/types/stores/cart';
import { getOrderId, createOrderForDB } from '@/apis/orders'


export const useOrderHandler = () => {
  const { items, totalPrice, clearCart } = useCartStore();
  const { createOrder } = useOrderStore();
  const { user } = useAuthStore();
  const router = useRouter();

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

    // const outOfStockItems = items.filter(item => item.stock < item.quantity);
    // if (outOfStockItems.length > 0) {
    //   alert('部分商品库存不足，请调整购物车中的数量。');
    //   return;
    // }

    let orderId: string;

    try {
      const res = await getOrderId();
      orderId = res.data;
    } catch (error) {
      console.error('Error creating order:', error);
      return;
    }

    let OrderList: CartItem[] = [];
    let isClearCart = false;
    if (list.length > 0) {
      OrderList = list
    } else {
      OrderList = items
      isClearCart = true;
    }


    const orderData: Order = {
      orderId,
      userId: user.userId,
      totalPrice,
      paymentMethod: '',
      paymentStatus:'pending',
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
    createOrder(orderData);
    try {
      const response = await createOrderForDB(orderData)
      console.log('订单创建成功:', response);
      if (response.code === 0 && isClearCart) {
        clearCart();
      }
      router.push('/checkout');
    } catch (error) {
      console.error('订单创建失败:', error);
      alert('订单创建失败，请稍后再试。');
    }
  };
  return { handleBuyNow };
};
