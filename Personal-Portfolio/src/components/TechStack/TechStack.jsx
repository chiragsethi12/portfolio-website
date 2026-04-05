import React, { useEffect, useRef } from "react";
import "./TechStack.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiBootstrap,
  SiJavascript,
} from "react-icons/si";

const techStack = [
  { name: "HTML", icon: FaHtml5, color: "#E44D26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#874be1ff" },
  { name: "React", icon: FaReact, color: "#38BDF8" },
  { name: "Node JS", icon: FaNodeJs, color: "#22C55E" },
  { name: "Express JS", icon: SiExpress, color: "#E5E7EB" },
  { name: "MongoDB", icon: SiMongodb, color: "#22C55E" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#EC4899" },
  { name: "MySql", icon: SiMysql, color: "#3B82F6" },
  { name: "Docker", icon: FaDocker, color: "#0EA5E9" },
];

export default function TechStack() {
  const wrappersRef = useRef([]);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    wrappersRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Cursor floating
  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `
      perspective(600px)
      rotateX(${-y / 18}deg)
      rotateY(${x / 18}deg)
      translateY(-6px)
    `;
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <section className="techstack">
      <div className="one">
        <h1>Tech Stack</h1>
      </div>

      <div className="techstack-grid">
        {techStack.map(({ name, icon: Icon, color }, index) => (
          <div
            key={name}
            ref={(el) => (wrappersRef.current[index] = el)}
            className={`tech-card-wrapper ${
              index < 6 ? "from-left" : "from-right"
            }`}
          >
            <div
              className="tech-card"
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
            >
              <Icon className="tech-icon" style={{ color }} />
              <p className="tech-name">{name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
