import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Header({ showLogo }) {
  return (
    <header>
      <nav className={`${styles.head} ${styles.mobile} ${styles.desktop}`}>
        {showLogo && (
          <div className={`${styles["nav-img"]}`}>
            <img src="/images/project/logo/logo.png" alt="logoImg" />
          </div>
        )}
        {/* Navigation links */}
        <ul className={`${styles["nav-links"]}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles["nav-link"]} ${styles["nav-link-active"]}`
                  : `${styles["nav-link"]}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${styles["nav-link"]} ${styles["nav-link-active"]}`
                  : `${styles["nav-link"]}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/join-us"
              className={({ isActive }) =>
                isActive
                  ? `${styles["nav-link"]} ${styles["nav-link-active"]}`
                  : `${styles["nav-link"]}`
              }
            >
              Join Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive
                  ? `${styles["nav-link"]} ${styles["nav-link-active"]}`
                  : `${styles["nav-link"]}`
              }
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${styles["nav-link"]} ${styles["nav-link-active"]}`
                  : `${styles["nav-link"]}`
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive
                  ? `${styles["nav-link"]} ${styles["nav-link-active"]}`
                  : `${styles["nav-link"]}`
              }
            >
              Support Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
