import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Feedback() {
  return (
    // Feedback Section
    <div className={styles["feedback-section"]}>
      {/* Guest speaker's feedback */}
      <div className={styles["speakers-feedback"]}>
        <p className={styles["feedback-main"]}>
          Events executed with exceptional discipline.
        </p>
        <p className={styles["feedback-caption"]}>
          Lotfullah Nafizada - Guest Speaker
        </p>
        <button type="button" className={styles["feedback-btn"]}>
          Explore Events
        </button>
      </div>
      <div className={styles["speakers-image"]}>
        <img src="/images/project/najafizada1.jpg" alt="speakers photo" />
      </div>
    </div>
  );
}

export default Feedback;
