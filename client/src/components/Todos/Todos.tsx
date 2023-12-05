'use client';

import React, { useState, FC } from 'react';

import { Priority, Todo as TodoInterface } from '@/shared/types';
import { deleteTodo } from '@/shared/api';

import { TodoForm } from '../TodoForm';
import { Todo } from '../Todo';

interface TodoProps {
  todos: TodoInterface[];
}

export const Todos: FC<TodoProps> = ({ todos }) => {
  const [edit, setEdit] = useState<TodoInterface>({
    _id: null,
    title: '',
    isCompleted: false,
    priority: {} as Priority,
  });

  const sortedTodos = todos.sort((a, b) => a.priority.value - b.priority.value);

  if (edit._id) {
    return <TodoForm edit={edit} />;
  }

  return sortedTodos?.map((todo, index) => (
    <Todo key={index} todo={todo} deleteTodo={deleteTodo} setEdit={setEdit} />
  ));
};
