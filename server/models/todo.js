const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  id: Number,
  isCompleted: Boolean,
});

exports.Todo = mongoose.model('Todo', todoSchema);
