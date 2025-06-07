import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Tickets = () => { 
  const [user, setUser] = useState({ nome: '', cognome: '', email: '', cellulare: '' });
  const [registeredUser, setRegisteredUser] = useState(null);
  const [cart, setCart] = useState([]);

  const tickets = [
    { tipo: "Giorno 1", prezzo: 10 },
    { tipo: "Giorno 2", prezzo: 10 },
    { tipo: "Giorno 3", prezzo: 10 },
    { tipo: "Giorno 4", prezzo: 10 },
  ];

  const accrediti = [
    { tipo: "Singolo film", prezzo: 5 },
    { tipo: "2 Proiezioni", prezzo: 8 },
    { tipo: "10 Proiezioni", prezzo: 20 },
  ];

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', user);
      setRegisteredUser(res.data);
      alert('Registrazione completata');
    } catch (error) {
      alert('Errore registrazione');
    }
  };

  const addToCart = (item) => {
    if (!registeredUser) {
      alert('Per favore, registrati prima di aggiungere biglietti');
      return;
    }

    setCart([...cart, { ...item, quantità: 1 }]);
  };

  const handleSendOrder = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/orders/create', {
        userId: registeredUser._id,
        biglietti: cart,
      });
      alert('Ordine ricevuto nel backend');
      setCart([]);
    } catch (error) {
      alert('Errore invio ordine');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
    <Link to="/">← Torna alla Home</Link>
      <h2>Registrazione Utente</h2>
      <input placeholder="Nome" onChange={(e) => setUser({ ...user, nome: e.target.value })} />
      <input placeholder="Cognome" onChange={(e) => setUser({ ...user, cognome: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input placeholder="Cellulare" onChange={(e) => setUser({ ...user, cellulare: e.target.value })} />
      <button onClick={handleRegister}>Invia Registrazione</button>

      <h2>Biglietti Giornalieri</h2>
      {tickets.map((t, i) => (
        <div key={i}>
          {t.tipo} - €{t.prezzo}
          <button onClick={() => addToCart(t)}>Aggiungi</button>
        </div>
      ))}

      <h2>Accrediti</h2>
      {accrediti.map((a, i) => (
        <div key={i}>
          {a.tipo} - €{a.prezzo}
          <button onClick={() => addToCart(a)}>Aggiungi</button>
        </div>
      ))}

      <h2>Carrello</h2>
      {cart.length === 0 ? (
        <p>Carrello vuoto</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>{item.tipo} - €{item.prezzo}</li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <button onClick={handleSendOrder}>Invia Ordine</button>
      )}
    </div>
  );
};

export default Tickets;
