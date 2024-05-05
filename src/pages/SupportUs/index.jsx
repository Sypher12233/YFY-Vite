import React from "react";
import styles from "./styles.module.css";

function SupportUs() {
  // Lazy loading of images
  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[data-src]");

    function lazyLoadImage(img) {
      img.setAttribute("src", img.getAttribute("data-src"));
      img.onload = function () {
        img.removeAttribute("data-src");
      };
    }

    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lazyLoadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    images.forEach((image) => {
      imgObserver.observe(image);
    });
  });

  // Smooth scrolling behavior
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);
        target.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  // Form validation
  document.addEventListener("DOMContentLoaded", function () {
    const donationForm = document.getElementById("donationForm");
    const feedbackMessage = document.getElementById("feedbackMessage");

    donationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Add your form validation logic here
      // For simplicity, let's assume the form is always valid
      // and show the feedback message
      feedbackMessage.style.display = "block";
      setTimeout(function () {
        feedbackMessage.style.display = "none";
      }, 3000); // Hide feedback message after 3 seconds
      donationForm.reset(); // Reset the form after submission
    });
  });

  // Show/Hide payment fields based on selected payment type
  document.addEventListener("DOMContentLoaded", function () {
    const paymentTypeSelect = document.getElementById("paymentType");
    const eCheckFields = document.getElementById("eCheckFields");
    const creditCardFields = document.getElementById("creditCardFields");

    paymentTypeSelect.addEventListener("change", function () {
      eCheckFields.style.display = "none";
      creditCardFields.style.display = "none";

      if (this.value === "eCheck") {
        eCheckFields.style.display = "block";
      } else if (this.value === "creditCard") {
        creditCardFields.style.display = "block";
      }
    });

    // Add animations and functionality to the Donate button
    const donateButton = document.getElementById("donateButton");
    donateButton.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#537991";
      this.style.transform = "scale(1.1)";
    });

    donateButton.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "#35a9b6";
      this.style.transform = "scale(1)";
    });
  });
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles["hero-content"]}>
          <h1>Empower Afghan Youth!</h1>
          <p>
            Stand with Afghan youth living through crisis in Afghanistan by
            supporting Leaders' efforts to provide emergency support services to
            young leaders across Afghanistan. Leaders is a range of impactful
            programs that develop leadership skills among those who will be
            rebuilding their country in years to come. Your donation plays an
            essential role in supporting these efforts by providing immediate
            assistance such as emergency food aid while creating opportunities
            for long-term learning and leadership development within
            communities.
          </p>
        </div>
      </section>

      <section className={styles["donation-form"]}>
        <h2>Support Afghan Youth's Future</h2>
        <form id="donationForm" className={styles.donationForm}>
          <div className={styles["form-group"]}>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className={styles["form-group"]}>
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className={styles["form-group"]}>
            <label for="address">Address Line 1</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div className={styles["form-group"]}>
            <label for="city">City</label>
            <input type="text" id="city" name="city" required />
          </div>
          <div className={styles["form-group"]}>
            <label for="country">Country</label>
            <input type="text" id="country" name="country" required />
          </div>
          <div className={styles["form-group"]}>
            <label for="state">State</label>
            <input type="text" id="state" name="state" />
          </div>
          <div className={styles["form-group"]}>
            <label for="zip">Zip Code</label>
            <input type="text" id="zip" name="zip" required />
          </div>
          <div className={styles["form-group"]}>
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles["form-group"]}>
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className={styles["form-group"]}>
            <label for="paymentType">Payment Type</label>
            <select id="paymentType" name="paymentType" required>
              <option value="">Select a payment method</option>
              <option value="eCheck">eCheck</option>
              <option value="creditCard">Credit Card</option>
            </select>
          </div>

          <div id="eCheckFields" className={styles["payment-details"]}>
            <div className={styles["form-group"]}>
              <label for="nameOnAccount">Name on Account</label>
              <input
                type="text"
                id="nameOnAccount"
                name="nameOnAccount"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label for="bankRoutingNumber">Bank Routing Number</label>
              <input
                type="text"
                id="bankRoutingNumber"
                name="bankRoutingNumber"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label for="bankAccountNumber">Bank Account Number</label>
              <input
                type="text"
                id="bankAccountNumber"
                name="bankAccountNumber"
                required
              />
            </div>
          </div>

          <div id="creditCardFields" className={styles["payment-details"]}>
            <div className={styles["form-group"]}>
              <label for="nameOnCard">Name on Card</label>
              <input type="text" id="nameOnCard" name="nameOnCard" required />
            </div>
            <div className={styles["form-group"]}>
              <label for="creditCardNumber">Credit Card Number</label>
              <input
                type="text"
                id="creditCardNumber"
                name="creditCardNumber"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label for="expirationDate">Expiration Date</label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label for="securityCode">Security Code</label>
              <input
                type="text"
                id="securityCode"
                name="securityCode"
                required
              />
            </div>
          </div>

          {/* <!-- Donate Amount field --> */}
          <div className={styles["form-group"]}>
            <label for="donateAmount">Donate Amount ($)</label>
            <input
              type="number"
              id="donateAmount"
              name="donateAmount"
              min="1"
              required
            />
          </div>

          <div className={styles.donationSubmit}>
            <button id="donateButton" type="submit">
              <i className={styles["fas fa-donate"]}></i> Donate Now
            </button>
          </div>

          {/* <!-- Feedback messages --> */}
          <div className={styles.donationFeedbackMessage} id="feedbackMessage">
            Thank you for your donation!
          </div>
        </form>
      </section>
    </main>
  );
}

export default SupportUs;
