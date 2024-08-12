const { TodoService } = require('../service/todo-service');

exports.getTodos = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const todos = await TodoService.getTodos(userId);

    return res.json(todos);
  } catch (e) {
    next(e);
  }
};

exports.addTodo = async (req, res, next) => {
  try {
    const todoData = req.body;

    const todo = await TodoService.createTodo(todoData);

    return res.json(todo);
  } catch (e) {
    next(e);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const todoData = req.body;

    const todo = TodoService.updateTodo(todoData);

    return res.json(todo);
  } catch (e) {
    next(e);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const todo = TodoService.deleteTodo(id);

    return res.json(todo);
  } catch (e) {
    next(e);
  }
};
