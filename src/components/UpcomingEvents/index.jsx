import React from "react";
import styles from "./styles.module.css";

function UpcomingEvents() {
  return (
    <>
      <div className={styles["event-main"]}>
        <div className={styles["event-main-text"]}>
          <h1>Dive into Tomorrow's Thrills!</h1>
          <h2>
            Explore, Connect, and Ignite Your Passion at Our Spectacular
            Upcoming Events. Your Next Unforgettable Experience Awaits!
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
              src="/images/project/icons/upcoming-event2-pexels-fauxels-3183183.jpg"
              alt="employees cheering"
            />
          </div>

          {/* second container reverse */}
          <div className={styles["event-container"]}>
            <img
              src="/images/project/icons/upcoming-event1-pexels-fauxels-3184291.jpg"
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
export default UpcomingEvents;
