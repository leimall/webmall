'use client'

import React from 'react';
import { Button, Result } from 'antd';

const Error: React.FC = () => (
  <div className="relative flex flex-col justify-center items-center py-12 px-6">
    <div className="max-w-md w-full bg-white border border-gray-300 rounded-lg p-8">
    <Result
      status="error"
      title="Payment failed!"
      extra={[
        <Button type="primary" key="console" href="/">
          Go Home
        </Button>
      ]}
    />
    </div>
  </div>
);

export default Error;
