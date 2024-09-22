'use client'

import { useCartStore } from '@/stores/useCartStore'; // 引入 Zustand store
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { CartItem } from '@/types/stores/cart';
import type { ProductDetail } from "@/types/products";
import { Divider } from 'antd';

export default function CartItemComponent({ product }: { product: ProductDetail }) {
  const router = useRouter();
  const { addItem, setQuantity, setSkuValue, items, fetchCartItems } = useCartStore();
  const { user } = useAuthStore();
  const [userId, setUserId] = useState('');
  const [selfItem, setSelfItem] = useState<CartItem | null>(null);
  const [selfQuantity, setSelfQuantity] = useState<number>(1);
  const [selfPrice, setSelfPrice] = useState<number>(0);
  const [skuTitle, setSkuTitle] = useState<string>('Size');
  const [size, setSize] = useState<string>('M');
  const [sizeList, setSizeList] = useState<string[]>(['L', 'M', 'S', 'XS']);
  const [show, setShow] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (items?.length > 0) {
      const data = items.find(item => item.product_id === product.productId);
      if (data) {
        setShow(true);
      }
    }
  }, [items]);

  useEffect(() => {
    if (product && user) {
      initData();
    }
  }, [product, user?.userId]);

  const initData = () => {
    if (product.Sku.title) {
      setSkuTitle(product.Sku.title)
    }
    if (product.Sku.List && product.Sku.List.length > 0) {
      setSizeList(product.Sku.List.map(item => item.title))
    }
    if (user?.userId) {
      setUserId(user.userId)
    }
    setSelfPrice(parseFloat((product.price * (product.priceOff / 100)).toFixed(0) + '.99'))
    if (items?.length > 0) {
      const item = items.find(item => item.product_id === product.productId);
      if (item) {
        setSelfItem(item);
        setSelfQuantity(item.quantity);
        setSelfSize(item.size);
      } else {
        setSelfItem({
          sku: product.productId,
          size_title: skuTitle,
          size: size,
          color: '',
          old_price: product.price,
          price_off: product.priceOff,
          user_id: userId,
          product_id: product.productId,
          quantity: selfQuantity,
          stock: product.stock,
          price: selfPrice,
          main_img: product.mainImg,
          title: product.title,
          status: 1,
        });
      }
    } else {
      setSelfItem({
        sku: product.productId,
        size_title: skuTitle,
        size: size,
        color: '',
        old_price: product.price,
        price_off: product.priceOff,
        user_id: userId,
        product_id: product.productId,
        quantity: selfQuantity,
        stock: product.stock,
        price: selfPrice,
        main_img: product.mainImg,
        title: product.title,
        status: 1,
      });
    }
  };

  useEffect(() => {
    if (selfItem) {
      if (items?.length > 0) {
        const result = items.find(item => item.product_id === product.productId)
        if (result) {
          setQuantity(selfItem.product_id, selfItem.quantity);
        }
      }
    }
  }, [selfItem, selfQuantity]);

  useEffect(() => {
    if (selfItem) {
      if (items?.length > 0) {
        const result = items.find(item => item.product_id === product.productId)
        if (result) {
          setSkuValue(selfItem.product_id, selfItem.size);
        }
      }
    }
  }, [selfItem?.size]);


  const handleBuyNow = async () => {
    setLoading(true);
    if (selfItem) {
      // Step 1: 本地状态的同步 (Zustand store)
      selfItem.user_id = userId;
      selfItem.size = size;
      selfItem.price = selfPrice;
      selfItem.quantity = selfQuantity;
  
      addItem(selfItem); // 添加商品到购物车或本地存储
  
      // Step 2: 订单信息准备
      const orderData = {
        user_id: userId,
        order_id: `ORD-${new Date().getTime()}`, // 假设你生成订单号的方式
        total_price: selfItem.price * selfItem.quantity,
        payment_method: 'pending', // 可以根据实际情况动态调整
        order_status: 'pending',
        shipping_method: 'standard', // 示例配送方式
        shipping_price: 10.00, // 假设有固定运费
        shipping_address_id: 123, // 假设用户的默认地址ID
        order_items: [
          {
            product_id: selfItem.product_id,
            quantity: selfItem.quantity,
            price: selfItem.price,
            title: selfItem.title,
            size: selfItem.size,
            color: selfItem.color,
            main_img: selfItem.main_img
          }
        ]
      };
  
      try {
        // Step 3: 发送订单数据到后端 API 同步到数据库
        const response = await fetch('/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });
  
        if (!response.ok) {
          throw new Error('订单创建失败');
        }
  
        const result = await response.json();
  
        // Step 4: 订单创建成功后，跳转到结算页面
        router.push('/checkout');
      } catch (error) {
        console.error('订单创建失败:', error);
      }
    }
  };
  

  const handleAddToCart = () => {
    if (selfItem) {
      selfItem.user_id = userId;
      selfItem.size = size;
      selfItem.price = selfPrice;
      selfItem.quantity = selfQuantity;
      addItem(selfItem);
    }
  };

  const handleDecrease = () => {
    if (selfQuantity > 1) {
      const tmp = selfQuantity - 1
      if (selfItem) {
        setSelfItem({
          ...selfItem,
          quantity: tmp,
        });
        setSelfQuantity(tmp);
      }
    }
  };

  const handleIncrease = () => {
    const tmp = selfQuantity + 1
    if (selfItem) {
      setSelfItem({
        ...selfItem,
        quantity: tmp,
      });
      setSelfQuantity(tmp);
    }
  };

  const setSelfSize = (e: string) => {
    setSize(e);
    if (selfItem) {
      setSelfItem({
        ...selfItem,
        size: e,
      });
    }
  }


  return (
    <div>
      <h2 className="text-md md:text-md font-bold text-gray-800">Choose a {skuTitle}</h2>
      <div className="flex flex-wrap gap-4 mt-4">
        {
          sizeList.map((e, index) => (
            <button
              key={index}
              type="button"
              className={`w-10 h-10 border hover:border-gray-800 hover:bg-slate-100  font-semibold text-md rounded flex items-center justify-center ${e === size ? 'border-gray-800 bg-slate-100' : 'border-fta-primary-50 bg-white'}`}
              onClick={() => setSelfSize(e)}
            >
              {e}
            </button>
          ))}
      </div>
      <Divider />
      <h3 className="text-md font-bold text-gray-800">Quantity</h3>
      <div className="flex md:justify-between md:flex-row gap-1 items-center md:mt-2">
        {show && (
          <div className="md:w-1/3 pt-4">
            <div className='w-28'>
              <div className='bg-white'>
                <div className="flex items-center border border-gray-300 text-gray-800 text-md outline-none bg-transparent rounded">
                  <div onClick={handleDecrease} className="px-3 py-3 bg-orange-50 cursor-pointer rounded-l ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                      <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                    </svg>
                  </div>
                  <span className="mx-2.5 w-5 text-center">{selfQuantity}</span>
                  <div onClick={handleIncrease} className="px-3 py-3 bg-orange-50 cursor-pointer rounded-r">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                      <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="md:w-2/3 pt-4">
          <div className="flex gap-1 md:gap-4">
            <button
              type="button"
              onClick={handleBuyNow}
              className="min-w-[100px] md:min-w-[120px] py-1 px-2 md:px-4 md:py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded"
            >
              Buy now
            </button>
            <button
              type="button"
              onClick={handleAddToCart}
              className="min-w-[120px] px-4 py-2.5 border border-orange-500 bg-transparent hover:bg-orange-500 hover:text-zinc-50 text-gray-800 text-sm font-semibold rounded"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};