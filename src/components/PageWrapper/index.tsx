import React from 'react';
import styles from './styles.module.css';

interface PageWrapperProps {
  children: React.ReactNode;  // Accepts any valid React children
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      {children}
    </div>
  );
};

export default PageWrapper;
