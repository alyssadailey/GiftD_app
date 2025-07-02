require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
// const giftRoutes = require('./routes/gifts');
// const aiRoutes = require('./routes/ai');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/gifts', giftRoutes);
// app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => res.send('GiftD Backend Running'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));