require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cardRoutes = require('./routes/cardRoutes');
const cors = require('cors');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000;
const dirname = path.resolve();

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.static(path.join(dirname, "/client/dist")))

// Routes
app.use('/cards', cardRoutes);

// Ping endpoint
app.get('/ping', (req, res) => {
    res.send('Server is running');
});

app.get("*", (req, res) => {
    res.sendFile(path.join(dirname, "client", "dist", "index.html"))
})

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
