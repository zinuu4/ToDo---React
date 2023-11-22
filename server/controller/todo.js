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

exports.updateTodo = async (req, res) => {
  try {
    const todo = req.body;
    await Todo.findByIdAndUpdate(todo._id, todo, {
      new: true,
    });
    return res.status(200).json('Todo updated');
  } catch (e) {
    res.status(500).json(e.message);
  }
};

exports.completeTodo = async (req, res) => {
  try {
    const { id, prevIsCompleted } = req.body;
    await Todo.findByIdAndUpdate(
      id,
      { $set: { isCompleted: !prevIsCompleted } },
      {
        new: true,
      },
    );
    return res.status(200).json('Todo completed');
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
