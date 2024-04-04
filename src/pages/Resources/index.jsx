import React, { useState } from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import styles from "./styles.module.css";
import Footer from "../../components/Footer";
import CurrentEvent from "../../components/CurrentEvent";
import PastEvents from "../../components/PastEvents";
import UpcomingEvents from "../../components/UpcomingEvents";
import Speakers from "../../components/Speakers";
function Resources() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("current-event");
  return (
    <>
      <div className={styles["events-main"]}>
        <div className={styles["events-main-text"]}>
          <h1>YouthForYouth Events Hub</h1>
          <h2>Join Us for Exciting Events</h2>
        </div>
        <div className={styles["events-main-img"]}>
          <img
            src="/images/project/resources-main-business-education-coaching-isometric-icons-set/20290.jpg"
            alt="a vector of individuals having a meeting"
          />
        </div>
      </div>

      <div className={styles["events-sub-nav"]}>
        <ul>
          <li>
            <NavLink
              to="current-event"
              className={
                selectedMenuItem === "current-event"
                  ? `${styles["events-sub-nav-link"]} ${styles["events-sub-nav-link-active"]}`
                  : styles["events-sub-nav-link"]
              }
              onClick={() => setSelectedMenuItem("current-event")}
            >
              Current Event
            </NavLink>
          </li>
          <li>
            <NavLink
              to="past-events"
              className={
                selectedMenuItem === "past-events"
                  ? `${styles["events-sub-nav-link"]} ${styles["events-sub-nav-link-active"]}`
                  : styles["events-sub-nav-link"]
              }
              onClick={() => setSelectedMenuItem("past-events")}
            >
              Past Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="upcoming-events"
              className={
                selectedMenuItem === "upcoming-events"
                  ? `${styles["events-sub-nav-link"]} ${styles["events-sub-nav-link-active"]}`
                  : styles["events-sub-nav-link"]
              }
              onClick={() => setSelectedMenuItem("upcoming-events")}
            >
              Upcoming Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="speakers"
              className={
                selectedMenuItem === "speakers"
                  ? `${styles["events-sub-nav-link"]} ${styles["events-sub-nav-link-active"]}`
                  : styles["events-sub-nav-link"]
              }
              onClick={() => setSelectedMenuItem("speakers")}
            >
              Speakers
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route index element={<Navigate to="current-event" replace />} />
        <Route path="current-event" element={<CurrentEvent />} />
        <Route path="past-events" element={<PastEvents />} />
        <Route path="upcoming-events" element={<UpcomingEvents />} />
        <Route path="speakers" element={<Speakers />} />
      </Routes>
      <Footer />
    </>
  );
}
export default Resources;
