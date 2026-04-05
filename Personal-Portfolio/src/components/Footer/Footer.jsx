import { FaGithub, FaLinkedinIn, FaInstagram, FaHeart } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Chirag Sethi. All rights reserved.</p>

        <div className="footer-socials">
          <a href="https://github.com/chiragsethi12" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chirag-sethi-42216527b/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com/chiragsethii_" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
