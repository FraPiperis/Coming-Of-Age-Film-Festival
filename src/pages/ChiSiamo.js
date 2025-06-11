import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ChiSiamo.css';

const ChiSiamo = () => {
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
          <h1 className="main-title">CHI SIAMO</h1>
          {/* Se vuoi, puoi aggiungere un sottotitolo qui, altrimenti si può rimuovere */}
        </div>
      </div>

      <main className="content">
        <section className="about-section">
          <p>
            Il Coming of Age Film Festival nasce con l’intento di celebrare il cinema di formazione in tutte le sue sfumature. 
            La nostra missione è dare spazio a nuove voci del panorama cinematografico e promuovere un dialogo autentico 
            tra generazioni attraverso il potere del racconto audiovisivo.
          </p>
          <p>
            Il festival è organizzato da un team di appassionati di cinema, educatori e creativi che credono nella forza delle storie 
            per crescere, comprendere e connettersi. Offriamo proiezioni, incontri con autori, workshop e momenti di confronto 
            per un pubblico eterogeneo e curioso.
          </p>
          <p>
            Unisciti a noi per vivere un'esperienza culturale unica, dove ogni film è un viaggio e ogni spettatore un protagonista.
          </p>
        </section>
      </main>
    </div>
  );
};

export default ChiSiamo;
