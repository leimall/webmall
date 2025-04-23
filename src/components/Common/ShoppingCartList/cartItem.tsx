// components/CartItem.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/stores/useCartStore';
import { CartItem } from '@/types/stores/cart';
import { Modal } from 'antd';
import Link from 'next/link';
import FingerWidthInput from '@/components/UI/QuestCart/custom';
import { FaCircleCheck, FaTrashCan } from 'react-icons/fa6';
import { BiSolidEditAlt } from "react-icons/bi";
import { getProductSku } from '@/apis/product';
import type { SkuItem } from '@/types/products';
import { getUniqueId } from '@/utils/unique';

export default function CartListItem({ item, index, length, form }: { item: CartItem, index: number, length: number, form: any }) {
  const { setQuantity, removeItem, setSkuValue } = useCartStore();
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [skuTitle, setSkuTitle] = useState<any[]>();
  const [airrtiute, setAirrtiute] = useState<string>('');
  const [airrtiuteList, setAirrtiuteList] = useState<any[]>([]);
  const [sizeList, setSizeList] = useState<string[]>(['L', 'M', 'S', 'XS']);
  const [size, setSize] = useState<string>('M');
  const [off, setOff] = useState<number>(0);
  const [isShow, setIsShow] = useState<boolean>(true);
  const [shapeOptions, setShapeOptions] = useState<any[]>([]);
  const [initShape, setInitShape] = useState<string>('');
  const [initSize, setInitSize] = useState<string>('');
  const Custom = "Custom"

  useEffect(() => {
    getSkuInfo();
    initData();
  }, []);
  const getSkuInfo = async () => {
    try {
      const response = await getProductSku(item.product_id);
      const {data} = response;
      if (data) {
        setSkuTitle(response.data);
        data.map((e: SkuItem) => {
          if (e.title === Custom) {
            setShapeOptions(e.List.map((item) => {
              return {
                label: item.title,
                value: item.title,
              }
            }))
          }
        })
      }
    } catch (error) {
      console.error('Error fetching product sku:', error);
    } finally {

    }
  }


  const initData = () => {
    console.error("1111", item);
    if (item.size === Custom) {
      setAirrtiute(item.size);
      setInitSize(item.size_title || '')
      setInitShape(item.shape || '');
    } else {
      setSize(item.size || '');
      setAirrtiute(item.size_title || '');
    }


    if (item.price_off > 0) {
      setOff(100 - item.price_off);
    }

    if (index === length - 1) {
      setIsShow(false);
    }
  }


  const handleDecrease = () => {
    if (item.quantity > 1) {
      setQuantity(item.unique_id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(item.unique_id, item.quantity + 1);
  };

  const setSelfSize = (newVal: string) => {
    setSkuValue(item.unique_id, newVal);
  }

  const handleWidthsChange = (shape: string | undefined, inputValue: string) => {
    item.size_title = inputValue;
    item.shape = shape;
    console.error("object", inputValue, shape);
  }



  const setchoicheSize = (e: SkuItem,) => {
    setAirrtiute(e.title);
    setAirrtiuteList(e.List)
  }

  const setOpenCustom = (e: SkuItem) => {
    setAirrtiute(e.title);
    setAirrtiuteList(e.List)
  }

  const handleEditProduct = () => {
    setOpenEdit(false)
    if(item.size === Custom) {
      item.unique_id = getUniqueId(item.product_id, item.size, item.shape||"");
    } else {
      item.unique_id = getUniqueId(item.product_id, item.size, item.size_title);
      item.size = size
      item.size_title = airrtiute
    }
    console.error("object", item);
  }


  return (
    <>
      <div className="md:col-span-2 rounded-md">
        <div className="items-center gap-4">
          <div className="md:col-span-2 flex items-center gap-2">
            <div className="w-28 md:w-32 h-28 md:h-32 shrink-0 border rounded bg-white">
              <Image
                src={item.main_img}
                alt={item.title}
                width={96}
                height={96}
                className="rounded h-full w-full"
                priority
              />
            </div>

            <div className='w-full ml-0 md:ml-4'>
              <div className="flex-1">
                <div className='flex items-center justify-between'>
                  <h3 className="md:text-md md:font-bold text-gray-800">
                    <Link href={`/product/${item.product_id}`}>
                      <div className="text-sm text-gray-800 h-auto line-clamp-1">
                        {item.title}
                      </div>
                    </Link>
                  </h3>
                  {/* <div onClick={() => setOpenEdit(true)} className='flex py-1 text-primary-400 items-center justify-end'>
                    <BiSolidEditAlt className='text-xl' />
                    <span className='px-1 cursor-pointer  text-sm md:text-md'>EDIT</span>
                  </div> */}
                </div>

                <div className="text-sm md:text-md md:py-1">
                  <div className="flex items-center justify-between">
                    <div>
                      {
                        item.size === Custom && (
                          <div>
                            <div className='text-md pb-0.5 md:pb-1'>{item.shape}</div>
                            <div>{item.size_title}</div>
                          </div>
                        )
                        || (
                          <div>
                            <div>{item.size_title}</div>
                          </div>
                        )
                      }
                    </div>
                    <div className="hidden lg:flex items-end">
                      <div className="text-red-500 text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                      {off > 0 && item.old_price * item.quantity > 0 && <span className="line-through text-sm text-gray-400 px-1">${(item.old_price * item.quantity).toFixed(2)}</span>}
                    </div>
                  </div>
                </div>

                <div className="lg:hidden flex justify-end">
                  <div className='flex items-center justify-end'>
                    <div className="text-red-500 text-base font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                    {off > 0 && item.old_price * item.quantity > 0 && <span className="line-through text-xsm text-gray-400 px-1">${(item.old_price * item.quantity).toFixed(2)}</span>}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className='font-bold'>Quantity:</span> <span>{item.quantity}</span>
                </div>
                <div onClick={() => removeItem(item.unique_id)} className='md:py-1 flex items-center justify-end'>
                  <FaTrashCan className='text-md md:text-xl' />
                  <span onClick={() => removeItem(item.unique_id)} className='px-1 cursor-pointer text-gray-500 text-sm md:text-md'>REMOVE</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      {isShow && <hr className="border-gray-black my-6" />}

      <Modal
        title="Edit Product"
        centered
        open={openEdit}
        maskClosable={false}
        onOk={handleEditProduct}
        onCancel={() => setOpenEdit(false)}
      >
        <div>
          <div className="md:col-span-2 flex items-center gap-2">
            <div className="w-28 md:w-32 h-28 md:h-32 shrink-0 border rounded bg-white">
              <Image
                src={item.main_img}
                alt={item.title}
                width={96}
                height={96}
                className="rounded h-full w-full"
                priority
              />
            </div>

            <div className='w-full ml-0 md:ml-2'>
              <div className="flex-1">
                <h3 className="md:text-md md:font-bold text-gray-800 truncate py-2">
                  <Link href={`/product/${item.product_id}`}>
                    <div className="text-sm text-gray-800 h-auto line-clamp-1">
                      {item.title}
                    </div>
                  </Link>
                </h3>
                <div className="text-sm">
                  <div className="">
                    <div className="flex items-end">
                      <div className="text-red-500 text-xl md:text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                      {off > 0 && item.old_price * item.quantity > 0 && <span className="line-through text-sm text-gray-400 px-1">${(item.old_price * item.quantity).toFixed(2)}</span>}
                      {off > 0 && <div className="border bg-black text-white text-sm font-bold mb-1 mx-1 px-1 md:p-0.5">
                        {off > 0 ? `-${off}%` : ''}
                      </div>}

                    </div>

                  </div>

                </div>
              </div>

              <div className="flex justify-between md:justify-start md:gap-4 py-2">
                <div>
                  <div className='bg-white'>
                    <div className="flex items-center border border-gray-300 text-gray-800 text-md outline-none bg-transparent rounded" style={{ width: 110, height: 36 }}>
                      <div onClick={handleDecrease} className="px-3 py-3 cursor-pointer bg-orange-50  rounded-l ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                          <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                        </svg>
                      </div>

                      <span className="mx-2.5 w-5 text-center">{item.quantity}</span>

                      <div onClick={handleIncrease} className="px-3 cursor-pointer py-3 bg-orange-50 rounded-r">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                          <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 my-4">
            {
              skuTitle?.map((e, index) => (
                e.title === 'Custom' &&
                <div
                  key={index}
                  className={`w-auto cursor-pointer px-2 h-10 border hover:border-gray-800 hover:bg-slate-100  font-semibold text-md rounded flex items-center justify-center ${e.title === airrtiute ? 'border-gray-800 bg-slate-100' : 'border-primary-50 bg-white'}`}
                  onClick={() => setOpenCustom(e)}
                >
                  {e.title}
                </div>
                ||
                <div
                  key={index}
                  className={`w-auto cursor-pointer px-2 h-10 border hover:border-gray-800 hover:bg-slate-100  font-semibold text-md rounded flex items-center justify-center ${e.title === airrtiute ? 'border-gray-800 bg-slate-100' : 'border-primary-50 bg-white'}`}
                  onClick={() => setchoicheSize(e)}
                >
                  {e.title}
                </div>
              ))
            }
          </div>
          <div className="flex flex-wrap gap-4 my-2">
            {
              airrtiute != 'Custom' && airrtiuteList.map((e, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 cursor-pointer border hover:border-gray-800 hover:bg-slate-100  font-semibold text-md rounded flex items-center justify-center ${e.title === size ? 'border-gray-800 bg-slate-100' : 'border-primary-50 bg-white'}`}
                  onClick={() => setSize(e.title)}
                >
                  {e.title}
                </div>
              ))}
          </div>
          {
            airrtiute === Custom &&
            <div className="bg-gray-50 my-2 md:my-4 p-2 md:p-4 rounded-sm border border-gray-200">
              <FingerWidthInput onChangeValue={handleWidthsChange} shapeOptions={shapeOptions} initialInputValue={initSize} initialShape={initShape} />
            </div>
          }
        </div>


      </Modal>
    </>
  );
};