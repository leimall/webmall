import React, { FC } from "react";
import clsx from "clsx";

interface InputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  required?: boolean;
  className?: string;
}

const Input: FC<InputProps> = ({
  id,
  name,
  label,
  type = "text",
  defaultValue,
  required = false,
  className,
}) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        type={type}
        id={id}
        name={name}
        defaultValue={defaultValue}
        required={required}
        placeholder=" "
        className={clsx(
          "block h-12 py-2 pt-7 px-4 w-full text-sm font-bold text-fta-primary-500 bg-fta-background-50 border-1 border-gray-200 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-fta-background-400 focus:border-fta-background-400 peer hover:border-fta-background-400 transition-colors duration-200",
          className
        )}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-0.5 transition-all duration-300 transform scale-75 origin-[0] text-gray-400 peer-focus:left-4 peer-focus:top-3.5 peer-focus:font-bold peer-focus:text-gray-700  peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-3 peer-placeholder-shown:text-fta-background-800"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;