const Category = require('../models/categoryModel'); // adapte le chemin vers ton modèle

// CREATE - Créer une nouvelle catégorie
exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const savedCategory = await category.save();
    res.status(201).json({ message: 'Catégorie créée avec succès', data: savedCategory });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création', error: error.message });
  }
};

// READ - Récupérer toutes les catégories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des catégories', error: error.message });
  }
};

// READ - Récupérer une catégorie par son ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Catégorie non trouvée' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la catégorie', error: error.message });
  }
};

// UPDATE - Mettre à jour une catégorie par son ID
exports.updateCategory = async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Catégorie non trouvée pour mise à jour' });
    }
    res.status(200).json({ message: 'Catégorie mise à jour avec succès', data: updatedCategory });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour', error: error.message });
  }
};

// DELETE - Supprimer une catégorie par son ID
exports.deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Catégorie non trouvée pour suppression' });
    }
    res.status(200).json({ message: 'Catégorie supprimée avec succès', data: deletedCategory });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression', error: error.message });
  }
};
