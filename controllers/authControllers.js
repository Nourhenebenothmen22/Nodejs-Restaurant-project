const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Contrôleur pour l'inscription d'un nouvel utilisateur
const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, usertype, profile } = req.body;

    // Validation des champs obligatoires
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Name, email and password are required." });
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "Email already in use." });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création d'un nouvel utilisateur
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      usertype,
      profile,
    });

    // Sauvegarde en base de données
    const savedUser = await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User has been successfully added.",
      user: savedUser,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

// Contrôleur pour la connexion de l'utilisateur
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: "Email and password are required." 
      });
    }

    // 1. Recherche UNIQUEMENT par email
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "User not found." 
      });
    }

    // 2. Comparaison du mot de passe fourni avec le hash
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid credentials." 
      });
    }
    // Création du token JWT
    const token = jwt.sign(
      { 
        userId: user._id,
        email: user.email,
        usertype: user.usertype 
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // 3. Renvoyer les données utilisateur SANS le mot de passe
    const userData = user.toObject();
    delete userData.password;

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: userData
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error in Login API.",
      error: error.message // Optionnel : utile pour le débogage
    });
  }
};
const ResetPasswordController = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    // Vérifier les champs
    if (!email || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Email and new password are required"
      });
    }

    // Rechercher l'utilisateur
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found with this email"
      });
    }

    // Hacher le nouveau mot de passe
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password has been reset successfully"
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error in password reset API.",
      error: error.message
    });
  }
};
const ForgotPasswordController=async(req,res)=>{
 try {
   

    // Chercher l'utilisateur
    const user = await User.findById({_id:req.body.id});
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User  not exist",
      });
    }
    const {oldPassword,newPassword}=req.body
     if (!oldPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Old password and new password are required",
      });
    }
     // Vérifier que l'ancien mot de passe correspond
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Old password is incorrect",
      });
    }
     // Hasher le nouveau mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
     // Mettre à jour le mot de passe
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
    
  } catch (error) {
     console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error in password reset API.",
      error: error.message
    });
    
  }
}

module.exports = {
  registerController,
  loginController,
 ResetPasswordController,
 ForgotPasswordController
};
