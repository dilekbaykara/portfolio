import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className={`nav-item ${activeLink === "/" ? "active" : ""}`}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={50}
            activeClass="active"
            className="nav-link"
          >
            Home
          </Link>
        </li>
        <li className={`nav-item ${activeLink === "/about" ? "active" : ""}`}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="nav-link"
          >
            About
          </Link>
        </li>
        <li className={`nav-item ${activeLink === "/contact" ? "active" : ""}`}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            className="nav-link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
