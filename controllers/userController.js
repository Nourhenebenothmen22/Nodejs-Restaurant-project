const userModel = require('../models/userModel');

// Contrôleur pour récupérer tous les utilisateurs
const getUserController = async (req, res) => {
  try {
    const users = await userModel.find(); // Récupère tous les utilisateurs
    return res.status(200).json({
      success: true,
      message: "List of all users",
      users: users
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error while fetching users"
    });
  }
};

// Export
module.exports = {
  getUserController
};
