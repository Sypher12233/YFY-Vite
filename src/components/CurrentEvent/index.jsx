import React from "react";
import styles from "./styles.module.css";

function CurrentEvent() {
  return (
    <>
      <div className={styles["event-main"]}>
        <div className={styles["event-main-text"]}>
          <h1>Immerse Yourself in the Now!</h1>
          <h2>
            Unfold, Explore, and Experience the Pulse of Our Current Event. Your
            Journey to the Present Begins Here!
          </h2>
        </div>
        <div className={styles["event-img-container"]}>
          <div className={styles["event-rows"]}>
            <div className={styles["first-row"]}>
              <div className={styles["image-text"]}>
                <h1 className={styles["row-text"]}>Networking</h1>
                <div className={styles["current-event-info"]}>
                  <h1>Event Details</h1>
                  <h2>Speaker: Mr Abdullah Habib</h2>
                  <h2>Date: Friday Feb 24, 2024</h2>
                  <h2>Venue: Zoom call - Online</h2>
                </div>
              </div>
            </div>
            <div className={styles["second-row"]}>
              <div className={styles["image-text"]}>
                <h1 className={styles["row-text"]}>Entrepreneurship</h1>
                <div className={styles["current-event-info"]}>
                  <h1>Event Details</h1>
                  <h2>Speaker: Mr Sanzar Kakar</h2>
                  <h2>Date: Sunday, June 06 2024</h2>
                  <h2>Venue: Zoom call - Online</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["event-solo-column"]}>
            <div className={styles["solo-img"]}>
              <div className={styles["solo-img-text"]}>
                <h1 className={styles["column-text"]}>
                  Afghanistan's biggest Event for Youth
                </h1>
                <div className={styles["current-event-info"]}>
                  <h1>Event Details</h1>
                  <h2>Speaker: Mr Lotfullah Najafizada</h2>
                  <h2>Date: Monday, June 06 2024</h2>
                  <h2>Venue: Zoom call - Online</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentEvent;
