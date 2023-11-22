const express = require('express');

const {
  getTodos,
  addTodo,
  updateTodo,
  completeTodo,
  deleteTodo,
} = require('../controller/todo');

const router = express.Router();

router.get('/todos', getTodos);

router.post('/add', addTodo);

router.put('/update', updateTodo);

router.put('/complete', completeTodo);

router.delete('/delete/:id', deleteTodo);

module.exports = router;
