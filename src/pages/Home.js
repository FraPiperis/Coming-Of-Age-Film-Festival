import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Coming of Age Film Festival</h1>
      <p>Benvenuto al sito ufficiale del festival!</p>
      <Link to="/tickets">
        <button>Biglietti</button>
      </Link>
    </div>
  );
};

export default Home;
