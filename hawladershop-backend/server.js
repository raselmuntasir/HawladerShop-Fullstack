// hawladershop-backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mysql = require('mysql2/promise'); 

// Product Routes ফাইলটি import করা নিশ্চিত করুন
const productRoutes = require('./routes/productRoutes');

// .env ফাইল থেকে ভ্যারিয়েবল লোড করা
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// **********************************************
// MySQL ডেটাবেস সংযোগ স্থাপন
// **********************************************
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// সংযোগ পরীক্ষা (সার্ভার স্টার্ট হওয়ার সময় রান হবে)
pool.getConnection()
    .then(connection => {
        console.log('✅ MySQL Database Connected Successfully!');
        connection.release();
    })
    .catch(err => {
        console.error('❌ MySQL Connection Failed:', err.code);
        console.error('Please check your .env credentials.');
    });

// মিডলওয়্যার
app.use(cors());
app.use(express.json());

// **********************************************
// API রাউটস সংযুক্ত করা (এই লাইনটি খুবই গুরুত্বপূর্ণ)
// **********************************************

// /api/products রুটে productRoutes ব্যবহার করা হবে
app.use('/api/products', productRoutes); 

// ডিফল্ট রাউট: http://localhost:5000/
app.get('/', (req, res) => {
    res.send('HawladerShop API is Running!');
});


// সার্ভার চালু করা
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Access at: http://localhost:${PORT}`);
});
