'use client';

import React, { useState, FC } from 'react';

import { TodoForm } from './TodoForm';
import { Todo as TodoInterface } from '@/shared/types/todo';
import { Todo } from './Todo';

interface TodoProps {
  todos: TodoInterface[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, value: string) => void;
}

export const Todos: FC<TodoProps> = ({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}) => {
  const [edit, setEdit] = useState<{ id: number | null; value: string }>({
    id: null,
    value: '',
  });

  if (edit.id) {
    return <TodoForm edit={edit} />;
  }

  return todos?.map((todo, index) => (
    <Todo
      key={index}
      todo={todo}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      setEdit={setEdit}
    />
  ));
};
