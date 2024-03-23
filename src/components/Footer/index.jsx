import React from "react";
import styles from "./styles.module.css";
function Footer() {
  return (
    <footer>
      <div className={styles["footer-section"]}>
        {/* <!-- About YFY Section --> */}
        <div className={styles["about-yfy"]}>
          <h4>About YFY</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            itaque unde facere repellendus, odio et iste voluptatum aspernatur
            ratione mollitia tempora eligendi maxime est, blanditis accusamus.
            Incidunt, aut, quis
          </p>

          {/* <!-- Contact Information --> */}
          <div className={styles["contact-info"]}>
            <img
              src="/images/project/icons/icons8-phone-64.png"
              alt="phone icon"
            />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className={styles["contact-info"]}>
            <img
              src="/images/project/icons/icons8-mail-48.png"
              alt="mail icon"
            />
            <span>support@youthforyouth.com</span>
          </div>

          {/* <!-- Email and Message Section --> */}
          <div className={styles["email-message-section"]}>
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </div>
        </div>

        {/* <!-- Latest Tweets Section --> */}
        <div className={styles["latest-tweets"]}>
          <h4>Latest Tweets</h4>
          <div className={styles.tweets}>
            {/* <!-- Tweet 1 --> */}
            <div className={styles.tweet}>
              <img src="/images/project/icons/icons8-twitter-48.png" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. #YFY
                #Twitter
              </p>
            </div>
            {/* <!-- Tweet 2 --> */}
            <div className={styles.tweet}>
              <img src="/images/project/icons/icons8-twitter-48.png" />
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. #SocialMedia
              </p>
            </div>
            {/* <!-- Tweet 3 --> */}
            <div className={styles.tweet}>
              <img src="/images/project/icons/icons8-twitter-48.png" />
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. #Updates
              </p>
            </div>
          </div>
        </div>

        <div className={styles["instagram-section"]}>
          <h4>Instagram</h4>
          {/* <!-- Instagram Images --> */}
          <div className={styles["instagram-images"]}>
            <img
              src="/images/project/img1-pexels-annabel-ritson-14503317.jpg"
              alt="Instagram Post 1"
            />
            <img
              src="/images/project/img2-pexels-beyzaa-yurtkuran-19856538.jpg"
              alt="Instagram Post 2"
            />
          </div>
          <div className={styles["instagram-images"]}>
            <img
              src="/images/project/img3-pexels-efe-ersoy-20103950.jpg"
              alt="Instagram Post 3"
            />
            <img
              src="/images/project/img4-pexels-linh-bo-13999127.jpg"
              alt="Instagram Post 4"
            />
          </div>
        </div>

        {/* <!-- Navigation and Brand Text --> */}
      </div>
      <div className={styles["footer-nav"]}>
        {/* <!-- Navigation Links --> */}
        <div>
          <ul>
            <li>
              <a className={styles.color} href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Support Us</a>
            </li>
          </ul>
        </div>

        {/* <!-- Brand Text --> */}
        <div>
          <p>YouthForYouth</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
