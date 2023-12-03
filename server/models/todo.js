const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  isCompleted: Boolean,
  priority: { title: String, value: Number },
});

exports.Todo = mongoose.model('Todo', todoSchema);
