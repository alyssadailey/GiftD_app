const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// In-memory user store (replace with real DB later)
const users = [];

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ message: 'Email, password, and name are required' });
  }

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, email, name, password: hashedPassword };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, process.env.JWT_SECRET, { expiresIn: '2h' });

  res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
});

module.exports = router;