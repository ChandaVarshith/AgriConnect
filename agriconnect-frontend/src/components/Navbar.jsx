import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">AGRI</span>
          <span className="logo-highlight">CONNECT</span>
        </Link>

        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" onClick={() => setIsOpen(false)}>
              SIGNIN
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
