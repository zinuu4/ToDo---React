import React, { Dispatch, FC, KeyboardEvent, SetStateAction } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import { Todo as TodoInterface } from '@/shared/types/todo';

interface TodoProps {
  todo: TodoInterface;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  setEdit: Dispatch<SetStateAction<TodoInterface>>;
}

export const Todo: FC<TodoProps> = ({
  todo,
  completeTodo,
  deleteTodo,
  setEdit,
}) => {
  return (
    <div
      className={todo.isCompleted ? 'todo-row complete' : 'todo-row'}
      key={todo._id}
    >
      <div key={todo._id} onClick={() => completeTodo(todo._id!)}>
        {todo.title}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => deleteTodo(todo._id!)}
          className="delete-icon"
          tabIndex={1}
          onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
              deleteTodo(todo._id!);
            }
          }}
        />
        <TiEdit
          onClick={() =>
            setEdit({
              _id: todo._id,
              title: todo.title,
              isCompleted: todo.isCompleted,
            })
          }
          className="edit-icon"
          tabIndex={1}
          onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
              setEdit({
                _id: todo._id,
                title: todo.title,
                isCompleted: todo.isCompleted,
              });
            }
          }}
        />
      </div>
    </div>
  );
};
