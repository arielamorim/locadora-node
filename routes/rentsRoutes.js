const express = require('express');
const rentsController = require('../controllers/rentsController');

// Initialize Router
const router = express.Router();
console.log('rents Routes!!!');
// Route to rent's controller
router.post('/create', rentsController.rent_create);
router.get('/', rentsController.rent_list);
router.delete('/:id', rentsController.rent_delete);
router.put('/update', rentsController.rent_update);

module.exports = router;