🍽️ Restaurant Management API – Backend System
Un système backend complet pour la gestion d’un restaurant, offrant une API RESTful sécurisée pour gérer utilisateurs, rôles, restaurants, catégories, mobilier et opérations administratives.

🚀 Fonctionnalités Clés
🔐 Authentification sécurisée avec JWT et bcrypt

👥 Gestion des utilisateurs avec rôles (admin, vendor, client, driver)

🍴 Gestion complète CRUD des restaurants

🗂️ Gestion complète CRUD des catégories (Category)

📊 Validation robuste des entrées avec express-validator

🛡️ Sécurité HTTP grâce à Helmet et CORS

📈 Journalisation des requêtes HTTP avec Morgan

🛌 Arrêt propre du serveur via endpoint protégé

⚙️ Configuration centralisée via fichier .env

🧹 Architecture modulaire, facile à maintenir

🛠️ Technologies Utilisées

| Composant        | Technologie                     |
| ---------------- | ------------------------------- |
| Backend          | Node.js v22.12.0, Express 4.x   |
| Base de données  | MongoDB + Mongoose ODM          |
| Authentification | JWT, bcrypt                     |
| Sécurité         | Helmet, CORS, express-validator |
| Journalisation   | Morgan                          |
| Templates        | EJS (pour vues si besoin)       |
| Middleware       | Authentification + validation   |

📁 Structure du Projet restaurant-api/

├── config/              # Connexion DB, gestion .env
├── controllers/         # Logique métier (inclut categoryController.js, restaurantController.js)
├── middleware/          # Auth, validation, protection
├── models/              # Schémas Mongoose (User, Category, Restaurant, etc.)
├── routes/              # Routes Express (inclut categoryRoute.js, restaurantRoute.js)
├── validators/          # Règles express-validator
├── views/               # Templates EJS (optionnel)
├── .env.example         # Exemple de configuration
├── package.json         # Dépendances et scripts
└── server.js            # Point d’entrée principal

📁 Structure du Projet 
├── config/              # Connexion DB, gestion .env
├── controllers/         # Logique métier (inclut categoryController.js, restaurantController.js)
├── middleware/          # Auth, validation, protection
├── models/              # Schémas Mongoose (User, Category, Restaurant, etc.)
├── routes/              # Routes Express (inclut categoryRoute.js, restaurantRoute.js)
├── validators/          # Règles express-validator
├── views/               # Templates EJS (optionnel)
├── .env.example         # Exemple de configuration
├── package.json         # Dépendances et scripts
└── server.js            # Point d’entrée principal

⚙️ Prérequis
Node.js v18+

MongoDB (local ou Atlas)

Git

Postman (ou équivalent)


📬 Contact
Développé par Nourhen Ben Othmen
Pour questions ou suggestions, n’hésitez pas à ouvrir une issue sur le dépôt GitHub !

