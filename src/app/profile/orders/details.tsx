import OrderSteps from "./steps";
import type { OrderType } from "@/types/orders";
import { IoBagHandle } from "react-icons/io5";


export default function OrderDetails({ orderItem, onClose }: { orderItem: OrderType, onClose: () => void }) {
  const handleClose = () => {
    onClose();
  }
  return (
    <div className="">
      <div className="w-full pb-2 md:pb-4 rounded flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-50">
            <IoBagHandle className="text-2xl text-red-700" />
          </div>
          <h2 className="md:text-xl font-bold text-">Orders Details</h2>
        </div>
        <div onClick={handleClose}  className="px-4 text-sm py-1 rounded text-primary-400 border border-primary-100 bg-primary-50 cursor-pointer">
          Back
        </div>
      </div>
      <div className="bg-bg-50 p-4 border-bg-100 border rounded mb-4">
        <OrderSteps orderItem={orderItem} />
      </div>
      <div className="my-4">
        <div className="flex justify-start gap-4 p-2 items-center border bg-bg-100 border-bg-300 rounded-t">
          <p className="text-sm text-gray-500 font-medium">Order ID:</p>
          <p className="text-base text-primbg-500">{orderItem.order_id}</p>
        </div>
        <div className="bg-bg-50 border-bg-100 border rounded-b">
          {orderItem.Products.map((item, index) => (
            <div className="p-4" key={index}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-20 h-20 rounded-md overflow-hidden border border-gray-300">
                    <img src={item.main_img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-md font-medium">{item.title}</h3>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium">${item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="md:flex flex-row md:justify-between md:gap-4">
        <div className="w-full pb-4 md:pb-0">
          <div className="bg-bg-50 border border-bg-100 p-4 rounded">
            <h5 className="text-lg font-medium">Shipping Address</h5>
            <div>
              <p className="text-gray-600 text-base py-1">{orderItem.Address.firstName} {orderItem.Address.lastName} Tel:{orderItem.Address.phone}</p>
              <p className="text-gray-500 text-sm">{orderItem.Address.line1}</p>
              <p className="text-gray-500 text-sm">{orderItem.Address.city}, {orderItem.Address.state}, {orderItem.Address.postalCode}</p>
              <p className="text-gray-600 text-base">{orderItem.Address.country}</p>
            </div>
          </div>
        </div>
        <div className="bg-bg-50 border border-bg-100 p-4 rounded w-full">
          <h5 className="text-lg font-medium">Total Summary</h5>
          <div className="flex justify-between gap-2 items-center py-1">
            <p className=" text-text-secondary text-base ">Subtotal:</p>
            <h6 className="text-sm font-medium">${orderItem.total_price}</h6>
          </div>
          <div className="flex justify-between gap-2 items-center py-1">
            <p className="text-text-secondary text-base">Shipping fee:</p>
            <h6 className="text-sm font-medium">$0.00</h6>
          </div>
          <div className="flex justify-between gap-2 items-center py-1">
            <p className="text-text-secondary text-base">Discount:</p>
            <h6 className="text-sm font-medium">$0.00</h6>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between gap-2 items-center py-1 pb-2">
            <h6 className="text-sm font-medium">Total</h6>
            <h6 className="text-sm font-medium">${orderItem.total_price}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}