// Contatti.js
import React from 'react';
import './Contatti.css';

const Contatti = () => {
  return (
    <div className="contatti-page">
      <header className="header">
        <nav>
          <a href="/" className="">HOME</a>
          <a href="/" className="">CHI SIAMO</a>
          <a href="/" className="">EVENTI</a>
          <a href="/" className="">FESTIVAL</a>
          <a href="/biglietti" className="">BIGLIETTI</a>
          <a href="/contatti" className="active">CONTATTI</a>
        </nav>
      </header>

      <section className="hero">
        <h1>CONTATTI</h1>
      </section>

      <section className="contact-info">
        <ul>
          <li><i className="fab fa-letterboxd"></i> Letterboxd: <a href="https://letterboxd.com/" target="_blank" rel="noopener noreferrer">Visita</a></li>
          <li><i className="fab fa-instagram"></i> Instagram: <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">@coafilmfestival</a></li>
          <li><i className="fab fa-spotify"></i> Spotify: <a href="https://spotify.com/" target="_blank" rel="noopener noreferrer">Playlist</a></li>
          <li><i className="fab fa-tiktok"></i> TikTok: <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">@coafestival</a></li>
          <li><i className="fas fa-envelope"></i> Email: <a href="mailto:coafilmfestival@gmail.com">coafilmfestival@gmail.com</a></li>
          <li><i className="fas fa-phone"></i> Telefono: <a href="tel:+393924458617">+39 392 445 8617</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Contatti;
