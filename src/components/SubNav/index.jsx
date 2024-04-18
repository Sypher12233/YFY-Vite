// Thought:
// I want to have a search bar that allows a user to browse through events
// possible upgrades could be adding a filter functionality

import React from "react";
import styles from "./styles.module.css";

function SubNav() {
  return (
    // Sub Navigation Bar
    <div className={styles["sub-nav"]}>
      {/* Upcoming Event information */}
      <div className={styles.column}>
        <li>
          <strong>Events</strong>
        </li>
        <li>Find Upcoming Events</li>
      </div>
      <div className={styles.column}>
        <li>
          <strong>Date</strong>
        </li>
        <li>Select Date</li>
      </div>
      {/* <div className={styles.column}>
        <li>
          <strong>Time</strong>
        </li>
        <li>Select Time</li>
      </div> */}
      <div className={styles.column}>
        <li>
          <strong>Speakers</strong>
        </li>
        <li>Explore Speakers</li>
      </div>
    </div>
  );
}

export default SubNav;
