import React from "react";
import gsap from "gsap";
import { RxGithubLogo } from "react-icons/rx";
import { useLayoutEffect, useRef, useEffect } from "react";
import Typed from "typed.js";
import { IoLogoLinkedin } from "react-icons/io5";
import developerImage from "../../assets/developer_img.png";
import "./Home.css";
const Home = () => {
  const textRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "Computer Science Engineering Student",
        "Developer with passion for building",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => {
      typed.destroy();
    };
  }, []);
  useLayoutEffect(() => {
    // CLEAR any previous transforms
    gsap.set(".leftBox", { x: "-100%", opacity: 0 });
    gsap.set(".rightBox", { x: "100%", opacity: 0 });

    const tl = gsap.timeline();

    tl.to(".leftBox", {
      x: "0%",
      opacity: 1,
      duration: 2,
      ease: "power3.out",
    }).to(
      ".rightBox",
      {
        x: "0%",
        opacity: 1,
        duration: 3,
        ease: "power3.out",
      },
      "-=0.8"
    );

    return () => {
      tl.kill(); // cleanup
    };
  }, []);

  return (
    <>
      <div className="main-div" id="home-section">
        <div className="leftBox">
          <div className="heading">
            <h2 id="full">Full Stack</h2>
            <div className="waviy">
              <span style={{ ["--i"]: "1" }}>D</span>
              <span style={{ ["--i"]: "2" }}>E</span>
              <span style={{ ["--i"]: "3" }}>V</span>
              <span style={{ ["--i"]: "4" }}>E</span>
              <span style={{ ["--i"]: "5" }}>L</span>
              <span style={{ ["--i"]: "6" }}>0</span>
              <span style={{ ["--i"]: "7" }}>P</span>
              <span style={{ ["--i"]: "8" }}>E</span>
              <span style={{ ["--i"]: "9" }}>R</span>
            </div>
          </div>
          <div className="heroText">
            <span className="typewrap">
              <span ref={textRef}></span>
            </span>
          </div>
          <p>Engineering smooth, scalable, and impactful web experiences.</p>
          <div className="skils-div">
            <p>React</p>
            <p>Javascript</p>
            <p>NodeJs</p>
            <p>MySQL</p>
          </div>
          <div className="btn-div">
            <button>
              <a
                href="#projects-section"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects-section")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </a>
            </button>
            <button>
              <a
                href="#contact-section"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact-section")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </a>
            </button>
          </div>
          <div className="links">
            <a href="https://www.linkedin.com/in/chirag-sethi-42216527b/">
              <IoLogoLinkedin />
            </a>
            <a href="https://github.com/chiragsethi12">
              <RxGithubLogo />
            </a>
          </div>
        </div>
        <div className="rightBox">
          <img src={developerImage} alt="Developer Image" />
        </div>
      </div>
    </>
  );
};

export default Home;
