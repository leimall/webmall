'use client';

import React, { useState, useEffect } from 'react';
import { Select, Input, Form } from 'antd';
import useMenuStore from '@/stores/useMenuStore';

const { Option } = Select;

interface ShapeInputProps {
  initialShape?: string;
  initialInputValue?: string;
  onChangeValue: (shape: string , inputValue: string) => void;
}

const ShapeInput: React.FC<ShapeInputProps> = ({ initialShape, initialInputValue, onChangeValue }) => {
  const [shape, setShape] = useState<string | null | undefined >(initialShape);
  const [inputValue, setInputValue] = useState<string| null | undefined>(initialInputValue);
  const [options, setOptions] = useState<{ label: string; value: string }[]>([]);
  const { shapeOptions } = useMenuStore();

  useEffect(() => {
    if (shapeOptions.length > 0) {
      setOptions(shapeOptions);
    }
  }, [shapeOptions]);

  useEffect(() => {
    if (initialShape !== undefined) {
      setShape(initialShape);
    }
    if (initialInputValue !== undefined) {
      setInputValue(initialInputValue);
    }
  }, [initialShape, initialInputValue]);

  const handleShapeChange = (value: string) => {
    setShape(value);
    onChangeValue(value, inputValue || '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChangeValue(shape || '', value);
    setShape(value);
  };
  return (
    <>
    <div className="py-2">
      <Form.Item
        name="shape"
        label="Shape"
        initialValue={shape}
        rules={[{ required: true, message: 'Please select a shape!' }]}
      >
        <Select
          value={shape|| ''}
          onChange={handleShapeChange}
          showSearch
          placeholder="Select a shape"
          filterOption={(input, option) =>
            (option?.label?.toString() ?? '').toLowerCase().includes(input.toLowerCase())
          }
          className='w-full'
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value} label={option.label}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <div className='p-2 text-gray-500'>
        If you choose custom size, fill in this area with 10 measurements as instructed in our photo guide. Please note with Left and Right measurement for example: "L:15,12,13,11,9 R:15,13,13,11,9" (mm)
      </div>

      <div>
        <Form.Item
          name="value"
          label="size"
          initialValue={inputValue}
          rules={[{ required: true, message: 'Please enter the size!' }]}
        >
          <Input
            value={inputValue|| ''}
            type="text"
            onChange={handleInputChange}
            placeholder="L:15,12,13,11,9 R:15,13,13,11,9"
            className='w-full'
          />
        </Form.Item>
      </div>
    </div>
    </>
  );
};export default ShapeInput;
