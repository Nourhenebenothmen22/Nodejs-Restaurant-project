const express = require('express');
const app = express();
const helmet = require('helmet');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const ejs = require('ejs');
const connectDB = require('./config/database');

// Charger les variables d'environnement EN PREMIER
require('dotenv').config();

// Connexion à MongoDB
connectDB();

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(helmet()); // 🛡️ Active automatiquement plusieurs protections HTTP
app.use(express.json());
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const authRoute = require('./routes/authRoutes');
app.use("/api/auth", authRoute);

const userRoute = require('./routes/userRoute');
app.use('/api', userRoute);

const restaurantRoute=require('./routes/resaturantRoute')
app.use('/api/restaurant',restaurantRoute);

// Récupérer le port depuis .env
const PORT = process.env.PORT || 5000;

// Stocker l'instance du serveur dans une variable
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`.bgWhite.white.bold);
});

// Gestion propre de l'arrêt du serveur
process.on('SIGINT', () => {
  console.log('\n🛑 Server shutdown requested (SIGINT)'.red.bold);
  server.close(() => {
    console.log('✅ Server has been stopped gracefully.'.green.bold);
    process.exit(0);
  });
});