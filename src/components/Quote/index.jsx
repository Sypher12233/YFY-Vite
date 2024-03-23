import React from "react";
import styles from "./styles.module.css";

function Quote() {
  return (
    // Quote Section
    <div className={styles["quote-section"]}>
      {/* Quote content */}
      <div className={styles["quote-container"]}>
        <div className={styles["quote-icon"]}>
          <img
            src="/images/project/icons/icons8-quote-left-50.png"
            alt="Quote icon by Icons8"
          />
        </div>
        <p className={styles["quote-text"]}>
          A catalyst for the development of both young leaders and their
          projects.
        </p>
        <div className={styles["quote-icon"]}>
          <img
            src="/images/project/icons/icons8-quote-50.png"
            alt="Quote icon by Icons8"
          />
        </div>
      </div>
      <p className={styles["quote-source"]}>New York Times</p>
    </div>
  );
}

export default Quote;
