const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
require('dotenv').config(); 

// DB সংযোগ
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// সমস্ত পণ্য আনুন: GET /api/products (অর্থাৎ এই রাউটটি '/' হবে)
router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM products';
        const [rows] = await pool.query(query); 
        
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error while fetching products.' });
    }
});


// একটি নির্দিষ্ট পণ্য আনুন: GET /api/products/:slug
router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    try {
        const query = 'SELECT * FROM products WHERE slug = ?';
        const [rows] = await pool.query(query, [slug]); 
        
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        
        res.status(200).json(rows[0]); 
    } catch (error) {
        console.error(`Error fetching product with slug ${slug}:`, error);
        res.status(500).json({ message: 'Server error while fetching product.' });
    }
});


module.exports = router;
