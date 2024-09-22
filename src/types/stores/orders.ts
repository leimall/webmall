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
  orderId: string;
  userId: string;
  totalPrice: number;
  orderStatus: string;
  paymentMethod: string;
  shippingMethod: string;
  shippingPrice: number;
  shippingAddressId: number;
  products: OrderProduct[];
};

export type OrderItem = {
  orderId: string;
  userId: string;
  totalPrice: number;
  orderStatus: string;
  paymentMethod: string;
  shippingMethod: string;
  shippingPrice: number;
  shippingAddressId: number;
};