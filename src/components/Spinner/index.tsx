// components/Spinner.js
import React from 'react';
import styles from './styles.module.css'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerInner}></div>
    </div>
  );
};

export default Spinner;
