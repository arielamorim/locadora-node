const express = require('express');
const userController = require('../controllers/userController');

// Initialize Router
const router = express.Router();
// List
router.get('/', userController.user_list);
// Create 
router.post('/create', userController.user_create);
// Login
router.post('/login', userController.user_login);
module.exports = router;