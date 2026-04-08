import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import "./NavBar.css";
import gsap from "gsap";

const NavBar = () => {
  const navRef = useRef();
  const mobileMenuRef = useRef();
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Desktop navbar animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".item, .name", {
        y: -120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Mobile menu animation
  useLayoutEffect(() => {
    if (open && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [open]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="Navbar-div">
        {/* ================= WAVE BACKGROUND ================= */}
        <div className="navbar-waves-bg" aria-hidden="true">
          {/* Back Layer - Darkest */}
          <svg className="nav-wave wave-1" viewBox="0 0 1440 250" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L1440,0 L1440,180 C1100,260 700,80 350,160 C150,200 50,160 0,140 Z" />
          </svg>
          {/* Middle Layer */}
          <svg className="nav-wave wave-2" viewBox="0 0 1440 250" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L1440,0 L1440,140 C1200,80 900,220 500,140 C200,80 80,140 0,180 Z" />
          </svg>
          {/* Front Layer - Lightest */}
          <svg className="nav-wave wave-3" viewBox="0 0 1440 250" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L1440,0 L1440,110 C1000,170 800,40 400,150 C150,210 50,120 0,100 Z" />
          </svg>
        </div>

        <div className="Navbar-blur">
          <nav ref={navRef}>
            <div className="name">Chirag Sethi</div>

            {/* Desktop Menu */}
            <div className="navList desktop">
              <ul>
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <li className="item" key={item}>
                    <a
                      href={`#${item.toLowerCase()}-section`}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(`${item.toLowerCase()}-section`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hamburger */}
            <div
              className={`hamburger ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>


      </div>

      {/* ================= FULLSCREEN MOBILE MENU ================= */}
      {open && (
        <div className="mobileMenu" ref={mobileMenuRef}>
          {/* ❌ Close Button */}
          <button
            className="closeBtn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}-section`}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document
                  .getElementById(`${item.toLowerCase()}-section`)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
