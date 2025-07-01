const Restaurant = require('../models/restaurantModel');

const createRestaurantController = async (req, res) => {
  const {
    title,
    imageUrl,
    foods,
    time,
    pickup,
    delivery,
    isOpen,
    logoUrl,
    rating,
    coords,
  } = req.body;

  // Validation
  if (!title || !coords) {
    return res.status(400).send({
      success: false,
      message: "Veuillez fournir le titre et les coordonnées.",
    });
  }

  try {
    const newRestaurant = new Restaurant({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      coords,
    });

    await newRestaurant.save();

    res.status(201).send({
      success: true,
      message: "Restaurant créé avec succès.",
      data: newRestaurant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erreur lors de la création du restaurant.",
      error,
    });
  }
};

// Obtenir tous les restaurants
const getAllRestaurantsController = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json({ success: true, restaurants });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erreur lors de la récupération des restaurants", error });
  }
};
// Mettre à jour un restaurant par ID
const updateRestaurantController = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Restaurant.findByIdAndUpdate(id, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ success: false, message: "Restaurant non trouvé" });
    }

    res.status(200).json({ success: true, restaurant: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erreur lors de la mise à jour", error });
  }
};
// Supprimer un restaurant par ID
const deleteRestaurantController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Restaurant.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Restaurant non trouvé" });
    }

    res.status(200).json({ success: true, message: "Restaurant supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erreur lors de la suppression", error });
  }
};
module.exports = {
  createRestaurantController,
  getAllRestaurantsController,
  updateRestaurantController,
  deleteRestaurantController
};
