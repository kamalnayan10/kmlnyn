import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useEffect } from "react";

import About from "./About";
import Projects from "./Projects";
import Technology from "./Technology";
import Contact from "./Contact";
import Resume from "./Resume";

import "./App.css";

function useAnimatedBlob() {
  useEffect(() => {
    const blob = document.getElementById("blob");

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      blob.style.transform = `translate(${x}px, ${y}px)`; // center based on blob size
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
}

function App() {
  const projectRef = useRef(null);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useAnimatedBlob();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="bg-blob" id="blob" />
              <About scrollToProjects={scrollToProjects} />
              <Technology />
              <Projects ref={projectRef} />
              <Contact />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
