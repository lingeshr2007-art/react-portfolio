import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Herosection from "../Components/HeroSection.jsx/Herosection";
import AboutMe from "../Components/Aboutme/AboutMe";
import Education from "../Components/Education/Education";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/projects/Projects";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/contact";
import ErrorPage from "../Components/ErrorPage/ErrorPage"; 
import OfflinePage from "../Components/OfflinePage/OfflinePage";

const Body = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => setIsOffline(false);
    const handleOfflineStatus = () => setIsOffline(true);

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);



  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Herosection />
              <AboutMe />
              <Education />
              <Skills />
              <Projects />
              <Services />
              <Contact />
            </>
          }
        />

        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

       
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Body;
