'use client';

import React, { useState, FC } from 'react';

import { Priority, Todo as TodoInterface } from '@/shared/types';

import { TodoForm } from '../TodoForm';
import { Todo } from '../Todo';

interface TodoProps {
  todos: TodoInterface[];
  dictionary: any;
}

export const Todos: FC<TodoProps> = ({ todos, dictionary }) => {
  const [edit, setEdit] = useState<Partial<TodoInterface>>({
    _id: null,
    title: '',
    isCompleted: false,
    priority: {} as Priority,
  });

  const sortedTodos = todos.sort(
    (a, b) => a.priority?.value - b.priority?.value,
  );

  if (edit._id) {
    return <TodoForm edit={edit} setEdit={setEdit} dictionary={dictionary} />;
  }

  return sortedTodos.map((todo, index) => (
    <Todo key={index} todo={todo} setEdit={setEdit} />
  ));
};
