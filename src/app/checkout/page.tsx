'use client'
import CartListItem from '@/components/Common/ShoppingCartList/cartItem';
import { Form, Input, Button, Checkbox, Collapse, Select, Flex, Spin, Divider } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useOrderStore } from '@/stores/useOrdersStore';
import { order } from 'tailwindcss/defaultTheme';

const { Panel } = Collapse;
const { Option } = Select;

const CheckoutPage = () => {
  const [sameAddress, setSameAddress] = useState(true);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { order } = useOrderStore();

  useEffect(() => {
    if (order?.products) {
      setItems(order?.products)
    }
  }, [order]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Flex gap="middle" vertical>
        <Spin spinning={loading} size="large" tip="Loading...">
          <div className="relative mx-auto max-w-c-1280 py-5 justify-between align-items:flex-end px-2 md:px-8 2xl:px-0">
            <div className="flex flex-col  md:flex-row ">
              <div className="w-full md:w-4/6">
                <Form
                  name="checkout"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                >
                  <Collapse defaultActiveKey={['1']}>
                    <Panel header="Your Personal Details" key="1">
                      <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Last Name"
                        name="lastName"
                        rules={[{ required: true, message: 'Please input your last name!' }]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Email Address"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email address!' }]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Mailing Address"
                        name="mailingAddress"
                        rules={[{ required: true, message: 'Please input your mailing address!' }]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="City"
                        name="city"
                        rules={[{ required: true, message: 'Please input your city!' }]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Post Code"
                        name="postCode"
                        rules={[{ required: true, message: 'Please input your post code!' }]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Country"
                        name="country"
                        rules={[{ required: true, message: 'Please select your country!' }]}
                      >
                        <Select>
                          <Option value="USA">USA</Option>
                          <Option value="Canada">Canada</Option>
                          <Option value="UK">UK</Option>
                          {/* Add more countries as needed */}
                        </Select>
                      </Form.Item>

                      <Form.Item
                        label="Region/State"
                        name="region"
                        rules={[{ required: true, message: 'Please select your region/state!' }]}
                      >
                        <Select>
                          <Option value="California">California</Option>
                          <Option value="Texas">Texas</Option>
                          <Option value="New York">New York</Option>
                          {/* Add more regions/states as needed */}
                        </Select>
                      </Form.Item>

                      <Form.Item name="sameAddress" valuePropName="checked">
                        <Checkbox onChange={(e) => setSameAddress(e.target.checked)}>
                          My delivery and mailing addresses are the same.
                        </Checkbox>
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Next Step
                        </Button>
                      </Form.Item>
                    </Panel>

                    {!sameAddress && (
                      <Panel header="Shipping Address" key="2">
                        {/* Similar form items as personal details but for shipping address */}
                      </Panel>
                    )}

                    <Panel header="Payment Info" key="3">
                      {/* Payment form items here */}
                    </Panel>
                  </Collapse>
                </Form>
              </div>
              <div className='w-full md:w-2/6 md:ml-8 sx:ml-0 '>
                <div className="border rounded-md md:mt-0 mt-4 sm:ml-0 p-4 bg-background-back1">

                  {items.map((item, index) => (
                    <CartListItem item={item} key={item.product_id} length={items.length} index={index} />
                  ))}

                  <Divider />
                  <div className='flex justify-between px-4'>
                    <div className="text-md font-bold">Total:</div>
                    <div className="text-md font-bold text-red-600">${order?.totalPrice.toFixed(2)}</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Spin>
      </Flex>
    </div>

  );
};

export default CheckoutPage;
