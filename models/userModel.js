const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Champs de base (recommandés)
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },

  // Champs spécifiés dans votre extrait
  address: {
    type: Array,
    default: []
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  usertype: {
    type: String,
    required: [true, 'User type is required'],
    default: 'client',
    enum: ['client', 'admin', 'vendor', 'driver']
  },
  profile: {
    type: String,
    default: 'https://media.istockphoto.com/id/1495088043/fr/vectoriel/ic%C3%B4ne-de-profil-utilisateur-avatar-ou-ic%C3%B4ne-de-personne-photo-de-profil-symbole-portrait.jpg?s=612x612&w=0&k=20&c=moNRZjYtVpH-I0mAe-ZfjVkuwgCOqH-BRXFLhQkZoP8=' // Chemin par défaut
  }
}, {
  timestamps: true // Ajoute automatiquement createdAt/updatedAt
});

module.exports = mongoose.model('User', userSchema);