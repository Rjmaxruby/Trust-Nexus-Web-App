const { getDBConnection } = require('../config/db');

const getAllRegions = async (req, res) => {
  try {
    const pool = await getDBConnection();
    const [rows] = await pool.query('SELECT * FROM regions');
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error('Error fetching regions:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

module.exports = { getAllRegions };
