// components/SmartSelect.tsx
import { useState, useRef, useEffect, useCallback } from 'react';
// import { debounce } from 'lodash-es';
import { Select, SelectProps } from 'antd';
import type { DefaultOptionType } from 'antd/es/select';

interface SmartSelectProps extends SelectProps {
  onBeforeChange?: (oldValue: any, newValue: any) => void;
  persistKey?: string;
  debounceTime?: number;
}

const SmartSelect = ({
  defaultValue,
  value,
  options,
  onChange,
  onBeforeChange,
  persistKey,
  debounceTime = 300,
  ...props
}: SmartSelectProps) => {
  // 状态管理（文献4）
  const [internalValue, setInternalValue] = useState(defaultValue);
  const prevValueRef = useRef(internalValue);
  
  // 持久化存储（文献8）
  useEffect(() => {
    if (!persistKey) return;
    const saved = localStorage.getItem(persistKey);
    if (saved) setInternalValue(JSON.parse(saved));
  }, [persistKey]);

  // // 防抖处理（文献7）
  // const debouncedChange = useCallback(
  //   debounce((newVal: any) => {
  //     onChange?.(newVal, null);
  //   }, debounceTime),
  //   [onChange, debounceTime]
  // );

  // 核心变更处理（文献5）
  const handleChange = (newValue: any, option: DefaultOptionType | DefaultOptionType[] | undefined) => {
    const oldValue = prevValueRef.current;
    
    // 触发前置回调
    onBeforeChange?.(oldValue, newValue);
    
    // 更新状态
    setInternalValue(newValue);
    prevValueRef.current = newValue;
    
    // 持久化存储
    if (persistKey) {
      localStorage.setItem(persistKey, JSON.stringify(newValue));
    }

    // 防抖触发外部onChange
    // debouncedChange(newValue);

    // 调用外部onChange
    onChange?.(newValue, option);
  };

  // // 清理防抖函数（文献8最佳实践）
  // useEffect(() => {
  //   return () => debouncedChange.cancel();
  // }, [debouncedChange]);

  return (
    <Select
      {...props}
      value={value ?? internalValue}
      options={options}
      onChange={handleChange}
    />
  );
};
export default SmartSelect;