const express = require('express');
const app = express();
const helmet = require('helmet');
const colors=require('colors')
const cors=require('cors')
const morgan=require('morgan')
const ejs=require('ejs')
const connectDB = require('./config/database');
app.use(morgan('dev'))

// Charger les variables d'environnement EN PREMIER
require('dotenv').config();

// Connexion à MongoDB
connectDB();

app.use(cors())
app.use(helmet()); // 🛡️ Active automatiquement plusieurs protections HTTP
app.use(express.json())
app.set('view engine', 'ejs');
//routing path
app.get('/', (req, res) => {
  res.send('Hello World!');
});
const authRoute=require('./routes/authRoutes')
app.use("/api/auth",authRoute)
const userRoute=require('./routes/userRoute')
app.use('/api',userRoute)
// Récupérer le port depuis .env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`.bgWhite.white.bold);
});

