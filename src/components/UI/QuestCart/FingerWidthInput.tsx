import { Tag } from 'antd';
import { all } from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { width } from 'tailwindcss/defaultTheme';

const FingerWidthInput = ({ onWidthsChange, initialValues = '' }: { onWidthsChange: (widths: string) => void; initialValues: string }) => {
  const [fingerWidths, setFingerWidths] = useState(['', '', '', '', '']);
  const showFingerName = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'];
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (initialValues) {
      // 若传入了 initialValues，将其分割成数组并设置到 fingerWidths 状态中
      const valuesArray = initialValues.split(',');
      if (valuesArray.length === 5) {
        setFingerWidths(valuesArray);
      }
    } else {
      // 若未传入 initialValues，保持 fingerWidths 为空数组，显示 placeholder
      setFingerWidths(['', '', '', '', '']);
    }
  }, [initialValues]);

  useEffect(() => {
    const allFilled = fingerWidths.every((width) => width.length >= 2);
    if (allFilled) {
      const widthsString = fingerWidths.join(',');
      onWidthsChange(widthsString);
    }
  }, [fingerWidths]);

  const formatValue = (value: string) => {
    const parts = value.split('.');
    let integerPart = parts[0].padStart(2, '0');
    let decimalPart = parts[1] || '0';
    decimalPart = decimalPart.slice(0, 1).padEnd(1, '0');
    return `${integerPart}.${decimalPart}`;
  };

  const handleInputChange = (index: number, value: string) => {
    const regex = /^\d{0,2}(\.\d{0,1})?$/;

    // 检查输入值是否符合格式要求且长度不超过 4 位 00.0
    if (regex.test(value) && value.length <= 4) {
      const newFingerWidths = [...fingerWidths];
      newFingerWidths[index] = value;
      setFingerWidths(newFingerWidths);

      // 如果输入长度达到 5 位，跳转到下一个输入框
      if (value.length === 4 && index < 4) {
        inputRefs.current[index + 1]?.focus();
      }

      // 检查是否所有输入框都已输入满 5 位
      const allFilled = newFingerWidths.every((width) => width.length >= 2);
      if (allFilled) {
        const formattedValues = newFingerWidths.map(formatValue);
        const widthsString = formattedValues.join(',');
        onWidthsChange(widthsString);
      }
    }

  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        {fingerWidths.map((width, index) => (
          <div className='text-center' key={index}>
            <div className='mb-1 mt-2 text-sm text-gray-800' >
              {showFingerName[index]}</div>
            <input
              key={index}
              type="text"
              value={width}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="00.0"
              className="w-14 h-10 border border-gray-300 rounded-md text-center"
              ref={(el: HTMLInputElement | null) => {
                if (el) {
                  inputRefs.current[index] = el
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FingerWidthInput;