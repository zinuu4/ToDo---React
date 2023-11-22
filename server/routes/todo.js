const express = require('express');

const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = require('../controller/todo');

const router = express.Router();

router.get('/todos', getTodos);

router.post('/add', addTodo);

router.put('/update', updateTodo);

router.delete('/delete/:id', deleteTodo);

module.exports = router;
