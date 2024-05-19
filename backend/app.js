const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/authMiddleware'); // Correct import

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Hello World Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Protected Route
app.get('/api/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route');
});

module.exports = app;
