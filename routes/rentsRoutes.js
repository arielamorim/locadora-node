const express = require('express');
const rentsController = require('../controllers/rentsController');

// Initialize Router
const router = express.Router();

// Route to rent's controller
router.post('/create', rentsController.rent_create);
// List
router.get('/', rentsController.rent_list);
// Delete
router.delete('/:id', rentsController.rent_delete);
// Update
router.put('/update', rentsController.rent_update);
// This will return the final price and close the rent
router.put('/returnMovies', rentsController.rent_return_movies);

module.exports = router;