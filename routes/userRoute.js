const express = require('express');
const { getUserController } = require('../controllers/userController');
const requireSignIn = require('../middleware/authMiddleware');

const router = express.Router();

// Route protégée nécessitant une authentification
router.get('/user',requireSignIn, getUserController);

module.exports = router;