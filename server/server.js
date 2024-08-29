const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Middleware setup 
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// // Import routes 
// const apiRoutes = require('./routes/api');
// const authRoutes = require('./routes/auth');

// // Use Routes 
// app.use('/api', apiRoutes);
// app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));