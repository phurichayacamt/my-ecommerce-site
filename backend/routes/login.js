const express = require('express');
const fs      = require('fs');
const path    = require('path');
const router  = express.Router();

const dataPath = path.join(__dirname, '..', 'data', 'user.json');

router.post('/', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Fill in your username and password.' });
  }

  let users = [];
  try {
    users = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  } catch (err) {
    return res.status(500).json({ error: 'Unable to read user database.' });
  }

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Username or password is incorrect.' });
  }

  res.json({ message: 'Login successful' });
});

module.exports = router;

