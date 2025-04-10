import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useEffect } from "react";

import About from "./About";
import Projects from "./Projects";
import Technology from "./Technology";
import Contact from "./Contact";
import Resume from "./Resume";

import "./App.css";

function AnimatedBlob() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    // Animation variables - faster rotation
    let angle = 0;

    // More pronounced shape variables for dramatic morphing
    let radiusX = 1;
    let radiusY = 1;
    let radiusZ = 1;
    let radiusW = 1;

    // Speed variables - increased for more visible movement
    const rotationSpeed = 0.01; // Faster rotation
    const morphSpeed1 = 0.006; // Faster morphing
    const morphSpeed2 = 0.008;
    const morphSpeed3 = 0.005;
    const morphSpeed4 = 0.007;

    // Direction variables
    let radiusXDirection = morphSpeed1;
    let radiusYDirection = morphSpeed2;
    let radiusZDirection = morphSpeed3;
    let radiusWDirection = morphSpeed4;

    const animate = () => {
      // Update angle for rotation - faster rotation
      angle += rotationSpeed;

      // Update shape morphing - more dramatic changes
      radiusX += radiusXDirection;
      radiusY += radiusYDirection;
      radiusZ += radiusZDirection;
      radiusW += radiusWDirection;

      // More extreme range for shape changing
      if (radiusX > 1.5 || radiusX < 0.5) radiusXDirection *= -1;
      if (radiusY > 1.6 || radiusY < 0.4) radiusYDirection *= -1;
      if (radiusZ > 1.4 || radiusZ < 0.6) radiusZDirection *= -1;
      if (radiusW > 1.5 || radiusW < 0.5) radiusWDirection *= -1;

      // Apply transformations - more pronounced skew and complex border-radius
      blob.style.transform = `translate(-50%, -50%) rotate(${angle}rad) skew(${
        (radiusX - 1) * 15
      }deg, ${(radiusY - 1) * 15}deg)`;

      // Much more complex and dynamic border-radius
      blob.style.borderRadius = `
        ${25 + radiusX * 45}% 
        ${75 - radiusY * 40}% 
        ${20 + radiusZ * 50}% 
        ${80 - radiusW * 45}%
      `;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <div className="bg-blob" id="blob" ref={blobRef} />;
}

function App() {
  const projectRef = useRef(null);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AnimatedBlob />
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
