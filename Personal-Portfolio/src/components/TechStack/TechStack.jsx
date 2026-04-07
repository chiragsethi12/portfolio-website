import React, { useEffect, useRef } from "react";
import "./TechStack.css";

import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaDocker } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiBootstrap,
  SiJavascript,
  SiGit,
  SiPostman,
  SiGithub,
} from "react-icons/si";

// direction controls which side each category slides in from
const categories = [
  {
    id: "frontend",
    label: "Frontend",
    accent: "#38BDF8",
    direction: "left",
    items: [
      { name: "HTML5",        icon: FaHtml5,       color: "#E44D26" },
      { name: "CSS3",         icon: FaCss3Alt,     color: "#1572B6" },
      { name: "JavaScript",   icon: SiJavascript,  color: "#F7DF1E" },
      { name: "React",        icon: FaReact,       color: "#38BDF8" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Bootstrap",    icon: SiBootstrap,   color: "#874be1" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    accent: "#22C55E",
    direction: "right",
    items: [
      { name: "Node.js",    icon: FaNodeJs,        color: "#22C55E" },
      { name: "Express.js", icon: SiExpress,       color: "#E5E7EB" },
      { name: "JWT",        icon: SiJsonwebtokens, color: "#EC4899" },
    ],
  },
  {
    id: "database",
    label: "Database",
    accent: "#3B82F6",
    direction: "left",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#22C55E" },
      { name: "MySQL",   icon: SiMysql,   color: "#3B82F6" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    accent: "#F05032",
    direction: "right",
    items: [
      { name: "Git",     icon: SiGit,     color: "#F05032" },
      { name: "Docker",  icon: FaDocker,  color: "#0EA5E9" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "GitHub",  icon: SiGithub,  color: "#E5E7EB" },
    ],
  },
];

export default function TechStack() {
  const categoryRefs = useRef([]);
  const observersRef = useRef([]);

  useEffect(() => {
    // Double rAF: ensures the browser commits the initial opacity:0 / translateX
    // state to the GPU before we start observing. Without this, if the section is
    // already in the viewport on mount the observer fires synchronously and the
    // cards appear instantly with no animation.
    let raf1 = requestAnimationFrame(() => {
      let raf2 = requestAnimationFrame(() => {
        observersRef.current = categoryRefs.current.map((el) => {
          if (!el) return null;

          const obs = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                // Re-enable transitions, then animate in on next two frames.
                // Double rAF ensures the "transition: none" from ts-instant is
                // fully cleared before we add the visible class.
                el.classList.remove("ts-instant");
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    el.classList.add("ts-category--visible");
                  });
                });
              } else {
                // Element left viewport — kill transitions first so cards don't
                // slide back while off-screen, then snap to hidden state.
                el.classList.add("ts-instant");
                el.classList.remove("ts-category--visible");
              }
            },
            { threshold: 0.1 }
          );

          obs.observe(el);
          return obs;
        });
      });

      return () => cancelAnimationFrame(raf2);
    });

    return () => {
      cancelAnimationFrame(raf1);
      observersRef.current.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <section className="techstack" id="tech-stack">

      {/* Heading reuses the global .one h1 decoration from About.css */}
      <div className="one">
        <h1>Tech Stack</h1>
      </div>

      <div className="ts-body">
        {categories.map((cat, catIdx) => (
          <div
            key={cat.id}
            ref={(el) => (categoryRefs.current[catIdx] = el)}
            className="ts-category"
            // CSS var drives slide direction + category accent colour
            style={{
              "--slide-dir": cat.direction === "left" ? "-90px" : "90px",
              "--cat-accent": cat.accent,
            }}
          >
            {/* Category label row */}
            <div className="ts-cat-header">
              <span className="ts-cat-dot" />
              <span className="ts-cat-label">{cat.label}</span>
              <span className="ts-cat-line" />
            </div>

            {/* Card row */}
            <div className="ts-cards-row">
              {cat.items.map(({ name, icon: Icon, color }, itemIdx) => (
                /*
                 * WRAPPER – owns the entrance animation (translateX + opacity).
                 * Stagger delay is per-card so they ripple in one by one.
                 */
                <div
                  key={name}
                  className="ts-card-wrapper"
                  style={{ "--stagger": `${itemIdx * 80}ms` }}
                >
                  {/*
                   * INNER CARD – owns the hover interaction (translateY).
                   * Keeping both transforms on separate elements means they
                   * never conflict with each other.
                   */}
                  <div className="ts-card">
                    <div className="ts-icon-wrap">
                      <Icon className="ts-icon" style={{ color }} />
                    </div>
                    <p className="ts-name">{name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
