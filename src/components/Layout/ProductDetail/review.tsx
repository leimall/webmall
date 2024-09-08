import ReviewList from "@/components/Common/ReviewList";
import { Divider } from "antd";

export default function Review({ productID }: { productID: string }) {


  return (
    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-4 mt-8">
        <Divider />
        <ReviewList productID={productID} />
      </div>
    </div>
  );
}