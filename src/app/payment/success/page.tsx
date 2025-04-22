'use client'
import { Suspense, useEffect, useState } from 'react';
import { Button, Result, Spin } from 'antd';
import { useSearchParams } from 'next/navigation';
import { updateStatus } from '@/apis/orders';


const SuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Success />
    </Suspense>
  );
}

const Success = () => {
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = searchParams.get('orderId');
    if (id) {
      updateStatusData(id);
      setOrderId(id);
    }
    const timer = setTimeout(() => {
      setLoading(false);
      return () => clearTimeout(timer); // 清除定时器
    }, 300);
  }, [searchParams]);

  const updateStatusData = async (id: string) => {
    setLoading(true);
    try {
      const res = {
        orderId: id,
        orderStatus: "PS",
      }
      const response = await updateStatus(res);
      if (response.code === 0) {
        console.log('Payment status updated successfully');
      } else {
        console.error('Failed to update payment status');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error updating payment status:', error);
    }
  };


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="relative flex flex-col justify-center items-center py-12 px-6">
        <div className="max-w-md w-full bg-white border border-gray-300 rounded-lg p-8">
          <Spin spinning={loading}>
            <Result
              status="success"
              title="Payment Successful!"
              subTitle={`Your order ID is: ${orderId}`}
              extra={[
                <Button type="primary" key="button" href="/">
                  Go Home
                </Button>
              ]}
            />
          </Spin>
        </div>
      </div>
    </Suspense>
  )
}


export default SuccessPage;
