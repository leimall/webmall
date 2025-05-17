'use client'
import React from 'react'


export default function PaymentPage() {
  return (
    <section className="md:m-4 m-2">
      <div className='flex items-center justify-center md:gap-4 gap-1'>
        <div className='w-20'>
          <img src="/images/payment/visa.png" alt="visa icon" />
        </div>
        <div className='w-20'>
          <img src="/images/payment/master.png" alt="maser card icon" />
        </div>
        <div className='w-20'>
          <img src="/images/payment/amex.png" alt="amex icon" />
        </div>
        <div className='w-20'>
          <img src="/images/payment/dc.png" alt="discover icon" />
        </div>
        <div className='w-20'>
          <img src="/images/payment/up.png" alt="unionpay icon" />
        </div>
      </div>
    </section>
  );
}
