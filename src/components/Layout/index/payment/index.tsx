'use client'
import React from 'react'


export default function PaymentPage() {
  return (
    <section className="m-4">
      <div className='flex items-center justify-center gap-4'>
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
