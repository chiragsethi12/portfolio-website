import React, { useEffect, useRef } from "react";
import "./About.css";
import StatsCard from "../StatsCard/StatsCard.jsx";

const About = () => {
  const headingRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // Observer for heading
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      },
      {
        threshold: 0.3,
      }
    );

    // Observer for paragraph + button
    const infoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      },
      {
        threshold: 0.15,
        rootMargin: "-120px 0px -120px 0px",
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
      <div className="about-main-div" id="about-section">
        <div className="about-heading">
          <div className="one">
            <h1 ref={headingRef} className="about-title">
              About Me
            </h1>
          </div>
        </div>

        <div ref={infoRef} className="about-info">
          <div className="about-paragraph">
            <p>
              I'm a Computer Science Engineering student specializing in
              full-stack web development. I build responsive, user-focused
              applications using React, JavaScript, and the MERN stack, with an
              emphasis on clean design and scalable architecture.
              <br />
              <br />
              Through hackathons and technical challenges, I've developed the
              ability to deliver functional solutions quickly while working
              collaboratively under pressure. Currently, I'm deepening my
              backend expertise with Node.js and databases while continuously
              refining my frontend skills.
              <br />
              <br />
              My goal is straightforward: create reliable, efficient software
              that solves real problems.
            </p>
          </div>

          <button>Download Resume</button>
        </div>
      </div>

      <div className="cards-container">
        <StatsCard
          value="4"
          title="TOTAL PROJECTS"
          description="Innovative web & mobile solutions crafted"
        />
        <StatsCard
          value="3"
          title="CERTIFICATES"
          description="Professional skills validated"
        />
        <StatsCard
          value="3"
          title="YEARS OF EXPERIENCE"
          description="Continuous learning journey"
        />
      </div>
    </>
  );
};

export default About;
