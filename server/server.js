const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();

// Middleware setup 
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});

app.use(express.static(path.join(__dirname, '..')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'FindMyULogo.png'))
})

// // Import routes 
// const apiRoutes = require('./routes/api');
// const authRoutes = require('./routes/auth');

// // Use Routes 
// app.use('/api', apiRoutes);
// app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));