import React, { useEffect, useRef } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import "./ContactMe.css";
import "./HeroOrbit.css";

/* ─── Inline SVG: minimal premium developer illustration ─── */
const DeveloperSVG = () => (
  <svg
    viewBox="0 0 240 280"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    aria-label="Developer illustration"
  >
    <defs>
      {/* Neon blue glow filter */}
      <filter id="neonGlow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="3.5" result="blur1" />
        <feGaussianBlur stdDeviation="7" result="blur2" />
        <feMerge>
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Gradient: body / hoodie */}
      <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a2744" />
        <stop offset="100%" stopColor="#0d1829" />
      </linearGradient>
      {/* Gradient: laptop lid */}
      <linearGradient id="laptopLid" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1c2e4a" />
        <stop offset="100%" stopColor="#101c30" />
      </linearGradient>
      {/* Gradient: laptop screen glow */}
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#63b3ed" stopOpacity="0.25" />
        <stop offset="50%" stopColor="#805ad5" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#63b3ed" stopOpacity="0.10" />
      </linearGradient>
      {/* Radial glow behind figure */}
      <radialGradient id="figureAmbient" cx="50%" cy="55%" r="50%">
        <stop offset="0%" stopColor="#63b3ed" stopOpacity="0.18" />
        <stop offset="60%" stopColor="#805ad5" stopOpacity="0.07" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
      {/* Desk gradient */}
      <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e2d45" />
        <stop offset="100%" stopColor="#131f33" />
      </linearGradient>
    </defs>

    {/* ── Ambient glow behind figure ── */}
    <ellipse cx="120" cy="200" rx="95" ry="55" fill="url(#figureAmbient)" />

    {/* ── Desk / table ── */}
    <rect x="30" y="210" width="180" height="10" rx="4" fill="url(#deskGrad)" />
    {/* desk highlight edge */}
    <rect x="30" y="210" width="180" height="2" rx="2" fill="rgba(99,179,237,0.18)" />

    {/* ── Laptop base ── */}
    <rect x="58" y="198" width="124" height="14" rx="5"
      fill="#0f1c2e" stroke="rgba(99,179,237,0.35)" strokeWidth="0.8" />
    {/* trackpad */}
    <rect x="105" y="203" width="30" height="6" rx="3"
      fill="rgba(99,179,237,0.08)" stroke="rgba(99,179,237,0.25)" strokeWidth="0.6" />

    {/* ── Laptop lid ── */}
    <rect x="62" y="128" width="116" height="72" rx="6"
      fill="url(#laptopLid)" stroke="rgba(99,179,237,0.4)" strokeWidth="0.9" />
    {/* screen face */}
    <rect x="67" y="133" width="106" height="63" rx="4"
      fill="url(#screenGrad)" />
    {/* screen code lines */}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect
        key={i}
        x={73 + (i % 2 === 0 ? 0 : 8)}
        y={140 + i * 9}
        width={i % 3 === 0 ? 48 : i % 2 === 0 ? 62 : 38}
        height="3"
        rx="1.5"
        fill={i % 3 === 0 ? "rgba(99,179,237,0.55)" : i % 2 === 0 ? "rgba(128,90,213,0.45)" : "rgba(99,179,237,0.30)"}
        filter="url(#subtleGlow)"
      />
    ))}
    {/* cursor blink line */}
    <rect x="73" y="195" width="18" height="3" rx="1.5"
      fill="rgba(99,179,237,0.7)" filter="url(#neonGlow)">
      <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
    </rect>

    {/* ── Screen neon border glow ── */}
    <rect x="67" y="133" width="106" height="63" rx="4"
      fill="none" stroke="rgba(99,179,237,0.55)" strokeWidth="1.2"
      filter="url(#neonGlow)" />

    {/* ── Body / Hoodie ── */}
    {/* torso */}
    <path
      d="M88 168 Q88 160 92 156 L120 150 L148 156 Q152 160 152 168 L154 210 L86 210 Z"
      fill="url(#hoodieGrad)"
      stroke="rgba(99,179,237,0.22)" strokeWidth="0.8"
    />
    {/* hoodie front pocket */}
    <path d="M107 185 Q120 182 133 185 L135 210 L105 210 Z"
      fill="rgba(99,179,237,0.06)" stroke="rgba(99,179,237,0.18)" strokeWidth="0.7" />
    {/* left arm */}
    <path
      d="M88 162 Q76 168 68 180 Q64 188 68 196 L80 196 Q78 190 82 185 Q88 175 92 170 Z"
      fill="url(#hoodieGrad)"
      stroke="rgba(99,179,237,0.18)" strokeWidth="0.7"
    />
    {/* left hand on keyboard */}
    <ellipse cx="70" cy="197" rx="8" ry="5" fill="#c4a882" stroke="rgba(99,179,237,0.15)" strokeWidth="0.6" />
    {/* right arm */}
    <path
      d="M152 162 Q164 168 172 180 Q176 188 172 196 L160 196 Q162 190 158 185 Q152 175 148 170 Z"
      fill="url(#hoodieGrad)"
      stroke="rgba(99,179,237,0.18)" strokeWidth="0.7"
    />
    {/* right hand on keyboard */}
    <ellipse cx="170" cy="197" rx="8" ry="5" fill="#c4a882" stroke="rgba(99,179,237,0.15)" strokeWidth="0.6" />

    {/* ── Neck ── */}
    <rect x="113" y="138" width="14" height="14" rx="5" fill="#c4a882" />

    {/* ── Head ── */}
    <ellipse cx="120" cy="122" rx="24" ry="26"
      fill="#d4b896"
      stroke="rgba(99,179,237,0.18)" strokeWidth="0.7" />
    {/* face shadow / depth */}
    <ellipse cx="120" cy="126" rx="18" ry="16" fill="rgba(0,0,0,0.08)" />

    {/* ── Hair ── */}
    <path d="M97 112 Q100 92 120 90 Q140 90 143 112 Q136 104 120 105 Q104 104 97 112 Z"
      fill="#1a1008" />
    {/* side hair */}
    <path d="M97 112 Q94 118 96 124 Q94 116 97 112 Z" fill="#1a1008" />
    <path d="M143 112 Q146 118 144 124 Q146 116 143 112 Z" fill="#1a1008" />

    {/* ── Glasses ── */}
    {/* left lens */}
    <rect x="104" y="118" width="13" height="9" rx="4"
      fill="rgba(99,179,237,0.12)"
      stroke="rgba(99,179,237,0.65)" strokeWidth="1"
      filter="url(#subtleGlow)" />
    {/* right lens */}
    <rect x="123" y="118" width="13" height="9" rx="4"
      fill="rgba(99,179,237,0.12)"
      stroke="rgba(99,179,237,0.65)" strokeWidth="1"
      filter="url(#subtleGlow)" />
    {/* bridge */}
    <line x1="117" y1="122" x2="123" y2="122"
      stroke="rgba(99,179,237,0.65)" strokeWidth="1" />
    {/* glass glare */}
    <line x1="106" y1="120" x2="110" y2="120"
      stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" strokeLinecap="round" />
    <line x1="125" y1="120" x2="129" y2="120"
      stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" strokeLinecap="round" />

    {/* ── Face features ── */}
    {/* nose */}
    <path d="M118 128 Q120 132 122 128" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
    {/* subtle smile */}
    <path d="M114 136 Q120 140 126 136"
      fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="1" strokeLinecap="round" />

    {/* ── Neon ear accent ── */}
    <circle cx="96" cy="124" r="2.5" fill="rgba(99,179,237,0.6)" filter="url(#neonGlow)" />
    <circle cx="144" cy="124" r="2.5" fill="rgba(99,179,237,0.6)" filter="url(#neonGlow)" />

    {/* ── Floating code snippet (decorative) ── */}
    <g opacity="0.72" filter="url(#subtleGlow)">
      <rect x="4" y="60" width="52" height="34" rx="6"
        fill="rgba(13,24,44,0.82)" stroke="rgba(99,179,237,0.3)" strokeWidth="0.7" />
      <rect x="10" y="68" width="26" height="2.5" rx="1.2" fill="rgba(99,179,237,0.7)" />
      <rect x="10" y="74" width="36" height="2.5" rx="1.2" fill="rgba(128,90,213,0.6)" />
      <rect x="10" y="80" width="20" height="2.5" rx="1.2" fill="rgba(99,179,237,0.4)" />
    </g>
    <g opacity="0.65" filter="url(#subtleGlow)">
      <rect x="184" y="72" width="48" height="28" rx="6"
        fill="rgba(13,24,44,0.82)" stroke="rgba(128,90,213,0.35)" strokeWidth="0.7" />
      <rect x="190" y="80" width="22" height="2.5" rx="1.2" fill="rgba(128,90,213,0.7)" />
      <rect x="190" y="86" width="32" height="2.5" rx="1.2" fill="rgba(99,179,237,0.5)" />
    </g>

    {/* ── Subtle ground shadow ── */}
    <ellipse cx="120" cy="218" rx="70" ry="6" fill="rgba(0,0,0,0.35)" />
  </svg>
);

