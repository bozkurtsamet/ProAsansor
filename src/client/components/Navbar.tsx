import "../css/Navbar.css";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProAsansorIcon from "../assets/ProAsansorIcon.png";

function Navbar() {
  const navigate = useNavigate();
  const showPopUp = () => {
    alert("+90 536 556 2833");
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={ProAsansorIcon} alt="ProAsansorIcon" />
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="navbar-contact">
        <a
          href="https://www.instagram.com/proasansor?stkn=eHdoZ28wdGlxODRk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://facebook.com/USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://wa.me/1XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a className="call-button" onClick={showPopUp}>
          <FaPhone />
          Call Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
