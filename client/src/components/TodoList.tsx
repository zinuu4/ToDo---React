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

  return (
    <div>
      <h1>What&apos;s the Plan for Today?</h1>
      <TodoForm />
      <Todos todos={todos} />
    </div>
  );
};
