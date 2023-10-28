import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <div className="bg-gray-50 py-10 justify-center items-center min-h-screen flex flex-col ">
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
