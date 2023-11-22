'use client';

import React, { useState, FC } from 'react';
import axios from 'axios';

import { TodoForm } from './TodoForm';
import { Todo as TodoInterface } from '@/shared/types/todo';
import { Todo } from './Todo';

interface TodoProps {
  todos: TodoInterface[];
}

export const Todos: FC<TodoProps> = ({ todos }) => {
  const [edit, setEdit] = useState<TodoInterface>({
    _id: null,
    title: '',
    isCompleted: false,
  });

  const deleteTodo = async (id: number) => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/todo/delete/${id}`)
      .then(() => {
        window.location.reload();
      });
  };

  if (edit._id) {
    return <TodoForm edit={edit} />;
  }

  return todos?.map((todo, index) => (
    <Todo key={index} todo={todo} deleteTodo={deleteTodo} setEdit={setEdit} />
  ));
};
