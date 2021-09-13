const express = require('express');
const moviesController = require('../controllers/moviesController');

// Initialize Router
const router = express.Router();

// Route to movie's controller
router.post('/create', moviesController.movie_create);
router.get('/', moviesController.movie_list);
router.delete('/:id', moviesController.movie_delete);
router.put('/update', moviesController.movie_update);

module.exports = router;