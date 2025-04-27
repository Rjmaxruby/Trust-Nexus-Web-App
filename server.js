const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { getDBConnection } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const contentRoutes = require('./routes/contentRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const industriesRoutes = require('./routes/industriesRoutes');
const careersRoutes = require('./routes/careersRoutes');
const regionsRoutes = require('./routes/regionsRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/industries', industriesRoutes);
app.use('/api/careers', careersRoutes);
app.use('/api/regions', regionsRoutes);


app.get('/test-db', async (req, res) => {
  try {
    const pool = await getDBConnection();
    const [rows] = await pool.query('SELECT 1 AS test');
    res.json(rows);
  } catch (err) {
    console.error('Database error:', err); 
    res.status(500).json({ error: 'Database query failed', details: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Trust Nexus Backend is up and running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
