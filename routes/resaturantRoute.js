const express = require('express');
const router = express.Router();

const {
  createRestaurantController,
  getAllRestaurantsController,
  updateRestaurantController,
  deleteRestaurantController
} = require('../controllers/restaurantController');

// Créer un restaurant
router.post('/', createRestaurantController);

// Obtenir tous les restaurants
router.get('/', getAllRestaurantsController);

// Mettre à jour un restaurant par ID
router.put('/:id', updateRestaurantController);

// Supprimer un restaurant par ID
router.delete('/:id', deleteRestaurantController);

module.exports = router;
