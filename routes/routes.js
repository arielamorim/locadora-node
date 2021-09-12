const express = require('express');
const moviesController = require('../controllers/moviesController');

// Initialize Router
const router = express.Router();

// Route to controllers
router.post('/create', moviesController.movie_create);
router.get('/', moviesController.movie_list);

module.exports = router;