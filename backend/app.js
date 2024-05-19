const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(bodyParser.json());

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Hello World Route
app.get('/', (req, res) => {
    res.send('Hello World !');
});

// Define a protected route
app.get('/api/protected', (req, res) => {
    res.send('This is a protected route');
});

module.exports = app;
