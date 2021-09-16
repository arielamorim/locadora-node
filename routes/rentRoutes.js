const express = require('express');
const rentsController = require('../controllers/rentsController');

// Initialize Router
const router = express.Router();

// Route to rent's controller
router.post('/create', rentsController.rentCreate);
// List
router.get('/', rentsController.rentList);
// Delete
router.delete('/:id', rentsController.rentDelete);
// Update
router.put('/update', rentsController.rentUpdate);
// This will set the final price and close the rent
router.put('/rentEnd', rentsController.rentEnd);

module.exports = router;