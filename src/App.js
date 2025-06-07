import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tickets from './pages/Tickets';
import Home from './pages/Home';
import AdminDashboard from './components/AdminDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
