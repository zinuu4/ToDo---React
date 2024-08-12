const express = require('express');

const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require('../controller/todo-controller');
const { verifyToken } = require('../middleware/verify-token');

const router = express.Router();

router.get('/todos/:userId', verifyToken, getTodos);

router.post('/todos', verifyToken, addTodo);

router.put('/todos', verifyToken, updateTodo);

router.delete('/todos/:id', verifyToken, deleteTodo);

module.exports = router;
