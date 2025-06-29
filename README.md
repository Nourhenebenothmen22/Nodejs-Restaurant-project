🍽️ Restaurant Management API – Backend System







Ce projet est un système backend complet pour la gestion d’un restaurant. Il fournit une API RESTful sécurisée pour gérer les utilisateurs, les rôles, le mobilier et les opérations administratives.

🚀 Fonctionnalités Clés

🔐 Authentification sécurisée avec JWT et bcrypt

👥 Gestion des utilisateurs avec rôles (admin, vendor, client, driver)

📊 Validation robuste des entrées avec express-validator

🛡️ Sécurité HTTP avec Helmet, CORS

📈 Journalisation des requêtes HTTP avec Morgan

🛌 Arrêt propre du serveur avec un endpoint protégé

⚙️ Configuration centralisée via fichier .env

🧹 Architecture modulaire, facile à maintenir

## 🛠️ Technologies Utilisées

| Composant       | Technologie                    |
|-----------------|-------------------------------|
| Backend         | Node.js v22.12.0,Express 4.x     |
| Base de données | MongoDB + Mongoose ODM        |
| Authentification| JWT, bcrypt                   |
| Sécurité       | Helmet, CORS, express-validator|
| Journalisation  | Morgan                        |
| Templates       | EJS (pour vues si besoin)     |
| Middleware      | Authentification + validation |

📁 Structure du Projet

restaurant-api/
├── config/           # Connexion DB, .env
├── controllers/      # Logique métier
├── middleware/       # Auth, validation, protection
├── models/           # Schémas Mongoose (User, etc.)
├── routes/           # Définition des routes Express
├── validators/       # express-validator rules
├── views/            # Templates EJS (si utilisés)
├── .env.example      # Exemple de config
├── package.json      # Dépendances et scripts
└── server.js         # Point d’entrée principal

⚙️ Prérequis

Node.js v18+

MongoDB (local ou MongoDB Atlas)

Git

Postman (ou tout outil API)

🧪 Installation & Configuration

1. Cloner le dépôt

https://github.com/Nourhenebenothmen22/Nodejs-Restaurant-project/tree/main

cd restaurant-api

2. Installer les dépendances

npm install

3. Configuration de l’environnement

cp .env.example .env

Modifier le fichier .env :

PORT=5000
MONGODB_URI=mongodb://localhost:27017/restaurant-db
JWT_SECRET=votre_super_secret_complexe
JWT_EXPIRES_IN=1h

4. Démarrer le serveur

npm start
# OU en mode développement :
npm run dev


📬 Contact

Développé par Nourhen Ben Othmen Si vous avez des questions ou suggestions, n'hésitez pas à ouvrir une issue !
