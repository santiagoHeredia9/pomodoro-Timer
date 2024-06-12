// ProgressBar.js
import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
