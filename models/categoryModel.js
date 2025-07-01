const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "category title is required"], // Le titre de la catégorie est requis
        },
        imageUrl: {
            type: String,
            default: "https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background.png", // URL d'image par défaut
        },
    },
    { timestamps: true } // Ajoute automatiquement les champs createdAt et updatedAt
);

module.exports = mongoose.model("Category", categorySchema);
