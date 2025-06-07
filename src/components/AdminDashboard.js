import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch utenti
    fetch('http://localhost:3001/admin/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(console.error);

    // Fetch ordini
    fetch('http://localhost:3001/admin/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Utenti Registrati</h2>
      {/* tabella utenti */}
      <table>
        <thead>
          <tr><th>Nome</th><th>Cognome</th><th>Email</th><th>Cellulare</th></tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.nome}</td>
              <td>{u.cognome}</td>
              <td>{u.email}</td>
              <td>{u.cellulare}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Ordini Effettuati</h2>
      {/* tabella ordini */}
      <table>
        <thead>
          <tr><th>Utente</th><th>Biglietti</th><th>Data</th></tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o._id}>
              <td>{o.user ? `${o.user.nome} (${o.user.email})` : 'Utente sconosciuto'}</td>
              <td>
                <ul>
                  {o.biglietti.map((b, i) => (
                    <li key={i}>{b.tipo} - {b.quantità} pezzi - €{b.prezzo}</li>
                  ))}
                </ul>
              </td>
              <td>{new Date(o.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
