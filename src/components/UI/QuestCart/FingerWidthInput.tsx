import { Tag } from 'antd';
import { all } from 'axios';
import React, { useRef, useState } from 'react';
import { width } from 'tailwindcss/defaultTheme';

const FingerWidthInput = ({ onWidthsChange }: { onWidthsChange: (widths: string) => void }) => {
    const [fingerWidths, setFingerWidths] = useState(['', '', '', '', '']);
    const showFingerName = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'];
    const inputRefs = useRef<HTMLInputElement[]>([]);
    
    const handleInputChange = (index: number, value: string) => {
      const regex = /^\d{0,2}(\.\d{0,1})?$/;

      // 检查输入值是否符合格式要求且长度不超过 5 位
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
            const widthsString = newFingerWidths.join(',');
            onWidthsChange(widthsString);
        }
      }
    
    };

    return (
        <div>
            {/* 渲染 5 个输入框 */}
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