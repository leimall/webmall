'use client'
import { useCartStore } from '@/stores/useCartStore'; // 引入 Zustand store
import { useNowBuyStore } from '@/stores/useNowBuyStore'; // 引入 Zustand store
import { useAuthStore } from '@/stores/useUserinfoStroe';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { CartItem } from '@/types/stores/cart';
import type { ProductDetail } from "@/types/products";
import { getOrderId, createOrderForDB } from '@/apis/orders';
import type { Order } from '@/types/stores/orders';

import FingerWidthInput from './custom';
import { Drawer, Form, message, Spin } from 'antd';
import Measure from './measure';
import CartListItem from './cartItem';

import { FaXmark, FaCircleCheck } from "react-icons/fa6";
import { getUniqueId } from '@/utils/unique';
import Link from 'next/link';
import { useOrderStore } from '@/stores/useOrdersStore';
import AuthModal from '@/components/Common/Auth/authmodal';
import { useAuthCheck } from '@/hooks/useAuthentication';



export default function CartItemComponent({ product }: { product: ProductDetail }) {
  const router = useRouter();
  const { createOrder } = useOrderStore();
  const [orderId, setOrderId] = useState('');
  const [form] = Form.useForm();
  const { update } = useNowBuyStore();
  const { addItem, setQuantity, setSkuValue, items, fetchCartItems, totalPrice, clearCart } = useCartStore();
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
  const [open, setOpen] = useState(true);
  const [showCustomInfo, setShowCustomInfo] = useState<boolean>(false);
  useEffect(() => {
    if (user) {
      setUserId(user.userId);
    }
  }, [user]);

  useEffect(() => {
    if (items?.length > 0) {
      const data = items.find(item => item.product_id === product.productId);
      if (data) {
        setShow(true);
      }
    }
  }, [items]);

  useEffect(() => {
    if (product) {
      initData();
    }
  }, [product]);

  const initData = () => {
    if (product.Sku.title) {
      setSkuTitle(product.Sku.title)
    }
    if (product.Sku.List && product.Sku.List.length > 0) {
      const titles = product.Sku.List.map(item => item.title);

      // 设置尺寸列表
      setSizeList(titles);

      // 判断是否存在 Custom 标题
      if (titles.some(title => title === 'Custom')) {
        setShowCustomInfo(true)
      }
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

  const handleGetOrderId = async () => {
    try {
      const res = await getOrderId();
      if (res.code === 0 && res.data) {
        setOrderId(res.data);
        return res.data
      } else {
        return '';
      }
    } catch (error) {
      console.error('Error getting order id:', error);
      return '';
    }
  };

  const getUserId = async () => {
    if (user) {
      setUserId(user.userId);
    }
    setTimeout(() => {
      console.error("object", userId);
    }, 800);
  };

  const handleAddToCart = async (): Promise<void> => {
    getUserId()
    form.validateFields().then((values) => {
      setLoading(true);
      console.log('Form values:', values);
      if (selfItem) {
        selfItem.user_id = userId;
        selfItem.size = size;
        selfItem.price = selfPrice;
        selfItem.quantity = selfQuantity;
        selfItem.unique_id = getUniqueId(selfItem.product_id, selfItem.size);
        if (selfItem.user_id) {
          addItem(selfItem);
          showDrawer()
        }
      }
    }).catch((errorInfo) => {
      console.error("Error:", errorInfo);
    }).finally(() => {
      setLoading(false);
    });
  };

  const {
    checkLogin,
    isModalOpen,
    isLoading,
    handleLogin,
    setIsModalOpen,
    setIsLoading
  } = useAuthCheck(handleAddToCart, {
    onNeedLogin: () => message.info('请先登录再添加到购物车')
  });


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

  const onClickCheckout = async () => {
    setLoading(true);
    const oid = await handleGetOrderId();
    if (oid) {
      const products = items.map((item) => ({
        ...item,
        ID: 0,
        order_id: oid,
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
      console.error("aaaabb", orderData, orderId);
      await createOrder(orderData)
      await update(orderId)
      try {
        const response = await createOrderForDB(orderData)
        console.error("aaaabb", response);
        if (response.code === 0) {
          clearCart()
          router.push("/checkout/");
        }
      } catch (error) {
        console.log("object", error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(false);
  }


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
                className={`w-auto cursor-pointer px-2 h-10 border hover:border-gray-800 hover:bg-slate-100  font-semibold text-md rounded flex items-center justify-center ${e === size ? 'border-gray-800 bg-slate-100' : 'border-primary-50 bg-white'}`}
                onClick={() => setOpenCustom(e)}
              >
                {e}
              </div>
              ||
              <div
                key={index}
                className={`w-10 h-10 cursor-pointer border hover:border-gray-800 hover:bg-slate-100  font-semibold text-md rounded flex items-center justify-center ${e === size ? 'border-gray-800 bg-slate-100' : 'border-primary-50 bg-white'}`}
                onClick={() => setSelfSize(e)}
              >
                {e}
              </div>
            ))}
        </div>
        {
          showCustomInfo &&
          <div className=" bg-gray-50 my-2 md:my-4 p-2 md:p-4 rounded-sm border border-gray-200">
            <div className='flex items-start'>
              <FaCircleCheck className="md:text-md text-2xl mr-2" />
              <span className="text-text-secondary font-bold">
                Custom measurements give the best result for the same price.
              </span>
            </div>
          </div>
        }
        {
          size === "Custom" &&
          <div className="bg-gray-50 my-2 md:my-4 p-2 md:p-4 rounded-sm border border-gray-200">
            <FingerWidthInput onChangeValue={handleWidthsChange} initialInputValue='' initialShape='' />
          </div>
        }
        <div className="bg-gray-50 p-2 md:p-4 rounded-sm border border-gray-200">
          <Measure />
        </div>

        <div className="pt-4">
          <button
            type="button"
            onLoad={() => setLoading(true)}
            onClick={checkLogin}
            className="w-full h-12 py-1 px-2 md:px-4 md:py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded"
          >
            Add to cart
          </button>

        </div>
      </Form>

      <AuthModal
        open={isModalOpen}
        onCancel={() => setIsLoading(false)}
        onClose={() => setIsModalOpen(false)}
        onLogin={handleLogin}
        loading={isLoading}
      />
      <Drawer open={open} width={440}>
        <div className="z-max fixed inset-y-0 right-0 w-full outline-none focus:outline-none md:w-[440px]">
          <div className="relative z-20">
            <div className="overflow-hidden shadow-lg ring-1 ring-black/5">
              <div className="relative h-screen bg-white">
                <Spin spinning={loading} tip="Loading...">
                  <div className="hiddenScrollbar h-screen overflow-y-auto py-5 px-3 md:py-5 md:px-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">Shopping cart</h3>
                      <FaXmark className="text-2xl" onClick={onClose} />
                    </div>
                    <div className="divide-y divide-neutral-300">
                      <div className='pt-4'>
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
                      <button
                        onClick={onClickCheckout}
                        className="h-12 rounded bg-primary-main text-white border-2 border-primary-main w-full flex-1 text-md">
                        Checkout
                      </button>
                      <div
                        className="rounded w-full flex-1 h-12 border-2 border-primary border-primary-main cursor-pointer"
                      >
                        <Link href="/cart"><span className='text-primary-main flex justify-center items-center h-10'>View cart</span></Link>
                      </div>
                    </div>
                  </div>
                </Spin>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}