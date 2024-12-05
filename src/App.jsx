import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Projectpage from "./pages/projectpage";
import AboutMe from "./pages/aboutMe";
import JourneyPage from "./pages/journeyPage";
import ContactPage from "./pages/contactMe";
import Background from "./component/background";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Background />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project" element={<Projectpage />} />{" "}
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
