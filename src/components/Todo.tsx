'use client';

import { TiEdit } from 'react-icons/ti';
import React, { useState, FC, KeyboardEvent } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

import { TodoForm } from './TodoForm';
import { Todo as TodoInterface } from '@/shared/types/todo';

interface TodoProps {
  todos: TodoInterface[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, value: string) => void;
}

export const Todo: FC<TodoProps> = ({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}) => {
  const [edit, setEdit] = useState<{ id: number | null; value: string }>({
    id: null,
    value: '',
  });

  const submitUpdate = (todo: TodoInterface) => {
    if (edit.id) {
      updateTodo(edit.id, todo.text);
    }

    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
          tabIndex={1}
          onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
              removeTodo(todo.id);
            }
          }}
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
          tabIndex={1}
          onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
              setEdit({ id: todo.id, value: todo.text });
            }
          }}
        />
      </div>
    </div>
  ));
};
