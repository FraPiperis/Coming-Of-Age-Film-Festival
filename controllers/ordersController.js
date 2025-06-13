const Order = require('../models/Order');
const User = require('../models/User');

exports.createOrder = async (req, res) => {
  try {
    const { userId, biglietti } = req.body;

    if (!userId || !biglietti || !Array.isArray(biglietti) || biglietti.length === 0) {
      return res.status(400).json({ message: 'Dati ordine non validi.' });
    }

    // Verifica che l'utente esista
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Utente non trovato' });
    }

    // Crea nuovo ordine con riferimento all'utente
    const newOrder = new Order({
      user: userId,
      biglietti: biglietti.map(item => ({
        tipo: item.tipo,
        prezzo: item.prezzo,
        quantità: item.quantità || 1,
      })),
    });

    await newOrder.save();

    res.status(201).json({ message: 'Ordine salvato con successo', order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore nel salvataggio dell\'ordine', error });
  }
};
