import React from "react";
import styles from "./styles.module.css";
function BestMoments() {
  return (
    <div className={styles["best-moments-section"]}>
      <h2>Discover Unforgettable Experience at Spectacular Events</h2>

      {/* <!-- Best moments content --> */}

      {/* <!-- Search input for events --> */}
      <div className={styles["search-bar"]}>
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <img
            src="/images/project/icons/icons8-search-64 (2).png"
            alt="Search"
          />
        </button>
      </div>

      <h3>Our Top moments this year</h3>

      <div className={styles["best-moments-boxes"]}>
        {/* <!-- Youth Development Box --> */}
        <div className={styles["best-moments-box"]}>
          <img
            src="/images/project/microphone-pexels-suvan-chowdhury-144429.jpg"
            alt="a microphone"
          />

          <div className={styles["inside-best-moments-box"]}>
            <h4>Youth Development</h4>

            <div className={styles["speakers-name"]}>
              <img
                src="/images/project/icons/icons8-mic-50.png"
                alt="Microphone Icon"
              />
              <p className={styles["name-speaker"]}>Mr Lotfullah Najafizada</p>
            </div>
            <div className={styles["speakers-name"]}>
              <img
                src="/images/project/icons/icons8-calendar-48 (1).png"
                alt="Calendar Icon"
              />
              <p className={styles["date-speaker"]}>
                Monday, June 06 | 06:42 AM
              </p>
            </div>
            <div className={styles["speakers-name"]}>
              <img
                src="/images/project/icons/icons8-location-50.png"
                alt="Location Icon"
              />
              <p className={styles["location-speaker"]}>Online - Google Meet</p>
            </div>
          </div>
        </div>

        {/* Networking Box */}
        <div className={styles["best-moments-box"]}>
          <img src="/images/project/google-Meet-call.png" alt="a microphone" />

          <div className={styles["inside-best-moments-box"]}>
            <h4>Networking</h4>

            <div className={styles["speakers-name"]}>
              <img
                src="/images/project/icons/icons8-mic-50.png"
                alt="Microphone Icon"
              />
              <p className={styles["name-speaker"]}>Mr Abdullah Habib</p>
            </div>
            <div className={styles["speakers-name"]}>
              <img
                src="/images/project/icons/icons8-calendar-48 (1).png"
                alt="Calendar Icon"
              />
              <p className={styles["date-speaker"]}>
                Monday, June 06 | 06:42 AM
              </p>
            </div>
            <div className={styles["speakers-name"]}>
              <img
                src="/images/project/icons/icons8-location-50.png"
                alt="Location Icon"
              />
              <p className={styles["location-speaker"]}>Online - Google Meet</p>
            </div>
          </div>
        </div>

        {/* Entrepreneurship Box */}
        <div className={styles["best-moments-box"]}>
          <img
            src="/images/project/startup-pexels-eva-bronzini-6956385.jpg"
            alt="a microphone"
          />

          <div className={styles["inside-best-moments-box"]}>
            <h4>Entrepreneurship</h4>

            <div className={styles["speakers-name"]}>
              <img
                src="/images/project/icons/icons8-mic-50.png"
                alt="Microphone Icon"
              />
              <p className={styles["name-speaker"]}>Mr Mutiullah Qazi Zada</p>
            </div>
            <div className={styles["speakers-name"]}>
              <img
                src="/images/project/icons/icons8-calendar-48 (1).png"
                alt="Calendar Icon"
              />
              <p className={styles["date-speaker"]}>
                Sunday, June 06 | 07:00 PM
              </p>
            </div>
            <div className={styles["speakers-name"]}>
              <img
                src="/images/project/icons/icons8-location-50.png"
                alt="Location Icon"
              />
              <p className={styles["location-speaker"]}>Online - Google Meet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestMoments;
