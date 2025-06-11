import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contatti.css';

const Contatti = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page-container">
      <nav className="navbar">
        <div className="logo">COAFF</div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
          <li><Link to="/ChiSiamo" onClick={closeMenu}>CHI SIAMO</Link></li>
          <li><Link to="/Eventi" onClick={closeMenu}>EVENTI</Link></li>
          <li><Link to="/Festival" onClick={closeMenu}>FESTIVAL</Link></li>
          <li><Link to="/Tickets" onClick={closeMenu}>BIGLIETTI</Link></li>
          <li><Link to="/Contatti" onClick={closeMenu}>CONTATTI</Link></li>
        </ul>
      </nav>

      <div className="hero-content">
        <div className="title-group">
          <h1 className="main-title">CONTATTI</h1>
        </div>
      </div>

      <main className="content contact-info">
        <ul>
          <li>
            <i className="fab fa-letterboxd"></i> Letterboxd:{' '}
            <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer">
              Visita
            </a>
          </li>
          <li>
            <i className="fab fa-instagram"></i> Instagram:{' '}
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              @coafilmfestival
            </a>
          </li>
          <li>
            <i className="fab fa-spotify"></i> Spotify:{' '}
            <a href="https://spotify.com/" target="_blank" rel="noopener noreferrer">
              Playlist
            </a>
          </li>
          <li>
            <i className="fab fa-tiktok"></i> TikTok:{' '}
            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
              @coafestival
            </a>
          </li>
          <li>
            <i className="fas fa-envelope"></i> Email:{' '}
            <a href="mailto:coafilmfestival@gmail.com">coafilmfestival@gmail.com</a>
          </li>
          <li>
            <i className="fas fa-phone"></i> Telefono:{' '}
            <a href="tel:+393924458617">+39 392 445 8617</a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Contatti;
