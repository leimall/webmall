'use client'; // 需要在客户端执行
import { FaTruck } from "react-icons/fa6";
const FreeShipping = () => {

  return (
    <div className="bg-bg-100 p-2 w-full">
      <div className="relative mx-auto max-w-c-1280 items-center justify-between align-items:flex-end">
        <div className="flex gap-2 mb-1">
          <FaTruck className="text-xl text-green-800" />
          <span className="text-sm md:text-md">
            Free shipping worldwide for orders over <span className="font-bold text-red-700">$69</span>.
          </span>

        </div>
      </div>
    </div>
  )
};

export default FreeShipping;