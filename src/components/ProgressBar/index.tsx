import React from 'react';
import styles from './styles.module.css'

interface ProgressBarProps {
  color: string;  // Bootstrap background color class (e.g., 'bg-success', 'bg-info')
  value: number;  // Current value of the progress bar
  max: number;    // Maximum value of the progress bar
  label: string;  // Accessibility label
  textClass?: string;  // Optional additional text classes (e.g., 'text-dark')
  skillName: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ color, value, max, label, textClass = '', skillName }) => {
  return (
    <div className='my-3'>
    <p className={styles.skillHeader}>{skillName}</p>
    <div className={`progress ${styles.progressBar}`} role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      <div className={`progress-bar ${textClass}`} style={{ width: `${value}%` , backgroundColor: color}}>
        {value}%
      </div>
    </div>
    </div>
    
  );
};

export default ProgressBar;
