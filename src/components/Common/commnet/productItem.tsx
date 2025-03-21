// components/CartItem.tsx
'use client'
import Image from 'next/image';
import { OrderProduct } from '@/types/stores/orders'
import { Modal, Form, Input, Rate, Button } from 'antd';
import form from 'antd/es/form';
import { useState } from 'react';

export default function OrderProductLists({ item }: { item: OrderProduct }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
      setIsModalVisible(true);
  };

  const handleOk = () => {
      form.validateFields().then((values) => {
          console.log('Review submitted:', values);
          form.resetFields();
          setIsModalVisible(false);
      }).catch((errorInfo) => {
          console.log('Validation failed:', errorInfo);
      });
  };

  const handleCancel = () => {
      form.resetFields();
      setIsModalVisible(false);
  };

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
            <div className='w-full ml-4 text-primary-600'>
              <div className="text-sm text-pretty font-extrabold text-primary-600 h-10 line-clamp-2">
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
        <div className='text-right' onClick={showModal}>
          Comment
        </div>
      </div>
      <hr className="border-gray-black my-6" />

      <Modal
        title="Write a Review"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={window.innerWidth < 768 ? '90%' : 520}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter the title' }]}
          >
            <Input placeholder="Enter title" />
          </Form.Item>
          <Form.Item
            name="star"
            rules={[{ required: true, message: 'Please select a rating' }]}
          >
            <Rate />
          </Form.Item>
          <Form.Item
            name="content"
            rules={[{ required: true, message: 'Please enter your comment' }]}
          >
            <Input.TextArea
              placeholder="Enter your comment"
              rows={3}
              autoSize={{ minRows: 5, maxRows: 10 }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
