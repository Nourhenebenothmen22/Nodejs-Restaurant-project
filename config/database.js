const mongoose = require('mongoose');
const colors=require('colors')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_ENV, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB connected: ${conn.connection.host}`.bgGreen.black);
  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`.bgRed);
    process.exit(1); // Quitter si erreur
  }
};

module.exports = connectDB;
