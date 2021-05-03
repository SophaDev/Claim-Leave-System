import React, { useState } from 'react';
const Wrapper: React.FC = ({ children }) => {
  return (
    <div className="py-4 shadow-sm bg-gradient-to-r from-blue-600 to-blue-300">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 lg:justify-end">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
