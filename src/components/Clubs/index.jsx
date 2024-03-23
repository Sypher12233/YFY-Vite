import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Clubs() {
  return (
    // Clubs Section
    <div className={styles["clubs-section"]}>
      <h2>Clubs</h2>
      <div className={styles["clubs-container"]}>
        {/* Networking Club */}
        <div className={styles["club-box"]}>
          <img
            src="/images/project/networking-pexels-julian-v-860227.jpg"
            alt="Networking Club Image"
          />
          <div className={styles["inside-box"]}>
            <h3>Networking Club</h3>
            <h4>Connect and thrive with our Networking Club</h4>
            <div className={styles["club-info"]}>
              <img
                src="/images/project/icons/icons8-clock-50.png"
                alt="Meeting Icon"
              />
              <span>Weekly meetings: Mondays, 9 PM</span>
            </div>
            <div className={styles["club-actions"]}>
              <button className={styles["learn-more"]}>Learn More</button>
              <div className={styles.icons}>
                <img
                  src="/images/project/icons/icons8-share-48.png"
                  alt="Share Icon"
                />
                <img
                  src="/images/project/icons/icons8-heart-48.png"
                  alt="Heart Icon"
                />
                <img
                  src="/images/project/icons/icons8-option-48 (1).png"
                  alt="Options Icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Education Club */}
        <div className={styles["club-box"]}>
          <img src="/images/project/education.png" alt="Education Club Image" />
          <div className={styles["inside-box"]}>
            <h3>Education Club</h3>
            <h4>Explore online learning with our Educational Club</h4>
            <div className={styles["club-info"]}>
              <img
                src="/images/project/icons/icons8-clock-50.png"
                alt="Meeting Icon"
              />
              <span>Weekly meetings: Tuesdays, 9 PM</span>
            </div>
            <div className={styles["club-actions"]}>
              <button className={styles["learn-more"]}>Learn More</button>
              <div className={styles.icons}>
                <img
                  src="/images/project/icons/icons8-share-48.png"
                  alt="Share Icon"
                />
                <img
                  src="/images/project/icons/icons8-heart-48.png"
                  alt="Heart Icon"
                />
                <img
                  src="/images/project/icons/icons8-option-48 (1).png"
                  alt="Options Icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scholarship Club */}
        <div className={styles["club-box"]}>
          <img
            src="/images/project/scholarship.png"
            alt="Scholarship Club Image"
          />
          <div className={styles["inside-box"]}>
            <h3>Scholarship Club</h3>
            <h4>Fueling dreams through our Scholarships Club</h4>
            <div className={styles["club-info"]}>
              <img
                src="/images/project/icons/icons8-clock-50.png"
                alt="Meeting Icon"
              />
              <span>Weekly meetings: Wednesdays, 9 PM</span>
            </div>
            <div className={styles["club-actions"]}>
              <button className={styles["learn-more"]}>Learn More</button>
              <div className={styles.icons}>
                <img
                  src="/images/project/icons/icons8-share-48.png"
                  alt="Share Icon"
                />
                <img
                  src="/images/project/icons/icons8-heart-48.png"
                  alt="Heart Icon"
                />
                <img
                  src="/images/project/icons/icons8-option-48 (1).png"
                  alt="Options Icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Debate Club */}
        <div className={styles["club-box"]}>
          <img src="/images/project/debate.png" alt="Networking Club Image" />
          <div className={styles["inside-box"]}>
            <h3>Debate Club</h3>
            <h4>
              Sharpen your debating skills with our Debate Club tackling diverse
              topics
            </h4>
            <div className={styles["club-info"]}>
              <img
                src="/images/project/icons/icons8-clock-50.png"
                alt="Meeting Icon"
              />
              <span>Weekly meetings: Thursdays, 9 PM</span>
            </div>
            <div className={styles["club-actions"]}>
              <button className={styles["learn-more"]}>Learn More</button>
              <div className={styles.icons}>
                <img
                  src="/images/project/icons/icons8-share-48.png"
                  alt="Share Icon"
                />
                <img
                  src="/images/project/icons/icons8-heart-48.png"
                  alt="Heart Icon"
                />
                <img
                  src="/images/project/icons/icons8-option-48 (1).png"
                  alt="Options Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clubs;
