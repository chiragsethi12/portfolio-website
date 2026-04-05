import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const headingRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // Heading observer
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      },
      { threshold: 0.3 }
    );

    // Paragraph observer
    const infoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    if (headingRef.current) headingObserver.observe(headingRef.current);
    if (infoRef.current) infoObserver.observe(infoRef.current);

    return () => {
      headingObserver.disconnect();
      infoObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="projects-main-div" id="projects-section">
        <div className="one">
          <h1 ref={headingRef} className="projects-title">
            Portfolio Showcase
          </h1>
        </div>

        <div ref={infoRef} className="about-portfolio fade-info">
          <p>
            Explore a curated selection of my most impactful projects,
            demonstrating my skills in full-stack development, problem-solving,
            and innovative design.
          </p>
        </div>

        {/* 🔘 TAB BUTTONS */}
        <div className="multi-btn">
          <button
            className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>

          <button
            className={`tab-btn ${
              activeTab === "certificates" ? "active" : ""
            }`}
            onClick={() => setActiveTab("certificates")}
          >
            Certificates
          </button>
        </div>

        {/* 📦 TAB CONTENT */}
        {activeTab === "projects" && (
          <div className="projects-grid">
            <ProjectCard
              image="/images/intervueai.png"
              title="IntervueAI"
              description="Real-time AI mock interviews with natural conversations."
              demo="#"
              details="#"
            />

            <ProjectCard
              image="/images/blendy.png"
              title="Blendy"
              description="A real-time social app to connect and share instantly."
              demo="#"
              details="#"
            />

            <ProjectCard
              image="/images/blendy.png"
              title="Blendy"
              description="A real-time social app to connect and share instantly."
              demo="#"
              details="#"
            />
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="placeholder">
            <h2>Certificates</h2>
            <p>Certificates section coming here.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
