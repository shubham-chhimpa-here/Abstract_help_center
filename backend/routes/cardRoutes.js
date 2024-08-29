const express = require('express');
const router = express.Router();
const Card = require('../models/card');

// POST /cards - Create a new card
router.post('/', async (req, res) => {
    try {
        const { title, description, link } = req.body;
        const newCard = new Card({ title, description, link });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /cards - Retrieve all cards
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find({});
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /cards/:title - Retrieve specific card by title
router.get('/search', async (req, res) => {
    try {
        const {searchString} = req.query;

        const words = searchString.toLowerCase().split(' ').filter(word => word.trim() !== '');

        // MongoDB $and operator with $regex to match all words in the title
        const query = {
            $and: words.map(word => ({
                title: { $regex: word, $options: 'i' }
            }))
        };

        const results = await Card.find(query);

        if (results.length === 0) {
            return res.status(404).json({ message: 'No matching cards found', cards: [] });
        }

        
        res.status(200).json({cards: results});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
