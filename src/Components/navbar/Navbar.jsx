import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../../public/logop.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container container">
        <div className="logo-wrapper">
          <a href="/" className="logo-link">
            {" "}
            {/* Link dene se logo par click karne par home page par jayega */}
            <img src={logo} alt="Nageshwar Prajapati" className="site-logo" />
          </a>
          <div className="logo">
            <span className="logo-main">N</span>
            <span className="logo-sub">P</span>
            <div className="logo-dot-container">
              <span className="logo-dot"></span>
              <span className="logo-dot-pulse"></span>
            </div>

          </div>
        </div>

        <ul className="nav-menu">
          <li>
            <a href="#projects" className="nav-link">
              Project
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="nav-cta-premium">
            <span>Hire Me</span>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M1 12L12 1M12 1H3.5M12 1V9.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
