// components/CartItem.tsx
'use client'
import Image from 'next/image';
import { OrderProduct } from '@/types/stores/orders'

export default function ProductLists({ item }: { item: OrderProduct }) {

  return (
    <>
      <div className="rounded-md">
        <div className="items-center">
          <div className="flex items-center">
            <div className="w-32 h-32 shrink-0 border rounded bg-white">
              <Image
                src={item.main_img}
                alt={item.title}
                style={{ objectFit: 'cover' }}
                width={96}
                height={96}
                className="rounded h-full w-full "
              />
            </div>
            <div className='w-full ml-4 text-fta-primary-600'>
              <div className="text-sm text-pretty font-extrabold text-fta-primary-600 h-10 line-clamp-2">
                {item.title}
              </div>
              <div className="flex justify-between items-center font-sans py-1">
                <div className='text-sm'>
                  Size
                </div>
                <div className=" text-sm">{item.size}</div>
              </div>

              <div className="flex justify-between items-center font-sans py-1">
                <div className='text-sm'>
                  Quantity
                </div>
                <div className=" text-sm">{item.quantity}</div>
              </div>

              <div className="flex justify-between items-center font-sans py-1">
                <div className='text-sm'>
                Total Price
                </div>
                <div className="text-sm">${item.price * item.quantity}</div>
              </div>


            </div>
          </div>
        </div>

      </div>
      <hr className="border-gray-black my-6" />
    </>
  );
};
