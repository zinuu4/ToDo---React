const { Todo } = require('../models/todo');

exports.postAddTodo = async (req, res) => {
  try {
    await Todo.create(req.body);
    return res.status(200).json('Todo created');
  } catch (e) {
    res.status(500).json(e.message);
  }
};
