const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const todoRoutes = require('./routes/todo');
const authRoutes = require('./routes/auth');
const { errorMiddleware } = require('./middleware/error-middleware');

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

const PORT = process.env.APP_PORT || 5001;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/api/todo', todoRoutes);
app.use('/api/auth', authRoutes);

app.use(errorMiddleware);

const startApp = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
