require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const connectDb = require('./db');
const connectionString = process.env.MONGO_URL;
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

const routes = require('./routes/index');
app.use(routes)

app.use(morgan('dev'));



const authentication = require('./middleware/authentication');

app.get('/private', authentication, (_req, res) => {
    return res.status(200).json({ message: 'Private Route' });
})


// Global Error Handler
app.use((err, _req, res, next) => {
    console.log(err);

    const message = err.message ? err.message : 'Server Error Occurred';
    const status = err.status ? err.status : 500;

    res.status(status).json({ message });
})

// Connect to DB
connectDb(connectionString)
    .then(() => { console.log('connected to db') })
    .catch((err) => { console.log(err) });

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


