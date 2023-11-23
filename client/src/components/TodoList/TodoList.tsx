'use client';

import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { Todo as TodoInterface } from '@/shared/types';

import { TodoForm } from '../TodoForm';
import { Todos } from '../Todos';
import { LanguageSwitcher } from '../LanguageSwitcher';

interface TodoListProps {
  dictionary: any;
}

export const TodoList: FC<TodoListProps> = ({ dictionary }) => {
  const [todos, setTodos] = useState<TodoInterface[] | []>([]);

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
      <h1>{dictionary.todo.todoListTitle}</h1>
      <LanguageSwitcher />
      <TodoForm />
      <Todos todos={todos} />
    </div>
  );
};
