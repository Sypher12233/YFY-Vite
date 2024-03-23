import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <nav className={`${styles.desktop} ${styles.mobile}`}>
        <div className={`${styles["nav-img"]}`}>
          <img src="../../public/images/project/logo/logo.png" alt="logoImg" />
        </div>
        {/* Nav image */}
        {/* Navigation links */}
        <div className={`${styles["nav-links"]}`}>
          <ul>
            <li>
              <NavLink className={styles.color} to="/">
                Home
              </NavLink>
              {/* </a> */}
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/resources">Resources</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
