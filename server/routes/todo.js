const express = require('express');

const { postAddTodo } = require('../controller/todo');

const router = express.Router();

router.post('/add-todo', postAddTodo);

module.exports = router;
