'use client';

import React, { useState, FC } from 'react';
import axios from 'axios';

import { TodoForm } from './TodoForm';
import { Todo as TodoInterface } from '@/shared/types/todo';
import { Todo } from './Todo';

interface TodoProps {
  todos: TodoInterface[];
  completeTodo: (id: number) => void;
  updateTodo: (id: number, value: string) => void;
}

export const Todos: FC<TodoProps> = ({ todos, completeTodo, updateTodo }) => {
  const [edit, setEdit] = useState<{ id: number | null; value: string }>({
    id: null,
    value: '',
  });

  const deleteTodo = async (id: number) => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/todo/delete/${id}`)
      .then(() => {
        window.location.reload();
      });
  };

  if (edit.id) {
    return <TodoForm edit={edit} />;
  }

  return todos?.map((todo, index) => (
    <Todo
      key={index}
      todo={todo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      setEdit={setEdit}
    />
  ));
};
