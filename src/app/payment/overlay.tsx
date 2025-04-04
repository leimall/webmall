// LoadingOverlay.js
import React from 'react';

const LoadingOverlay = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 z-10">
      <div className="text-primary-500 text-xl font-medium">Loading payment information...</div>
    </div>
  );
};
export default LoadingOverlay;
