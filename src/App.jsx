import React from "react";
import "./assets/reset.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./pages/Home/index";
import Membership from "./pages/Membership";
import ContactUs from "./pages/Contact";
import Resources from "./pages/Resources";
import Scholarships from "./pages/Scholarships";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
// import SupportUs from "./pages/SupportUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="join-us" element={<Membership />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/scholarships" element={<Scholarships />} />
          <Route path="resources/events/*" element={<Events />} />
          {/* <Route path="resources/teams-and-clubs" element={<TeamsAndClubs />} /> */}
          {/* <Route path="resources/courses-and-workshops" element={<CoursesAndWorkshops />} /> */}
          {/* <Route path="resources/blog" element={<Blog />} /> */}
          {/* <Route path="resources/newsletter" element={<Newsletter />} /> */}

          <Route path="contact-us" element={<ContactUs />} />
          {/* <Route path="support-us" element={<SupportUs />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
