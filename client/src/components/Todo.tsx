import React, { Dispatch, FC, KeyboardEvent, SetStateAction } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import { Todo as TodoInterface } from '@/shared/types/todo';

interface TodoProps {
  todo: TodoInterface;
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  setEdit: Dispatch<
    SetStateAction<{
      id: number | null;
      value: string;
    }>
  >;
}

export const Todo: FC<TodoProps> = ({
  todo,
  completeTodo,
  removeTodo,
  setEdit,
}) => {
  return (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={todo.id}
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
  );
};
