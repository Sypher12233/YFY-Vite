import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./styles.module.css";

function ContactUs() {
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

  const onSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;
    console.log("Form submitted successfully!");
    alert("Form submitted successfully!");
    clearForm();
    scrollToTop();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (fieldName, otherFieldId) => (e) => {
    const selectedValue = e.target.value;
    setFormData({ ...formData, [fieldName]: selectedValue });
  };

  const validateForm = () => {
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

  const validateContactNumber = (contactNumber) => {
    return /^\d+$/.test(contactNumber);
  };

  const validateEmailAddress = (emailAddress) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
  };

  const clearForm = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <div className={styles["contact-header"]}>
          <h1>Contact Information</h1>
          <h2>Get in Touch With Us!</h2>
        </div>

        <div className={styles["contact-form"]}>
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            action={`https://formspree.io/f/xleqwvpd`}
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

            <div>
              <label htmlFor="cv">Add CV File (PDF Format)</label>
              <input
                type="file"
                name="cv"
                id="cv"
                accept="application/pdf"
                value={formData.cv || ""}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="idScan">Add ID Scan File (PDF Format)</label>
              <input
                type="file"
                name="idScan"
                id="idScan"
                accept="image/*,.pdf"
                value={formData.idScan || ""}
                onChange={handleInputChange}
              />
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

      <div class={styles["social-media"]}>
        <a href="#">
          <img
            src=""
            alt="Instagram"
          />
        </a>
        <a href="#">
          <img
            src="C:\Users\DELL\Pictures\Saved Pictures\linkedIn_PNG8.png"
            alt="LinkedIn"
          />
        </a>
        <a href="#">
          <img
            src="../../../public/images/project/icons/facebook.png"
            alt="Facebook"
          />
          {/* /Users/SYPHER/sypherGithub/React/YFY-React/templateRouter/yfy-vite-project/public/icons/facebook.png */}
        </a>
      </div>

      <div class={styles["join-community"]}>
        <h2 class="charming-text">Join Our Community Today!</h2>
        <p class="charming-text">
          <strong>Experience Our Best Offers With Membership Program.</strong>
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
