import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Eventi.css";

import bgImage from "../components/pexels-cottonbro-10506366.jpg";

const Eventi = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page-container">
      <nav className="navbar">
        <div className="logo">COAFF</div>

        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
          <li><Link to="/ChiSiamo" onClick={closeMenu}>CHI SIAMO</Link></li>
          <li><Link to="/Eventi" onClick={closeMenu}>EVENTI</Link></li>
          <li><Link to="/Festival" onClick={closeMenu}>FESTIVAL</Link></li>
          <li><Link to="/Tickets" onClick={closeMenu}>BIGLIETTI</Link></li>
          <li><Link to="/Contatti" onClick={closeMenu}>CONTATTI</Link></li>
        </ul>
      </nav>

      <div className="hero-content" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="title-group">
          <h1 className="main-title">EVENTI</h1>
        </div>
      </div>

      <main className="content eventi-content">
        <div className="evento-section" style={{ marginTop: "60px" }}>
          <div className="evento-circle">
            <span>EVENTO<br />1</span>
          </div>
          <div className="evento-poster">
            <img src="/locandina-evento-1.png" alt="Evento 1" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Eventi;