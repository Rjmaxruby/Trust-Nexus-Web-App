const { getDBConnection } = require('../config/db');

const getAllContent = async (req,res)=>{
    try {
        const pool = await getDBConnection();
        const [rows] = await pool.query('select * from content order by created_at desc')
        res.json({success:true,data:rows});
    } catch (error) {
        console.error("Error fetching all content:",error)
        res.status(500).json({success:false,error:"Internal Server Error"})
    }

}

const getContentByType = async (req,res)=>{
    try {
        const { type } = req.params;
        const allowedTypes = ['blog', 'insight', 'education', 'tech'];
        
        if(!allowedTypes.includes(type)){
            return res.status(400).json({ success: false, error: 'Invalid content type' });
        }
        const pool = await getDBConnection();
        const [rows] = await pool.query('SELECT * FROM content WHERE type = ? ORDER BY created_at DESC', [type]);
        res.json({ success: true, data: rows });
        
    } catch (error) {
        console.error('Error fetching content by type:', err);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
}



module.exports = { getAllContent, getContentByType };