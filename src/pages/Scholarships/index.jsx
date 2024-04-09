import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Scholarships() {
  useEffect(() => {
    const scholarships = [
      {
        title: "YTB Scholarship",
        eligibility:
          "International student status, academic excellence, language proficiency (Turkish or English), specific requirements for each level of study.",
        deadlines: "Vary depending on the program.",
        applyLink: "https://apply.ytb.gov.tr/",
        benefits:
          "Full or partial funding for tuition, monthly stipend, and sometimes travel expenses.",
      },
      {
        title: "DAAD Scholarship",
        eligibility:
          "A bachelor's degree or equivalent, proficiency in German or English, strong academic record, a research or study plan that fits with German institutions.",
        deadlines: "Vary depending on the program.",
        applyLink: "https://www.daad.de/en/apply/",
        benefits:
          "Full or partial funding for tuition, monthly stipend, health insurance, and travel expenses.",
      },
      {
        title: "Chevening Scholarship",
        eligibility:
          "A citizen of a Chevening-eligible country, a minimum of two years of work experience, academic qualifications for a UK master's program.",
        deadlines:
          "Applications typically open in August and close in November for scholarships to study in the following academic year.",
        applyLink: "https://www.chevening.org/apply/",
        benefits:
          "Full funding for tuition, monthly stipend, travel expenses, and sometimes visa application fees.",
      },
      {
        title: "Fulbright Scholarship",
        eligibility:
          "A citizen of a country with a Fulbright program, a bachelor's degree or equivalent, proficiency in English, strong academic and professional record.",
        deadlines:
          "Vary by country but are typically between October and February for programs starting the following fall.",
        applyLink: "https://us.fulbrightonline.org/",
        benefits:
          "Full funding for tuition, monthly stipend, travel expenses, and sometimes health insurance.",
      },
      {
        title: "Gates Foundation Scholarship",
        eligibility:
          "High school seniors from low-income families with strong academic records and leadership potential.",
        deadlines: "Typically in December.",
        applyLink: "https://www.gatesfoundation.org/what-we-do/scholarships/",
        benefits:
          "Full tuition coverage for undergraduate studies at any accredited college or university.",
      },
      {
        title: "Rhodes Scholarship",
        eligibility:
          "Exceptional academic achievement, leadership potential, and a commitment to service.",
        deadlines: "Vary by country.",
        applyLink: "https://www.rhodeshouse.ox.ac.uk/scholarships/",
        benefits:
          "Full funding for postgraduate studies at the University of Oxford.",
      },
      {
        title: "Commonwealth Scholarship",
        eligibility:
          "Citizens of Commonwealth countries, with a minimum of an upper second-class Honours degree, and preferably a master’s degree, or equivalent qualifications.",
        deadlines: "Deadlines vary depending on the country.",
        applyLink:
          "https://www.acu.ac.uk/scholarships/commonwealth-scholarships",
        benefits:
          "Full tuition fees, living expenses, travel costs, and thesis grant (if applicable).",
      },
      {
        title: "Aga Khan Foundation International Scholarship",
        eligibility:
          "Citizens of select developing countries, with excellent academic records and genuine financial need.",
        deadlines: "Deadlines vary depending on the country of study.",
        applyLink:
          "https://www.akdn.org/our-agencies/aga-khan-foundation/international-scholarship-programme",
        benefits: "Full tuition fees, living expenses, and travel costs.",
      },
      {
        title: "Erasmus+ Scholarship",
        eligibility:
          "Citizens of EU member states, with opportunities for students, staff, trainees, teachers, and volunteers to spend a period abroad to increase their skills and employability.",
        deadlines: "Deadlines vary depending on the specific program.",
        applyLink:
          "https://ec.europa.eu/programmes/erasmus-plus/opportunities/individuals/students",
        benefits:
          "Opportunities for study, training, work experience, and volunteering abroad.",
      },
      // Add other scholarship data as needed
    ];

    renderScholarships(scholarships);
  }, []);

  const renderScholarships = (scholarships, shareOnSocial) => {
    const scholarshipCards = document.getElementById("scholarship-cards");
    scholarshipCards.innerHTML = "";

    scholarships.forEach((scholarship) => {
      const card = document.createElement("div");
      card.classList.add(styles["scholarship-card"], "animated");

      card.innerHTML = `
      <h2>${scholarship.title}</h2>
      <p><strong>Eligibility Requirements:</strong></p>
      <p>${scholarship.eligibility}</p>
      <p><strong>Deadlines:</strong></p>
      <p>${scholarship.deadlines}</p>
      <p><strong>Benefits:</strong></p>
      <p>${scholarship.benefits}</p>
      <a href=${scholarship.applyLink} class=${styles["apply-button"]}>Apply Now</a>
    `;

      scholarshipCards.appendChild(card);
    });
  };

  return (
    <div className={styles.mainDiv}>
      <h1 className={`${styles["page-heading"]} ${styles["animated"]}`}>
        "Dream, Believe, Achieve: Conquer New Horizons with Exclusive
        International Scholarships"
      </h1>

      <main
        className={styles["scholarship-cards"]}
        id="scholarship-cards"
      ></main>

      <h2 className={`${styles["page-subheading"]} ${styles["animated"]}`}>
        Breaking Barriers, Building Bridges: Connect with Global Opportunities
        through Scholarships
      </h2>
    </div>
  );
}

export default Scholarships;
