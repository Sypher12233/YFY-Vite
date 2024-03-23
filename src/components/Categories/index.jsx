import React from "react";
import styles from "./styles.module.css";

function Categories() {
  return (
    // Categories Section
    <div className={styles["categories-section"]}>
      <h2>Categories</h2>
      <div className={styles["box-container"]}>
        <div className={`${styles.box} ${styles["big-box"]} ${styles.a}`}>
          <p>Education</p>
        </div>
        <div className={styles.spaced}>
          <div className={`${styles.box} ${styles["small-box"]} ${styles.b}`}>
            <p>Workshop</p>
          </div>
          <div className={`${styles.box} ${styles["small-box"]} ${styles.c}`}>
            <p>Scholarship</p>
          </div>
        </div>
        <div className={`${styles.box} ${styles["big-box"]} ${styles.d}`}>
          <p>Conferences</p>
        </div>
        <div className={styles.spaced}>
          <div className={`${styles.box} ${styles["small-box"]} ${styles.e}`}>
            <p>Volunteer</p>
          </div>
          <div className={`${styles.box} ${styles["small-box"]} ${styles.f}`}>
            <p>Leadership</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
