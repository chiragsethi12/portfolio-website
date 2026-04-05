import React, { useEffect, useRef } from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import "./ContactMe.css";

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
        {/* LEFT */}
        <div ref={leftRef} className="left-contact-div slide-left">
          <div className="connect-card">
            <a
              className="social-card linkedin"
              href="https://www.linkedin.com/in/chirag-sethi-42216527b/"
              target="_blank"
            >
              <div className="icon">
                <FaLinkedinIn />
              </div>
              <div>
                <h3>Let's Connect</h3>
                <p>on LinkedIn</p>
              </div>
            </a>

            <a
              className="social-card instagram"
              href="https://www.instagram.com/chiragsethii_"
              target="_blank"
            >
              <div className="icon">
                <FaInstagram />
              </div>
              <div>
                <h3>Instagram</h3>
                <p>@chiragsethii_</p>
              </div>
            </a>

            <a
              className="social-card github"
              href="https://github.com/chiragsethi12"
              target="_blank"
            >
              <div className="icon">
                <FaGithub />
              </div>
              <div>
                <h3>Github</h3>
                <p>chiragsethi12</p>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div ref={rightRef} className="right-contact-div slide-right">
          <section className="contact">
            <form
              className="contact-form"
              action="https://formspree.io/f/mbdjqrzr"
              method="POST"
            >
              <div className="input-box">
                <FaUser />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="input-box">
                <FaEnvelope />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
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
