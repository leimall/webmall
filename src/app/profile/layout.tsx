import type { Metadata } from "next";

import "@/styles/globals.css";
import { Slider, type Checkbox } from "antd";
import type { Input } from "postcss";
import { IoBagHandleOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "FTAnails | ",
  description: "",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative mx-auto max-w-c-1280 mb-8 items-center justify-between align-items:flex-end px-2 md:px-8 2xl:px-0">
      <div className="flex justify-between flex-col md:flex-row md:pt-8 pt-4">
        <div className="hidden md:block md:w-1/3 flex-shrink-0">
          <div className="bg-bg-50 border border-bg-200 rounded p-8 mx-8 space-y-6 mb-4">
            <div>
              <p className="text-gray-400 text-sm mb-4">DASHBOARD</p>
              <div className="flex justify-start items-center gap-2 cursor-pointer hover:text-primary-500 hover:border-l-2">
                <IoBagHandleOutline className="text-xl" />
                <div className="w-5/6 text-md">Orders</div>
                <div>12</div>
              </div>
            </div>

          </div>
        </div>
        {children}
      </div>
      {/* 左侧筛选区域 */}
    </div>
  );
}
