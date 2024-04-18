import React from "react";
import styles from "./styles.module.css";

function AboutUs() {
  return (
    <>
      <main className={styles.aboutUsMain}>
        <div>
          <h1>
            The largest and most inclusive youth-led online platform for
            capacity-building and networking in Afghanistan.
          </h1>
        </div>
        <div className={styles.aboutUsMotoContainer}>
          <div className={styles.motoSectionTitle}>
            <h1 className={styles.color}>Youth</h1>
            <h1 className={styles.color}> for </h1>
            <h1 className={styles.color}> Youth</h1>
          </div>
          <div className={styles.motoContainer}>
            <div className={styles.motoSection}>
              <h2>Our Moto</h2>
              <p>Together for a shared future…</p>
            </div>
            <div className={styles.missionSection}>
              <h2>Our Mission</h2>
              <p>Connecting Afghan Youth for Education and Empowerment.</p>
            </div>
            <div className={styles.visionSection}>
              <h2>Our Vision</h2>
              <p>
                Building a Diverse and Inclusive Community of Young Leaders.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className={styles.aboutUsFounderContainer}>
          <div className={styles.founderImageSection}>
            <img
              src="/images/project/individuals/najafizada-Picture.jpg"
              alt="najafizada image"
            />
          </div>
          <div className={styles.founderInfoSection}>
            <h2>Founder and Initiator</h2>
            <h1>Mohammad Habib Abdullah</h1>
            <div className={styles.founderBackground}>
              <h2>Background</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                corrupti beatae quibusdam ut explicabo cum quis natus sapiente
                corporis, maiores officia aspernatur cumque quod voluptatum.
                Exercitationem nisi odit deleniti omnis!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default AboutUs;
