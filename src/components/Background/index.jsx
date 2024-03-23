import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Background() {
  return (
    <div className={styles["background-image"]}>
      <div className={styles["centered-text"]}>
        {/* Text content */}
        <p className={styles.first}>
          Discover opportunities with&nbsp;
          <span className={styles.color}> Youth For Youth</span>
        </p>
        <p className={styles.second}>Connect With Afghan Youth</p>
      </div>
    </div>
  );
}

export default Background;
