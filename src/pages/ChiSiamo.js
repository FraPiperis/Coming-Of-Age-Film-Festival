import React from 'react';
import { Link } from 'react-router-dom';
import './ChiSiamo.css';

const ChiSiamo = () => {
  return (
    <div className="ChiSiamo-page">
      <header className="ChiSiamo-header">
        <nav className="nav-links">
        <Link to="/">HOME</Link>
          <Link to="/ChiSiamo">CHI SIAMO</Link>
          <Link to="/Eventi">EVENTI</Link>
          <Link to="/Festival">FESTIVAL</Link>
          <Link to="/Tickets">BIGLIETTI</Link>
          <Link to="/Contatti">CONTATTI</Link>
        </nav>
        <div className="ChiSiamo-title">CHI SIAMO</div>
      </header>

      <div className="ChiSiamo-body chisiamo-body">
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
      </div>
    </div>
  );
};

export default ChiSiamo;
