import React from "react";
import styles from "./styles.module.css";

function PastEvents() {
  return (
    <>
      <div className={styles["event-main"]}>
        <div className={styles["event-main-text"]}>
          <h1>Catch Up on the Unforgettable Moments!</h1>
          <h2>
            Explore the Best of What You Missed - Your Gateway to Past Events
            and Timeless Memories.
          </h2>
        </div>

        <div className={styles["event-meetings"]}>
          {/* first container */}
          <div className={styles["event-container"]}>
            <div className={styles["event-info"]}>
              <h1>Meeting title</h1>
              <div className={styles["event-info-icon"]}>
                <img
                  src="/images/project/icons/icons8-clock.svg"
                  alt="Meeting Icon"
                />
                <span>Weekly meetings: Mondays, 9 PM</span>
              </div>
              <div className={styles["event-info-icon"]}>
                <img
                  src="/images/project/icons/icons8-location-50.png"
                  alt="Meeting Icon"
                />
                <span>Zoom Call - Online</span>
              </div>
            </div>
            <img
              src="/images/project/achievements-pexels-kampus-production-5940838.jpg"
              alt="employees cheering"
            />
          </div>

          {/* second container reverse */}
          <div className={styles["event-container"]}>
            <img
              src="/images/project/net-pexels-visual-tag-mx-2566581.jpg"
              alt=""
            />
            <div className={styles["event-info"]}>
              <h1>Meeting title</h1>
              <div className={styles["event-info-icon"]}>
                <img
                  src="/images/project/icons/icons8-clock.svg"
                  alt="Meeting Icon"
                />
                <span>Weekly meetings: Mondays, 9 PM</span>
              </div>
              <div className={styles["event-info-icon"]}>
                <img
                  src="/images/project/icons/icons8-location-50.png"
                  alt="Meeting Icon"
                />
                <span>Zoom Call - Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PastEvents;
