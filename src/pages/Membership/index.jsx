import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./styles.module.css";

export const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

export const handleSelectChange = (fieldName, otherFieldId) => (e) => {
  const selectedValue = e.target.value;
  setFormData({ ...formData, [fieldName]: selectedValue });
};

export const validateForm = () => {
  const requiredFields = [
    "fullName",
    "gender",
    "nationality",
    "mainAddress",
    "birthDate",
    "education",
    "emailAddress",
    "contactNumber",
  ];

  for (const field of requiredFields) {
    if (!formData[field]) {
      alert(
        `Please fill out ${field.replace(/([A-Z])/g, " $1").toLowerCase()}.`
      );
      return false;
    }
  }

  if (!validateContactNumber(formData.contactNumber)) {
    alert("Please enter a valid contact number.");
    return false;
  }

  if (!validateEmailAddress(formData.emailAddress)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
};

export const validateContactNumber = (contactNumber) => {
  return /^\d+$/.test(contactNumber);
};

export const validateEmailAddress = (emailAddress) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

export const clearForm = () => {
  setFormData({
    fullName: "",
    gender: "",
    nationality: "",
    otherNationality: "",
    mainAddress: "",
    job: "",
    otherJob: "",
    birthDate: "",
    education: "",
    otherEducation: "",
    contactNumber: "",
    emailAddress: "",
    cv: null,
    idScan: null,
    motivation: "",
    inquiry: "",
  });
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Handle form submission
const handleFormSubmit = async (event) => {
  event.preventDefault();

  if (!validateForm()) return;

  try {
    const result = await handleSubmit(event);

    if (result && result.error) {
      // Display server-side error message in an alert
      alert("There was an error submitting the form. Please try again later.");
      console.error("Form submission error:", result.error);
    } else {
      console.log("Form submitted successfully!");
      alert("Form submitted successfully!");
      clearForm();
      scrollToTop();
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("Unexpected error occurred during form submission:", error);
    alert("An unexpected error occurred. Please try again later.");
  }
};

function Membership() {
  const [state, handleSubmit] = useForm("xleqwvpd");
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    nationality: "",
    otherNationality: "",
    mainAddress: "",
    job: "",
    otherJob: "",
    birthDate: "",
    education: "",
    otherEducation: "",
    contactNumber: "",
    emailAddress: "",
    cv: null,
    idScan: null,
    motivation: "",
    inquiry: "",
  });

  return (
    <>
      <div>
        <div className={styles["contact-header"]}>
          <h1>Join Our Community Today!</h1>
          <h2>Apply to become a YFY Member!</h2>
        </div>

        <div className={styles["membership-form"]}>
          <form
            id="membership-form"
            onSubmit={handleFormSubmit}
            action={`https://formspree.io/f/xleqwvpd`}
            method="post"
          >
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled defaultValue>
                Select your gender
              </option>
              <option value="Male">Male ♂️</option>
              <option value="Female">Female ♀️</option>
              <option value="Other">Other ⚧️</option>
            </select>

            <label htmlFor="nationality">Nationality</label>
            <select
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleSelectChange(
                "nationality",
                "otherNationalityInput"
              )}
              required
            >
              <option value="" disabled defaultValue>
                Select your nationality
              </option>
              <option value="Afghan">🇦🇫 Afghan</option>
              <option value="American">🇺🇸 American</option>
              <option value="British">🇬🇧 British</option>
              <option value="Canadian">🇨🇦 Canadian</option>
              <option value="German">🇩🇪 German</option>
              <option value="French">🇫🇷 French</option>
              <option value="Australian">🇦🇺 Australian</option>
              <option value="Italian">🇮🇹 Italian</option>
              <option value="Spanish">🇪🇸 Spanish</option>
              <option value="Dutch">🇳🇱 Dutch</option>
              <option value="Swedish">🇸🇪 Swedish</option>
              <option value="Norwegian">🇳🇴 Norwegian</option>
              <option value="Iranian">🇮🇷 Iranian</option>
              <option value="Danish">🇩🇰 Danish</option>
              <option value="Swiss">🇨🇭 Swiss</option>
              <option value="Belgian">🇧🇪 Belgian</option>
              <option value="Austrian">🇦🇹 Austrian</option>
              <option value="Portuguese">🇵🇹 Portuguese</option>
              <option value="Irish">🇮🇪 Irish</option>
              <option value="Japanese">🇯🇵 Japanese</option>
              <option value="Turkish">🇹🇷 Turkish</option>
              <option value="Chinese">🇨🇳 Chinese</option>
              <option value="Indian">🇮🇳 Indian</option>
              <option value="Other">🌍 Other (Please specify)</option>
            </select>
            {formData.nationality === "Other" && (
              <div id="otherNationality">
                <label htmlFor="otherNationalityInput">Please specify:</label>
                <input
                  type="text"
                  id="otherNationalityInput"
                  name="otherNationality"
                  placeholder="Your Nationality"
                  value={formData.otherNationality}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <label htmlFor="mainAddress">The Main Address</label>
            <input
              type="text"
              id="mainAddress"
              name="mainAddress"
              placeholder="Main Address"
              value={formData.mainAddress}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="job">Job</label>
            <select
              id="job"
              name="job"
              value={formData.job}
              onChange={handleSelectChange("job", "otherJob")}
            >
              <option value="" disabled>
                Select your job
              </option>
              <option value="Software Engineer">💻 Software Engineer</option>
              <option value="Software Developer">💻 Software Developer</option>
              <option value="Web Developer">🌐 Web Developer</option>
              <option value="Registered Nurse">👩‍⚕️ Registered Nurse</option>
              <option value="Physical Therapist">👩‍⚕️ Physical Therapist</option>
              <option value="Doctor">👨‍⚕️ Doctor</option>
              <option value="Dentist">🦷 Dentist</option>
              <option value="Pharmacist">💊 Pharmacist</option>
              <option value="Teacher">👩‍🏫 Teacher</option>
              <option value="Engineer">👷‍♂️ Engineer</option>
              <option value="Mechanical Engineer">
                👷‍♂️ Mechanical Engineer
              </option>
              <option value="Marketing Manager">📈 Marketing Manager</option>
              <option value="Graphic Designer">🎨 Graphic Designer</option>
              <option value="Customer Service Representative">
                📞 Customer Service Representative
              </option>
              <option value="Project Manager">📊 Project Manager</option>
              <option value="Data Analyst">📊 Data Analyst</option>
              <option value="Accountant">💼 Accountant</option>
              <option value="Administrative Assistant">
                💼 Administrative Assistant
              </option>
              <option value="Business Analyst">💼 Business Analyst</option>
              <option value="Financial Analyst">💼 Financial Analyst</option>
              <option value="Sales Manager">👨‍💼 Sales Manager</option>
              <option value="Human Resources Manager">
                👩‍💼 Human Resources Manager
              </option>
              <option value="Lawyer">⚖️ Lawyer</option>
              <option value="Chef">👨‍🍳 Chef</option>
              <option value="Police Officer">👮‍♂️ Police Officer</option>
              <option value="Firefighter">👨‍🚒 Firefighter</option>
              <option value="Journalist">📰 Journalist</option>
              <option value="Financial Planner">💰 Financial Planner</option>
              <option value="Real Estate Agent">🏠 Real Estate Agent</option>
              <option value="Architect">🏗️ Architect</option>
              <option value="Pilot">✈️ Pilot</option>
              <option value="Veterinarian">🐾 Veterinarian</option>
              <option value="Electrician">🔌 Electrician</option>
              <option value="Plumber">🚿 Plumber</option>
              <option value="Writer">✍️ Writer</option>
              <option value="Actor">🎭 Actor</option>
              <option value="Musician">🎵 Musician</option>
              <option value="Artist">🎨 Artist</option>
              <option value="Athlete">🏅 Athlete</option>
              <option value="Interior Designer">🛋️ Interior Designer</option>
              <option value="Photographer">📷 Photographer</option>
              <option value="Entrepreneur">💼 Entrepreneur</option>
              <option value="Consultant">🤝 Consultant</option>
              <option value="Flight Attendant">✈️ Flight Attendant</option>
              <option value="Translator">🌐 Translator</option>
              <option value="Event Planner">🎉 Event Planner</option>
              <option value="Fashion Designer">👗 Fashion Designer</option>
              <option value="Barista">☕ Barista</option>
              <option value="Librarian">📚 Librarian</option>
              <option value="Social Worker">👩‍👦 Social Worker</option>
              <option value="Chemist">🧪 Chemist</option>
              <option value="Biologist">🦠 Biologist</option>
              <option value="Meteorologist">🌦️ Meteorologist</option>
              <option value="Geologist">🌋 Geologist</option>
              <option value="Geographer">🌍 Geographer</option>
              <option value="Zoologist">🦁 Zoologist</option>
              <option value="Botanist">🌿 Botanist</option>
              <option value="Farmer">🌾 Farmer</option>
              <option value="Marine Biologist">🐠 Marine Biologist</option>
              <option value="Scientist">🔬 Scientist</option>
              <option value="Physicist">🔬 Physicist</option>
              <option value="Astronomer">🔭 Astronomer</option>
              <option value="Astrophysicist">🌌 Astrophysicist</option>
              <option value="Cosmologist">🌠 Cosmologist</option>
              <option value="Quantum Physicist">🎛️ Quantum Physicist</option>
              <option value="Nuclear Physicist">☢️ Nuclear Physicist</option>
              <option value="Psychiatrist">🧠 Psychiatrist</option>
              <option value="Psychologist">🧠 Psychologist</option>
              <option value="Neurologist">🧠 Neurologist</option>
              <option value="Cardiologist">❤️ Cardiologist</option>
              <option value="Dermatologist">🩺 Dermatologist</option>
              <option value="Ophthalmologist">👁️ Ophthalmologist</option>
              <option value="Optometrist">👁️ Optometrist</option>
              <option value="Orthopedic Surgeon">⚕️ Orthopedic Surgeon</option>
              <option value="Nephrologist">🔬 Nephrologist</option>
              <option value="Thoracic Surgeon">🔬 Thoracic Surgeon</option>
              <option value="Vascular Surgeon">🔬 Vascular Surgeon</option>
              <option value="Allergist">💉 Allergist</option>
              <option value="Anesthesiologist">💉 Anesthesiologist</option>
              <option value="Immunologist">💉 Immunologist</option>
              <option value="Neonatologist">👶 Neonatologist</option>
              <option value="Geriatrician">👵 Geriatrician</option>
              <option value="Sports Medicine Physician">
                🏃‍♂️ Sports Medicine Physician
              </option>
              <option value="Rehabilitation Physician">
                🏋️‍♂️ Rehabilitation Physician
              </option>
              <option value="Molecular Biologist">
                🧬 Molecular Biologist
              </option>
              <option value="Geneticist">🧬 Geneticist</option>
              <option value="Medical Geneticist">🧬 Medical Geneticist</option>
              <option value="Regenerative Medicine Specialist">
                🧬 Regenerative Medicine Specialist
              </option>
              <option value="Infectious Disease Specialist">
                🦠 Infectious Disease Specialist
              </option>
              <option value="Microbiologist">🦠 Microbiologist</option>
              <option value="Virologist">🦠 Virologist</option>
              <option value="Pain Management Specialist">
                💊 Pain Management Specialist
              </option>
              <option value="Urgent Care Physician">
                🚑 Urgent Care Physician
              </option>
              <option value="Other">Other (Please Specify:) 🕵️</option>
            </select>
            {formData.job === "Other" && (
              <div id="otherJobInput">
                <label htmlFor="otherJob">Please specify:</label>
                <input
                  type="text"
                  id="otherJob"
                  name="otherJob"
                  placeholder="Your Job"
                  value={formData.otherJob}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <label htmlFor="birthDate">Date of Birth</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              placeholder="Date of Birth"
              value={formData.birthDate}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="education">Education Degree</label>
            <select
              id="education"
              name="education"
              value={formData.education}
              onChange={handleSelectChange("education", "otherEducation")}
              required
            >
              <option value="" disabled>
                Select your education degree
              </option>
              <option value="High School">High School 🎓</option>
              <option value="Associate's Degree">Associate's Degree 🎓</option>
              <option value="Bachelor's Degree">Bachelor's Degree 🎓</option>
              <option value="Master's Degree">Master's Degree 🎓</option>
              <option value="Doctorate">Doctorate 🎓</option>
              <option value="Other">Other (Please specify) ✏️</option>
            </select>
            {formData.education === "Other" && (
              <div id="otherEducation">
                <label htmlFor="otherEducationInput">Please specify:</label>
                <input
                  type="text"
                  id="otherEducationInput"
                  name="otherEducation"
                  placeholder="Education Degree"
                  value={formData.otherEducation}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <label htmlFor="contactNumber">
              Contact Number (WhatsApp or Telegram)
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleInputChange}
            />

            <label htmlFor="emailAddress">Email</label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="Email"
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
            />

            <div className={styles["file-submit"]}>
              <label htmlFor="cv">Add CV File (PDF Format)</label>
              <input
                type="file"
                name="cv"
                id="cv"
                accept="application/pdf"
                onChange={handleInputChange}
                disabled
              />
              {formData.cv ? (
                <p>{formData.cv.name}</p>
              ) : (
                <p>
                  For now, please submit your CV file to this email address:
                  <a href="mailto:youthforyouth1399@gmail.com">
                    youthforyouth1399@gmail.com
                  </a>
                </p>
              )}
            </div>

            <div className={styles["file-submit"]}>
              <label htmlFor="idScan">Add ID Scan File (PDF Format)</label>
              <input
                type="file"
                name="idScan"
                id="idScan"
                accept="image/*,.pdf"
                onChange={handleInputChange}
                disabled
              />
              {formData.idScan ? (
                <p>{formData.idScan.name}</p>
              ) : (
                <p>
                  For now, please submit your ID scan file to this email
                  address:
                  <a href="mailto:youthforyouth1399@gmail.com">
                    youthforyouth1399@gmail.com
                  </a>
                </p>
              )}
            </div>

            <label htmlFor="motivation">Motivation letter for Membership</label>
            <textarea
              id="motivation"
              name="motivation"
              placeholder="Motivation letter for Membership (at least 1500-2500 characters)"
              value={formData.motivation}
              onChange={handleInputChange}
              required
            ></textarea>

            <label htmlFor="inquiry">Any Question/Suggestion/Criticism?</label>
            <textarea
              id="inquiry"
              name="inquiry"
              placeholder="Any Question/Suggestion/Criticism?"
              value={formData.inquiry}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className={styles["social-media"]}>
        <a href="https://www.instagram.com/youthforyouth.af/">
          <img
            src="/images/project/icons/icons8-instagram.svg"
            alt="Instagram"
          />
        </a>
        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Flinkedin.com%2Fin%2FYOUTH%2520for%2520YOUTH%2520%25D8%25AC%25D9%2588%25D8%25A7%25D9%2586%2520%25D8%25A8%25D8%25B1%25D8%25A7%25DB%258C%2520%25D8%25AC%25D9%2588%25D8%25A7%25D9%2586&h=AT2k5So7RGcDA8Mr9FOb9uwZXZdkxR76t4u4D4ttKbhx6XDHQgc8grLd4ucP3iCzCpzpdSvd_7XfGfzBTFgGbEa9nQyL3QQnPVo9SZ1CiF5zLwZ-4RmaTET7f3xdvYeoDP9h1JKCI1nmWnOMQtT8lFhZ8A">
          <img
            src="/images/project/icons/icons8-linkedin (1).svg"
            alt="LinkedIn"
          />
        </a>
        <a href="https://www.facebook.com/people/YOUTH-for-YOUTH-%D8%AC%D9%88%D8%A7%D9%86-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%AC%D9%88%D8%A7%D9%86/100077650367064/">
          <img src="/images/project/icons/icons8-facebook.svg" alt="Facebook" />
        </a>
      </div>

      <div className={styles["join-community"]}>
        <h2 className="charming-text">Join Our Community Today!</h2>
        <p className="charming-text">
          <strong>Experience Our Best Offers With Membership Program.</strong>
        </p>
      </div>
    </>
  );
}

export default Membership;
