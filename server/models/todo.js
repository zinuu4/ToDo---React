const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, required: true },
  priority: {
    title: { type: String },
    value: { type: Number },
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

exports.Todo = mongoose.model('Todo', todoSchema);
