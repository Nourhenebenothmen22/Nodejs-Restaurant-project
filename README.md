🍽️ Restaurant Management API – Backend System
Un système backend complet pour la gestion d’un restaurant, offrant une API RESTful sécurisée pour gérer utilisateurs, rôles, mobilier et opérations administratives.

🚀 Fonctionnalités Clés
🔐 Authentification sécurisée avec JWT et bcrypt

👥 Gestion des utilisateurs avec rôles (admin, vendor, client, driver)

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

📁 Structure du Projet
restaurant-api/
├── config/           # Connexion DB, gestion .env
├── controllers/      # Logique métier
├── middleware/       # Auth, validation, protection
├── models/           # Schémas Mongoose (User, etc.)
├── routes/           # Routes Express
├── validators/       # Règles express-validator
├── views/            # Templates EJS (optionnel)
├── .env.example      # Exemple de configuration
├── package.json      # Dépendances et scripts
└── server.js         # Point d’entrée principal
⚙️ Prérequis
Node.js v18+

MongoDB (local ou Atlas)

Git

Postman (ou équivalent)

🧪 Installation & Configuration
Cloner le dépôt :


Installer les dépendances :

npm install

Configurer l’environnement : .env
Modifier .env avec vos valeurs :

PORT=5000
MONGODB_URI=mongodb://localhost:27017/restaurant-db
JWT_SECRET=votre_super_secret_complexe
JWT_EXPIRES_IN=1h

Démarrer le serveur :
npm start
# ou en mode développement :
npm run dev
📬 Contact
Développé par Nourhen Ben Othmen
Pour questions ou suggestions, n’hésitez pas à ouvrir une issue sur le dépôt GitHub !
