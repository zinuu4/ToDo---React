const { Todo } = require('../models/todo');

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json(todos);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

exports.addTodo = async (req, res) => {
  try {
    await Todo.create(req.body);
    return res.status(200).json('Todo created');
  } catch (e) {
    res.status(500).json(e.message);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    return res.status(200).json('Todo deleted');
  } catch (e) {
    res.status(500).json(e.message);
  }
};
