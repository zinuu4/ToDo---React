const { Schema, model } = require('mongoose');

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

exports.Todo = model('Todo', todoSchema);
