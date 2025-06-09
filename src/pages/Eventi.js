import React from "react";
import "./Eventi.css";
import { Link } from "react-router-dom";

// ✅ Importa le immagini con percorsi corretti
import bgImage from "../components/pexels-cottonbro-10506366.jpg";
import eventoImg from "../components/pexels-cottonbro-10506366.jpg"; // Puoi usare un'altra immagine se serve

const Eventi = () => {
  return (
    <div className="eventi-page">
      {/* HEADER */}
      <header className="header">
        <nav className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/chi-siamo">CHI SIAMO</Link>
          <Link to="/eventi">EVENTI</Link>
          <Link to="/festival">FESTIVAL</Link>
          <Link to="/tickets">BIGLIETTI</Link>
          <Link to="/contatti">CONTATTI</Link>
        </nav>
      </header>

      {/* HERO */}
      <div
        className="eventi-hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="eventi-title">EVENTI</h1>
      </div>

      {/* CONTENUTO */}
      <div className="eventi-content">
        <div className="evento-box">
          <div className="evento-numero">
            <h2>EVENTO 1</h2>
          </div>
          <div className="evento-dettagli">
            <img src={eventoImg} alt="Evento 1" />
            <p>
              Un evento speciale che celebra il cinema indipendente e le storie
              di formazione. Vieni a scoprire i talenti emergenti del panorama
              cinematografico internazionale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventi;
