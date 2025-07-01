🍽️ Système Backend d'API de Gestion de Restaurants
Une API RESTful sécurisée complète pour administrer utilisateurs, restaurants, catégories, mobilier et opérations.

🚀 Fonctionnalités Principales
| Catégorie       | Détails                                                                   |
| --------------- | ------------------------------------------------------------------------- |
| 🔐 Sécurité     | Authentification JWT + bcrypt, protection avec Helmet & CORS              |
| 👥 Rôles        | Gestion fine des accès (Admin, Vendor, Client, Driver)                    |
| 🗃️ Données     | CRUD complet pour Restaurants, Catégories et Mobilier                     |
| ⚙️ Qualité      | Validation des entrées avec express-validator, journalisation avec Morgan |
| 🛠️ Maintenance | Architecture modulaire + arrêt propre du serveur via endpoint sécurisé    |

🛠️ Stack Technique
Backend
Node.js v22.12.0 • Express 4.x • EJS (templates)

Base de Données
MongoDB • Mongoose ODM

Sécurité
JWT • bcrypt • Helmet • CORS • express-validator

Outils
Morgan (logs) • Dotenv (config)


📁 Structure du Projet
restaurant-api/
├── config/           # Configuration DB et variables d'environnement
├── controllers/      # Logique métier (users, restaurants, categories...)
├── middleware/       # Auth, validation des rôles, gestion d'erreurs
├── models/           # Schémas Mongoose (User.js, Restaurant.js...)
├── routes/           # Définition des endpoints API
├── validators/       # Règles de validation des données
├── views/            # Templates EJS (optionnel)
├── .env.example      # Modèle de configuration
├── package.json
└── server.js         # Point d'entrée

⚙️ Prérequis d'Installation
Node.js ≥ v18

MongoDB (local ou cluster Atlas)

Git

Postman / Insomnia (tests d'API)

📬 Contact
Développeur : Nourhen Ben Othmen
Contributions : Issues GitHub bienvenues !

« Un backend robuste pour orchestrer l'expérience culinaire de A à Z. »


