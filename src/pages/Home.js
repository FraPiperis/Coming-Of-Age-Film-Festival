import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul>
          <li><a href="coaff-frontend\src\pages\Home">HOME</a></li>
          <li><a href="./ChiSiamo">CHI SIAMO</a></li>
          <li><a href="./Eventi">EVENTI</a></li>
          <li><a href="./Festival">FESTIVAL</a></li>
          <li><a href="./Tickets">BIGLIETTI</a></li>
          <li><a href="./Contatti">CONTATTI</a></li>
        </ul>
      </nav>
      <div className="hero-content">
        <h1>COAFF</h1>
        <h2>COMING OF AGE FILM FESTIVAL</h2>
      </div>
    </div>
  );
};

export default Home;
