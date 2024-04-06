import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { validateEmailAddress, handleInputChange } from "../Membership";
import styles from "./styles.module.css";

function ContactUs() {
  const [state, handleSubmit] = useForm("xbjnzrka");
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    message: "",
  });

  const validateForm = () => {
    const requiredFields = ["fullName", "emailAddress", "message"];

    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(
          `Please fill out ${field.replace(/([A-Z])/g, " $1").toLowerCase()}.`
        );
        return false;
      }
    }

    if (!validateEmailAddress(formData.emailAddress)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const clearForm = () => {
    setFormData({
      fullName: "",
      emailAddress: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      const result = await handleSubmit(event);

      if (result && result.error) {
        alert(
          "There was an error submitting the form. Please try again later."
        );
        console.error("Form submission error:", result.error);
      } else {
        console.log("Form submitted successfully!");
        alert("Form submitted successfully!");
        clearForm(setFormData);
      }
    } catch (error) {
      console.error("Unexpected error occurred during form submission:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className={styles["contact-main"]}>
        <div className={styles["contact-form"]}>
          <h1>Get in touch with Us</h1>
          <form
            id="contact-form"
            onSubmit={handleFormSubmit}
            action={`https://formspree.io/f/xbjnzrka`}
            method="post"
          >
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="What's your full name?"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <label htmlFor="emailAddress">Email address</label>
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              placeholder="you@example.com"
              value={formData.emailAddress}
              onChange={handleInputChange}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message for the team here"
              value={formData.message}
              rows={5}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles["contact-img"]}>
          <img
            src="/images/project/contactPageLandingImg.jpeg"
            alt="a cartoon holding a pen"
          />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
