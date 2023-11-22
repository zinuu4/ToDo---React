'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { TodoForm } from './TodoForm';
import { Todos } from './Todos';
import { Todo as TodoInterface } from '@/shared/types/todo';

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoInterface[] | []>([]);

  console.log(todos);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/todo/todos`,
      );
      setTodos(response.data);
    };
    fetchTodos();
  }, []);

  const completeTodo = (id: number) => {
    let updatedTodos = todos.map((todo) => {
      if (todo._id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What&apos;s the Plan for Today?</h1>
      <TodoForm />
      <Todos todos={todos} completeTodo={completeTodo} />
    </div>
  );
};
