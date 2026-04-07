import React, { useEffect, useRef } from "react";
import "./About.css";
import StatsCard from "../StatsCard/StatsCard.jsx";

/* Timeline data */
const timelineItems = [
  {
    id: "who",
    side: "left",
    label: "Who I Am",
    icon: "👨‍💻",
    content: (
      <>
        <p className="tl-text">
          A Computer Science Engineering student passionate about crafting
          clean, user-focused digital experiences.
        </p>
        <p className="tl-text">
          I specialise in full-stack web development with a strong eye for
          design and scalable architecture.
        </p>
      </>
    ),
  },
  {
    id: "what",
    side: "right",
    label: "What I Do",
    icon: "⚡",
    content: (
      <ul className="tl-list">
        <li>
          Build responsive, performant web apps with{" "}
          <span className="tl-highlight">React</span>,{" "}
          <span className="tl-highlight">JavaScript</span> &amp; the{" "}
          <span className="tl-highlight">MERN stack</span>.
        </li>
        <li>
          Deliver functional solutions under pressure through hackathons
          and collaborative team challenges.
        </li>
        <li>
          Continuously deepen backend expertise with{" "}
          <span className="tl-highlight">Node.js</span> &amp; modern
          databases while sharpening frontend craft.
        </li>
      </ul>
    ),
  },
  {
    id: "goal",
    side: "left",
    label: "My Goal",
    icon: "🎯",
    content: (
      <p className="tl-goal">
        Create reliable, efficient software that solves real problems —
        one thoughtful commit at a time.
      </p>
    ),
  },
];

const About = () => {
  const headingRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    /* Heading observer */
    const headingObs = new IntersectionObserver(
      ([entry]) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (headingRef.current) headingObs.observe(headingRef.current);

    /* Per-card observer */
    const cardObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("tl-item--visible", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    itemRefs.current.forEach((el) => { if (el) cardObs.observe(el); });

    return () => {
      headingObs.disconnect();
      cardObs.disconnect();
    };
  }, []);

  return (
    <>
      <div className="about-main-div" id="about-section">
        {/* Section heading */}
        <div className="about-heading">
          <div className="one">
            <h1 ref={headingRef} className="about-title">
              About Me
            </h1>
          </div>
        </div>

        {/* Timeline */}
        <div className="tl-wrapper">
          {/* Vertical spine */}
          <div className="tl-spine" />

          {timelineItems.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => (itemRefs.current[idx] = el)}
              className={`tl-item tl-item--${item.side}`}
            >
              {/* Card */}
              <div className="tl-card">
                <div className="tl-card-header">
                  <span className="tl-icon">{item.icon}</span>
                  <span className="tl-label">{item.label}</span>
                </div>
                <div className="tl-card-body">{item.content}</div>
              </div>

              {/* Node on the spine */}
              <div className="tl-node">
                <div className="tl-node-inner" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="about-resume-btn">Download Resume</button>
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
          value="1"
          title="YEARS OF EXPERIENCE"
          description="Continuous learning journey"
        />
      </div>
    </>
  );
};

export default About;
