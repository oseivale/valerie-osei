import React from 'react';
import styles from './styles.module.css'; // Adjust the path to your CSS

const ImageLoader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderInner}></div>
    </div>
  );
};

export default ImageLoader;
