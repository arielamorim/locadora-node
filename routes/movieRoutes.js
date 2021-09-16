const express = require('express');
const moviesController = require('../controllers/moviesController');

// Initialize Router
const router = express.Router();

// Route to movie's controller
// Create
router.post('/create', moviesController.movie_create);
// List
router.get('/', moviesController.movie_list);
// Delete
router.delete('/:id', moviesController.movie_delete);
// Update
router.put('/update', moviesController.movie_update);

module.exports = router;