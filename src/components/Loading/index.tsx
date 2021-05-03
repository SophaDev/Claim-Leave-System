import React from 'react';
import './index.css';
function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-16 h-16 mb-4 border-4 rounded-full loader"></div>
      <div className="text-xl font-medium text-gray-500">Loading...</div>
    </div>
  );
}

export default Loading;
