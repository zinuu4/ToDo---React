const express = require('express');

const {
  getTodos,
  addTodo,
  updateTodo,
  completeTodo,
  deleteTodo,
} = require('../controller/todo');
const { verifyToken } = require('../middleware/verify-token');

const router = express.Router();

router.get('/todos', verifyToken, getTodos);

router.post('/add', verifyToken, addTodo);

router.put('/update', verifyToken, updateTodo);

router.put('/complete', verifyToken, completeTodo);

router.delete('/delete/:id', verifyToken, deleteTodo);

module.exports = router;
