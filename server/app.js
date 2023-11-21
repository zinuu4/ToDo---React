const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const todoRoutes = require('./routes/todo');

const PORT = process.env.APP_PORT || 5001;
const DB_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ll8m8hm.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.use('/todo', todoRoutes);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
