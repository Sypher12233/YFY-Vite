import React from "react";
import "./assets/reset.css";
import Root from "./components/Root/Root";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import "./App.css";
import Membership from "./pages/Membership";
import ContactUs from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="join-us" element={<Membership />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
