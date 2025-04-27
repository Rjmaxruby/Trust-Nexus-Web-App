const { getDBConnection } = require('../config/db');

const getAllCareers = async (req, res) => {
  try {
    const pool = await getDBConnection();
    const [rows] = await pool.query('SELECT * FROM careers WHERE is_open = true ORDER BY created_at DESC');
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error('Error fetching careers:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

module.exports = { getAllCareers };
