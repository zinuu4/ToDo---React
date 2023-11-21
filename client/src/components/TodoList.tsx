'use client';

import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todos } from './Todos';
import { Todo as TodoInterface } from '@/shared/types/todo';

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoInterface[] | []>([]);

  const updateTodo = (todoId: number, newValue: string) => {
    if (!newValue || /^\s*$/.test(newValue)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) =>
        item.id === todoId ? { ...item, text: newValue } : item,
      ),
    );
  };

  console.log(todos);

  const removeTodo = (id: number) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id: number) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What&apos;s the Plan for Today?</h1>
      <TodoForm />
      <Todos
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};
