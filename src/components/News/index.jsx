import React from "react";
import styles from "./styles.module.css";
function News() {
  return (
    <div className={styles["news-section"]}>
      {/* <!-- News content --> */}
      <h2>Latest News</h2>
      <div className={styles["news-container"]}>
        {/* <!-- News & Updates --> */}
        <div className={styles["news-box"]}>
          <img
            src="./images/project/online-event-pexels-antoni-shkraba-4348404.jpg"
            alt="Networking Club Image"
          />
          <div className={styles["inside-news-box"]}>
            <h4>Youth Empowerment</h4>
            <h4>Online Event</h4>
          </div>
        </div>

        <div className={styles["news-box"]}>
          <img
            src="./images/project/speaker-pexels-henri-mathieusaintlaurent-8349233.jpg"
            alt="Networking Club Image"
          />
          <div className={styles["inside-news-box"]}>
            <h4>Speaker Spotlight: Dr. Jane</h4>
            <h4>Renowned Primatologist</h4>
          </div>
        </div>

        <div className={styles["news-box"]}>
          <img
            src="./images/project/achievements-pexels-kampus-production-5940838.jpg"
            alt="Networking Club Image"
          />
          <div className={styles["inside-news-box"]}>
            <h4>Youth Networking Gala</h4>
            <h4>Celebrating Achievements</h4>
          </div>
        </div>
      </div>

      {/* <!-- Updates content --> */}
      <h2>Latest Updates</h2>
      <div
        className={`${styles["news-container"]} ${styles["updates-container"]}`}
      >
        <div className={styles["updates-box"]}>
          <img
            src="./images/project/news-pexels-lisa-fotios-1369476.jpg"
            alt="Networking Club Image"
          />
          <div className={styles["inside-updates-box"]}>
            <div className={styles["event-date"]}>
              <img src="./images/project/icons/icons8-calendar-100.png" />
              <time>September 3rd 2024</time>
            </div>
            <h4>Breaking News from YFY Headquarters</h4>
          </div>
        </div>
        <div className={styles["updates-box"]}>
          <img
            src="./images/project/achievements1-pexels-fauxels-3184292.jpg"
            alt="Networking Club Image"
          />
          <div className={styles["inside-updates-box"]}>
            <div className={styles["event-date"]}>
              <img src="./images/project/icons/icons8-calendar-100.png" />
              <time>March 17th 2024</time>
            </div>
            <h4>In the Spotlight: YFY Achievements</h4>
          </div>
        </div>
        <div className={styles["updates-box"]}>
          <img
            src="./images/project/progress-pexels-alesia-kozik-6781273.jpg"
            alt="Networking Club Image"
          />
          <div className={styles["inside-updates-box"]}>
            <div className={styles["event-date"]}>
              <img src="./images/project/icons/icons8-calendar-100.png" />
              <time>January 1st 2025</time>
            </div>
            <h4>YFY Chronicles: Unveiling Our Progress</h4>
            {/* <!-- <h4>Online Event</h4> --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
