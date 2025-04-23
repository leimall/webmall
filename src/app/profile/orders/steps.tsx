import type { OrderType } from "@/types/orders";
import { Steps } from "antd";

export default function OrderSteps({ orderItem }: { orderItem: OrderType }) {
  console.error("object", orderItem);
  const items = [
    {
      title: "Payment",
      description:"",
    },
    {
      title: "In Progress",
      description:"",
    },
    {
      title: 'Shipping',
      description:"",
    },
    {
      title: 'Finished',
      description:"",
    },
  ];
  
  return (
    <Steps current={1} percent={60} labelPlacement="vertical" items={items} />
  )
}
