const { Todo } = require('../models/todo');
const { TodoError } = require('../exceptions/todo-error');

class TodoService {
  async getTodos(userId) {
    if (!userId) {
      return TodoError.BadRequest('User id is required');
    }

    const todos = await Todo.find({ userId });

    return todos;
  }

  async createTodo(todoData) {
    if (!todoData) {
      return TodoError.BadRequest('Todo data is required');
    }

    const todo = await Todo.create(todoData);

    return todo;
  }

  async updateTodo(todoData) {
    if (!todoData) {
      return TodoError.BadRequest('Todo data is required');
    }

    const todo = await Todo.findByIdAndUpdate(todoData._id, todoData, {
      new: true,
    });

    return todo;
  }

  async deleteTodo(id) {
    if (!id) {
      return TodoError.BadRequest('Todo id is required');
    }

    const todo = await Todo.findByIdAndDelete(id);

    return todo;
  }
}

exports.TodoService = new TodoService();
