import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function Resources() {
  document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });

    // Toggle mobile navigation menu
    const menuToggle = document.querySelector(".menu-toggle");
    const links = document.querySelector(".links");

    menuToggle.addEventListener("click", () => {
      links.classList.toggle("active");
    });

    // Lazy loading for images
    function lazyload() {
      const lazyloadImages = document.querySelectorAll("img.lazy");

      lazyloadImages.forEach((img) => {
        if (img.offsetTop < window.innerHeight + window.pageYOffset) {
          img.src = img.dataset.src;
          img.classList.remove("lazy");
        }
      });

      lazyloadImages.forEach((img) => {
        if (!img.classList.contains("lazy")) {
          lazyloadImages.splice(lazyloadImages.indexOf(img), 1);
        }
      });

      if (lazyloadImages.length === 0) {
        window.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }

    // Debounce scroll event for better performance
    function debounce(func, wait) {
      let timeout;
      return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function () {
          timeout = null;
          func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }

    const debouncedLazyLoad = debounce(lazyload, 20);
    window.addEventListener("scroll", debouncedLazyLoad);
    window.addEventListener("resize", debouncedLazyLoad);
    window.addEventListener("orientationChange", debouncedLazyLoad);

    // Form validation
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = document.querySelector("#email");
      const emailValue = emailInput.value.trim();

      if (!isValidEmail(emailValue)) {
        showError("Please enter a valid email address.");
      } else {
        // Perform form submission
        form.submit();
      }
    });

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function showError(message) {
      const errorElement = document.createElement("div");
      errorElement.classList.add("error");
      errorElement.innerText = message;

      form.insertAdjacentElement("beforeend", errorElement);

      setTimeout(() => {
        errorElement.remove();
      }, 3000);
    }
  });
  return (
    <main className={styles.resourcesMain}>
      <div className={styles.resourcesHeader}>
        <h1>YFY Resources</h1>
      </div>
      <section id="scholarships">
        <div className={styles.container}>
          <article className={styles.section} id="scholarships">
            <img
              src="/images/project/icons/icons8-scholarship-100.png"
              alt="Scholarships Icon"
            />
            <h2>Scholarships</h2>
            <p>
              Educational Assistance that includes more than 100 opportunities.
            </p>
            <a href="#">Read More...</a>
          </article>
          <article className={styles.section} id="events">
            <Link to="/events">
              <img
                src="/images/project/icons/icons8-events-64.png"
                alt="Events Icon"
              />
              <h2>Events</h2>
              <p>
                Explore a variety of engaging activities and experiences to
                enhance your journey.
              </p>
              <a href="#">Read More...</a>
            </Link>
          </article>
          <article className={styles.section} id="teams">
            <img
              src="/images/project/icons/icons8-team-100.png"
              alt="Teams & Clubs Icon"
            />
            <h2>Teams & Clubs</h2>
            <p>
              Connect with like-minded individuals through diverse teams and
              clubs, fostering collaboration and shared interests.
            </p>
            <a href="#">Read More...</a>
          </article>
          <article className={styles.section} id="courses">
            <img
              src="/images/project/icons/icons8-courses-64.png"
              alt="Courses & Workshops Icon"
            />
            <h2>Courses & Workshops</h2>
            <p>
              Discover a range of enriching courses and workshops designed to
              expand your knowledge and skills.
            </p>
            <a href="#">Read More...</a>
          </article>
          <article className={styles.section} id="blog">
            <img
              src="/images/project/icons/icons8-blog-64.png"
              alt="Blog/Opinion Articles Icon"
            />
            <h2>Blog/Opinion Articles</h2>
            <p>
              Read thought-provoking blogs and opinion articles that offer
              diverse perspectives and insights on various topics.
            </p>
            <a href="#">Read More...</a>
          </article>
          <article className={styles.section} id="newsletter">
            <img
              src="/images/project/icons/icons8-newsletter-64.png"
              alt="Newsletter Icon"
            />
            <h2>Newsletter</h2>
            <p>
              Stay updated and informed with our insightful newsletters
              delivering the latest news, tips, updates directly in your inbox.
            </p>
            <a href="#">Read More...</a>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Resources;
