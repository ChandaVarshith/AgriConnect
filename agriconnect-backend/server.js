const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// GET /
app.get('/', (req, res) => {
  res.json({ message: 'AgriConnect basic backend running' });
});

// POST /api/login
app.post('/api/login', (req, res) => {
  const { role, email, password } = req.body;

  res.json({
    success: true,
    message: 'Dummy login successful',
    role: role
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});
