"use client";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ProgressBar from "react-bootstrap/ProgressBar";

import React from "react";
import styles from "./styles.module.css";

interface ProgressBarProps {
  color: string; // Bootstrap background color class (e.g., 'bg-success', 'bg-info')
  value: number; // Current value of the progress bar
  max: number; // Maximum value of the progress bar
  label: string; // Accessibility label
  textClass?: string; // Optional additional text classes (e.g., 'text-dark')
  skillName: string;
}

const TESTProgressBar: React.FC<ProgressBarProps> = ({
  color,
  value,
  max,
  label,
  textClass = "",
  skillName,
}) => {
  return (
    <div className="my-3">
      <p className={styles.skillHeader}>{skillName}</p>
      <ProgressBar
        className={styles.progressBar}
        now={value}
        min={0}
        max={max}
        label={`${value}% `}
      />
    </div>
  );
};

export default TESTProgressBar;
