const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));
// Define Routes
app.use('/api/appointment', require('./routes/api/appointment'));
app.use('/api/slots', require('./routes/api/slots'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
