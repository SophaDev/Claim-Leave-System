import React from 'react';

const Wrapper: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-md shadow-md sm:px-6 md:px-8 lg:px-10">
        <div className="mb-8 text-xl font-medium text-center text-gray-800 sm:text-2xl">
          Claim & Leave System
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
    // <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    //   <div className="flex-1 max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
    //     <main className="p-6 sm:p-12">
    //       <h1 className="mb-4 text-2xl font-medium text-center text-gray-700 dark:text-gray-200">
    //         Claim and Leave System
    //       </h1>
    //       <div className="w-full">{children}</div>
    //     </main>
    //   </div>
    // </div>
  );
};

export default Wrapper;
