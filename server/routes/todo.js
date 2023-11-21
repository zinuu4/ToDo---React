const express = require('express');

const { postAddTodo, getTodos } = require('../controller/todo');

const router = express.Router();

router.get('/todos', getTodos);

router.post('/add-todo', postAddTodo);

module.exports = router;
