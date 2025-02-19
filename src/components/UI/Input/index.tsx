import React, { FC } from "react";
import clsx from "clsx";

interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value?: string;  // 使用 value 来接收值
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // 传递 onChange 事件
  required?: boolean;
  className?: string;
}

const Input: FC<InputProps> = ({
  id,
  label,
  className,
  ...field
}) => {
  return (
    <div className="relative z-0 w-full group">
      <input
        placeholder=" "
        className={clsx(
          "block h-12 py-2 pt-7 px-4 w-full text-sm font-bold text-primary-500 bg-bg-50 border-1 border-gray-200 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-bg-400 focus:border-bg-400 peer hover:border-bg-400 transition-colors duration-200",
          className
        )}
        {...field}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-0.5 transition-all duration-300 transform scale-75 origin-[0] text-gray-400 peer-focus:left-4 peer-focus:top-3.5 peer-focus:font-bold peer-focus:text-gray-700  peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3 peer-placeholder-shown:text-bg-800"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;