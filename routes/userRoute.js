const express = require('express');
const { getUserController, UpdateUserController, deleteUserController } = require('../controllers/userController');
const requireSignIn = require('../middleware/authMiddleware');

const router = express.Router();

// Route protégée nécessitant une authentification
router.get('/users',requireSignIn, getUserController);

// Mettre à jour un utilisateur
router.put('/users/:id', UpdateUserController);

// Supprimer un utilisateur
router.delete('/users/:id',deleteUserController);

module.exports = router;