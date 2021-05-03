import React, { Suspense } from 'react';
import './index.css';
const Main: React.FC = ({ children }) => {
  return (
    <main className="h-full overflow-y-auto scrollbar">
      <div className="container grid p-6 mx-auto">{children}</div>
    </main>
  );
};

export default Main;
