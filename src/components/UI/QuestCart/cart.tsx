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

import SizeTable from '@/components/Layout/ProductDetail/sizeTable';
import FingerWidthInput from './custom';
import { Button, Drawer, Form, Space } from 'antd';
import Measure from './measure';
import CartListItem from './cartItem';

import { FaXmark } from "react-icons/fa6";
import { getUniqueId } from '@/utils/unique';



export default function CartItemComponent({ product }: { product: ProductDetail }) {
  const router = useRouter();
  const [form] = Form.useForm();
  const { update } = useNowBuyStore();
  const { addItem, setQuantity, setSkuValue, items, fetchCartItems, totalPrice } = useCartStore();
  const { user } = useAuthStore();
  const [userId, setUserId] = useState('');
  const [selfItem, setSelfItem] = useState<CartItem | null>(null);
  const [selfQuantity, setSelfQuantity] = useState<number>(1);
  const [selfPrice, setSelfPrice] = useState<number>(0);
  const [skuTitle, setSkuTitle] = useState<string>('');
  const [size, setSize] = useState<string>('M');
  const [sizeList, setSizeList] = useState<string[]>(['XS', 'S', 'M', 'L', 'Custom']);
  const [show, setShow] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const { Info, Tags } = product.Brand
  const [open, setOpen] = useState(false);

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
          id: product.ID,
          unique_id: '',
          sku: product.productId,
          size_title: '',
          size: size,
          shape: '',
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
        id: product.ID,
        unique_id: '',
        sku: product.productId,
        size_title: '',
        size: size,
        shape: '',
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
          setQuantity(selfItem.unique_id, selfItem.quantity);
        }
      }
    }
  }, [selfItem, selfQuantity]);

  // useEffect(() => {
  //   if (selfItem) {
  //     if (items?.length > 0) {
  //       const result = items.find(item => item.product_id === product.productId)
  //       if (result) {
  //         setSkuValue(selfItem.product_id, selfItem.size);
  //       }
  //     }
  //   }
  // }, [selfItem?.size]);

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
    form
      .validateFields() // Validate all fields in the form
      .then((values) => {
        console.log('Form values:', values);
        if (selfItem) {
          selfItem.user_id = userId;
          selfItem.size = size;
          selfItem.price = selfPrice;
          selfItem.quantity = selfQuantity;
          selfItem.unique_id = getUniqueId(selfItem.product_id, selfItem.size);
          console.error("=-------------------", selfItem);
          addItem(selfItem);
          showDrawer()
        }
        setLoading(false)
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
        // Handle form validation errors here if needed
        setLoading(false);
      });

    setLoading(false);

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

  const handleWidthsChange = (shape: string | null | undefined, inputValue: string) => {
    if (selfItem) {
      setSelfItem({
        ...selfItem,
        size_title: inputValue,
        shape: shape,
      });
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <h2 className="text-md md:text-md font-bold text-gray-800">{skuTitle}</h2>
      <Form form={form} layout="vertical">
        <div className="flex flex-wrap gap-4 my-4">
          {
            sizeList.map((e, index) => (
              e === 'Custom' &&
              <div
                key={index}
                className={`w-auto px-2 h-10 border hover:border-gray-800 hover:bg-slate-100  font-semibold text-md rounded flex items-center justify-center ${e === size ? 'border-gray-800 bg-slate-100' : 'border-primary-50 bg-white'}`}
                onClick={() => setOpenCustom(e)}
              >
                {e}
              </div>
              ||
              <div
                key={index}
                className={`w-10 h-10 border hover:border-gray-800 hover:bg-slate-100  font-semibold text-md rounded flex items-center justify-center ${e === size ? 'border-gray-800 bg-slate-100' : 'border-primary-50 bg-white'}`}
                onClick={() => setSelfSize(e)}
              >
                {e}
              </div>
            ))}
        </div>
        {
          size === "Custom" &&
          <div className="bg-gray-50 my-2 md:my-4 p-2 md:p-4 rounded-sm border border-gray-200">
            <FingerWidthInput onChangeValue={handleWidthsChange} initialInputValue='' initialShape='' />
          </div>
        }


        {/* {
          Info.ID && Info.ID && size !== "Custom" &&
          <div className="my-2 md:my-4">
            <SizeTable brand={Info} tags={Tags} />
          </div>
        } */}

        <div className="bg-gray-50 p-2 md:p-4 rounded-sm border border-gray-200">
          <Measure />
        </div>

        <div className="pt-4">
          <button
            type="button"
            onLoad={() => setLoading(true)}
            onClick={handleAddToCart}
            className="w-full h-12 py-1 px-2 md:px-4 md:py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded"
          >
            Add to cart
          </button>

        </div>
      </Form>

      <Drawer open={open} width={440}>
        <div className="z-max fixed inset-y-0 right-0 w-full outline-none focus:outline-none md:w-[440px]">
          <div className="relative z-20">
            <div className="overflow-hidden shadow-lg ring-1 ring-black/5">
              <div className="relative h-screen bg-white">
                <div className="hiddenScrollbar h-screen overflow-y-auto py-5 px-3 md:py-5 md:px-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Shopping cart</h3>
                    <FaXmark className="text-2xl" onClick={onClose} />
                    
                  </div>
                  <div className="divide-y divide-neutral-300">
                  <div>
                  {items?.map((e, index) => (
                    <CartListItem item={e} key={e.product_id} length={items.length} index={index} />
                  ))}
                </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-neutral-50 p-5">
                  <p className="flex justify-between">
                    <span>
                      <span className="font-medium">Subtotal</span>
                      <span className="block text-sm text-neutral-500">
                        Shipping and taxes calculated at checkout.
                      </span>
                    </span>
                    <span className="text-xl font-medium">${totalPrice}</span>
                  </p>
                  <div className="mt-5 flex items-center gap-5">
                    <Button
                      href="/checkout"
                      onClick={onClose}
                      className="h-12 rounded-full bg-primary-main text-white border-2 border-primary-main w-full flex-1 text-md">
                      Checkout
                    </Button>
                    <Button
                      onClick={onClose}
                      href="/cart"
                      className="rounded-full w-full flex-1 h-12 border-2 border-primary text-primary-main border-primary-main"
                    >
                      View cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Drawer>


    </div>
  );
};