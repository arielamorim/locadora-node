const express = require('express');

// Initialize Router
const router = express.Router();
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const rentRoutes = require('./rentRoutes');

// Login
router.use('/users', userRoutes);

// Movies
router.use('/movies', movieRoutes);

// Rents
router.use('/rents', rentRoutes);

module.exports = router;