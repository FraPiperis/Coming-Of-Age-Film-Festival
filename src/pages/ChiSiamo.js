import React from 'react';
import { Link } from 'react-router-dom';
import './ChiSiamo.css';

const ChiSiamo = () => {
  return (
    <div className="page-container">
      <nav className="navbar">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/chi-siamo">CHI SIAMO</Link></li>
          <li><Link to="/eventi">EVENTI</Link></li>
          <li><Link to="/festival">FESTIVAL</Link></li>
          <li><Link to="/tickets">BIGLIETTI</Link></li>
          <li><Link to="/contatti">CONTATTI</Link></li>
        </ul>
      </nav>

      <div className="hero-content">
        <h1>CHI SIAMO</h1>
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
