import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;  // Accepts any valid React children
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default PageWrapper;
