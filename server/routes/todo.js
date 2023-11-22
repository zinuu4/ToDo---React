const express = require('express');

const { addTodo, getTodos, deleteTodo } = require('../controller/todo');

const router = express.Router();

router.get('/todos', getTodos);

router.post('/add', addTodo);

router.delete('/delete/:id', deleteTodo);

module.exports = router;
