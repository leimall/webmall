'use client'

import { useCartStore } from '@/stores/useCartStore'; // 引入 Zustand store
import { useNowBuyStore } from '@/stores/useNowBuyStore'; // 引入 Zustand store
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { CartItem } from '@/types/stores/cart';
import type { ProductDetail } from "@/types/products";
import { getOrderId, createOrderForDB } from '@/apis/orders';
import type { Order } from '@/types/stores/orders';

import { AiOutlineHeart } from "react-icons/ai";
import SizeTable from '@/components/Layout/ProductDetail/sizeTable';
import FingerWidthInput from './FingerWidthInput';

export default function CartItemComponent({ product }: { product: ProductDetail }) {
  const router = useRouter();
  const { update } = useNowBuyStore();
  const { addItem, setQuantity, setSkuValue, items, fetchCartItems } = useCartStore();
  const { user } = useAuthStore();
  const [userId, setUserId] = useState('');
  const [selfItem, setSelfItem] = useState<CartItem | null>(null);
  const [selfQuantity, setSelfQuantity] = useState<number>(1);
  const [selfPrice, setSelfPrice] = useState<number>(0);
  const [skuTitle, setSkuTitle] = useState<string>('Size');
  const [size, setSize] = useState<string>('M');
  const [sizeList, setSizeList] = useState<string[]>(['XS', 'S', 'M', 'L', 'Custom']);
  const [show, setShow] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const { Info, Tags } = product.Brand

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

  const handleGetOrderId = async () => {
    try {
      const res = await getOrderId();
      if (res.code === 0 && res.data) {
        console.log('Order ID set:', res.data); // 添加调试日志
        return res.data
      } else {
        alert('Error getting order id. Please try again later.');
        return '';
      }
    } catch (error) {
      console.error('Error getting order id:', error);
      alert('Error getting order id. Please try again later.');
      return '';
    }
  };



  const handleBuyNow = async () => {
    setLoading(true);
    if (selfItem) {
      const orderId = await handleGetOrderId()


      const orderData: Order = {
        ID: 0,
        orderId,
        userId: userId,
        totalPrice: selfItem.price * selfItem.quantity,
        paymentMethod: '',
        paymentStatus: 'pending',
        orderStatus: 'pending',
        shippingMethod: 'standard',
        shippingPrice: 10.00,
        shippingAddressId: 0,
        products: [{
          product_id: selfItem.product_id,
          title: selfItem.title,
          price: selfItem.price,
          old_price: selfItem.old_price,
          price_off: selfItem.price_off,
          quantity: selfItem.quantity,
          main_img: selfItem.main_img,
          size: selfItem.size,
          color: selfItem.color,
          order_id: orderId,
          user_id: userId,
        }]
      };

      console.error("first", orderData)
      console.error("selfItem", selfItem)
      console.error(orderData)
      update(orderId)
      try {
        const response = await createOrderForDB(orderData)
        console.error("response: ", response)
        router.push("/checkout/");
      } catch (error) {
        alert('Error creating order. Please try again later.');
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

    console.error("11111", selfItem);
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
        size_title: 'Size',
        size: e,
      });
    }
  }

  const setOpenCustom = (e: string) => {
    setSize(e)
    if (selfItem) {
      setSelfItem({
        ...selfItem,
        size: e,
      });
    }
  }

  const handleWidthsChange = (widths: string) => {
    if (selfItem) {
      setSelfItem({
        ...selfItem,
        size_title: widths,
      });
    }
  };


  return (
    <div>
      <h2 className="text-md md:text-md font-bold text-gray-800">{skuTitle}</h2>
      <div className="flex flex-wrap gap-4 my-4">
        {
          sizeList.map((e, index) => (
            e === 'Custom' &&
            <div
              key={index}
              className={`w-auto px-2 h-10 border hover:border-gray-800 hover:bg-slate-100  font-semibold text-md rounded flex items-center justify-center ${e === size ? 'border-gray-800 bg-slate-100' : 'border-fta-primary-50 bg-white'}`}
              onClick={() => setOpenCustom(e)}
            >
              {e}
            </div>
            ||
            <div
              key={index}
              className={`w-10 h-10 border hover:border-gray-800 hover:bg-slate-100  font-semibold text-md rounded flex items-center justify-center ${e === size ? 'border-gray-800 bg-slate-100' : 'border-fta-primary-50 bg-white'}`}
              onClick={() => setSelfSize(e)}
            >
              {e}
            </div>
          ))}
      </div>
      {
        size==="Custom" &&
        <div className="bg-gray-50 p-2 rounded-sm border border-gray-200">
          <span className='text-sm text-gray-500'>Please enter the width of the customized fingers in millimeter size. 
            If the two hands are different, please email me.</span>
          <FingerWidthInput onWidthsChange={handleWidthsChange} />
        </div>
      }
      

      {
        Info.ID &&
        <div className="my-2 md:my-4">
          <SizeTable brand={Info} tags={Tags} />
        </div>
      }

      <div className="flex md:justify-between md:flex-row gap-1 items-center md:mt-2">
        <div className="pt-4">
          <div className="flex justify-between items-center gap-4 md:gap-16">
            <button
              type="button"
              onClick={handleAddToCart}
              className="min-w-[280px] md:min-w-[300px] h-12 py-1 px-2 md:px-4 md:py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded"
            >
              Add to cart
            </button>
            <div className="gap-1 md:gap-4 border h-12 w-12 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
              <AiOutlineHeart className='h-6 w-6 text-gray-500' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};