const { getDBConnection } = require('../config/db');

const getAllIndustries = async (req, res) => {
  try {
    const pool = await getDBConnection();
    const [rows] = await pool.query('SELECT * FROM industries');
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error('Error fetching industries:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

module.exports = { getAllIndustries };
