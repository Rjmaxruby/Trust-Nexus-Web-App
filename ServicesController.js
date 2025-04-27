const { getDBConnection } = require('../config/db');

const getAllServices = async (req,res)=>{
    try {
        const pool = await getDBConnection();
        const [rows]= await pool.query('select * from services')
        res.json({success:true,rows})
    } catch (error) {
        console.error('Error fecthing Services',error)
        res.status(500).json({success:false,error:'Internal Server Error'})
    }
}

module.exports = {getAllServices};