const ContactMe = () => {
  const headingRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    headingRef.current && observer.observe(headingRef.current);
    leftRef.current && observer.observe(leftRef.current);
    rightRef.current && observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-main-div" id="contact-section">
      <div className="one">
        <h1 ref={headingRef} className="contact-title">
          Get in Touch
        </h1>
      </div>

      <p className="firstpara">
        Have a project, idea, or opportunity you'd like to work on together? I'd
        love to hear from you. Drop a message and let's build something
        meaningful.
      </p>

      <div className="divs">
        {/* ──────── LEFT : Hero orbit ──────── */}
        <div ref={leftRef} className="left-contact-div slide-left">
          <div className="hero-container">
            <div className="orbit-wrapper">

              {/* Dotted circular path — SVG element for precision */}
              <svg className="orbit-ring" viewBox="0 0 320 320">
                <circle cx="160" cy="160" r="158" />
              </svg>

              {/* Developer illustration (inline SVG) */}
              <div className="character-container">
                <DeveloperSVG />
              </div>

              {/* Social icon nodes */}
              <div className="social-orbit">

                {/* Instagram — top */}
                <a
                  href="https://www.instagram.com/chiragsethii_"
                  target="_blank"
                  rel="noreferrer"
                  className="orbit-icon"
                  style={{ "--angle": "0deg" }}
                  aria-label="Instagram"
                >
                  <div className="icon-node">
                    <FaInstagram className="orbit-icon-svg" />
                  </div>
                </a>

                {/* Gmail — right */}
                <a
                  href="mailto:contact.chiragsethi@gmail.com"
                  className="orbit-icon"
                  style={{ "--angle": "90deg" }}
                  aria-label="Gmail"
                >
                  <div className="icon-node">
                    <SiGmail className="orbit-icon-svg" />
                  </div>
                </a>

                {/* LinkedIn — bottom */}
                <a
                  href="https://www.linkedin.com/in/chirag-sethi-42216527b/"
                  target="_blank"
                  rel="noreferrer"
                  className="orbit-icon"
                  style={{ "--angle": "180deg" }}
                  aria-label="LinkedIn"
                >
                  <div className="icon-node">
                    <FaLinkedinIn className="orbit-icon-svg" />
                  </div>
                </a>

                {/* GitHub — left */}
                <a
                  href="https://github.com/chiragsethi12"
                  target="_blank"
                  rel="noreferrer"
                  className="orbit-icon"
                  style={{ "--angle": "270deg" }}
                  aria-label="GitHub"
                >
                  <div className="icon-node">
                    <FaGithub className="orbit-icon-svg" />
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* ──────── RIGHT : Contact form ──────── */}
        <div ref={rightRef} className="right-contact-div slide-right">
          <section className="contact">
            <form
              className="contact-form"
              action="https://formspree.io/f/mbdjqrzr"
              method="POST"
            >
              <div className="input-box">
                <FaUser />
                <input type="text" name="name" placeholder="Your Name" required />
              </div>

              <div className="input-box">
                <FaEnvelope />
                <input type="email" name="email" placeholder="Your Email" required />
              </div>

              <div className="input-box textarea">
                <textarea name="message" placeholder="Your Message" required />
              </div>

              <button type="submit">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
