const mongoose = require('mongoose');

// Définition du schéma du restaurant
const restaurantSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Restaurant title is required"],
  },
  imageUrl: {
    type: String,
  },
  foods: {
    type: [String],
  },
  time: {
    type: String,
  },
  pickup: {
    type: Boolean,
    default: true
  },
  delivery: {
    type: Boolean,
    default: true
  },
  isOpen: {
    type: Boolean,
    default: true
  },
  logoUrl: {
    type: String,
  },
  rating: {
    type: Number,
    default: 1,
    min: 1,
    max: 5
  },
  coords: {
    id: { type: String },
    latitude: { type: Number },
    latitudeDelta: { type: Number },
    longitude: { type: Number },
    longitudeDelta: { type: Number },
    address: { type: String },
    locationTitle: { type: String }, //
  }
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);
