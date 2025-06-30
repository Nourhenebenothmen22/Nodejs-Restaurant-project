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

// Contrôleur pour mettre à jour un utilisateur
const UpdateUserController = async (req, res) => {
  try {
    const userId = req.params.id; // Récupère l'id depuis les paramètres de l'URL
    const updateData = req.body;  // Récupère les données depuis le body

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error on update user API"
    });
  }
};
// Supprimer un utilisateur
const deleteUserController = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully"
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting user"
    });
  }
};


// Export
module.exports = {
  getUserController,
  UpdateUserController,
  deleteUserController
};
