const fs = require('fs');
const path = require('path');
const usersFile = path.join(__dirname, '../data/users.json');

exports.registerUser = (req, res) => {
  const { name, surname, email, phone } = req.body;

  if (!name || !surname || !email || !phone) {
    return res.status(400).json({ message: 'Tutti i campi sono obbligatori.' });
  }

  let users = [];
  if (fs.existsSync(usersFile)) {
    users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
  }

  const newUser = { name, surname, email, phone };
  users.push(newUser);
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
  res.status(201).json({ message: 'Utente registrato con successo', user: newUser });
};
