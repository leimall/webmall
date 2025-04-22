import { create } from 'zustand';
export type OrderProduct = {
  order_id: string;
  user_id: string;
  product_id: string;
  title: string;
  price: number;
  old_price: number;
  price_off: number;
  quantity: number;
  main_img: string;
  size: string;
  color: string;
};

export type Order = {
  ID: number
  orderId: string;
  userId: string;
  totalPrice: number;
  orderStatus: string;
  paymentMethod: string;
  paymentStatus: string;
  shippingMethod: string;
  shippingPrice: number;
  shippingAddressId: number;
  products: OrderProduct[];
};

export type OrderType = {
  ID: number
  order_id: string;
  user_id: string;
  total_price: number;
  order_status: string;
  payment_method: string;
  payment_status: string;
  shipping_method: string;
  shipping_price: number;
  shipping_address_id: number;
  UpdatedAt: string;
  CreatedAt: string;
  Products: OrderProduct[];
  Address: AddressItem;
};

export type AddressItem = {
  ID: number;
  city: string;
  country: string;
  countryName: string;
  email: string;
  firstName: string
  lastName: string;
  line1: string;
  line2: string;
  mark: string;
  phone: string;
  postalCode: string;
  state: string
  userId: string;
  isDefault: number;
};