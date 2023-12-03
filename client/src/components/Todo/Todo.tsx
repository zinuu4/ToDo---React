import React, { Dispatch, FC, KeyboardEvent, SetStateAction } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { clsx } from 'clsx';
import axios from 'axios';

import { Todo as TodoInterface } from '@/shared/types';

import styles from './Todo.module.scss';

interface TodoProps {
  todo: TodoInterface;
  deleteTodo: (id: number) => void;
  setEdit: Dispatch<SetStateAction<TodoInterface>>;
}

export const Todo: FC<TodoProps> = ({ todo, deleteTodo, setEdit }) => {
  const completeTodo = async () => {
    await axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/todo/complete`, {
        id: todo._id,
        prevIsCompleted: todo.isCompleted,
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <div
      className={clsx(
        styles.todoRow,
        todo.isCompleted && styles.complete,
        styles[todo.priority.title.toLowerCase()],
      )}
      key={todo._id}
    >
      <div key={todo._id} onClick={() => completeTodo()}>
        {todo.title}
      </div>
      <div className={styles.icons}>
        <RiCloseCircleLine
          onClick={() => deleteTodo(todo._id!)}
          className={styles.deleteIcon}
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
              priority: todo.priority,
            })
          }
          className={styles.editIcon}
          tabIndex={1}
          onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
              setEdit({
                _id: todo._id,
                title: todo.title,
                isCompleted: todo.isCompleted,
                priority: todo.priority,
              });
            }
          }}
        />
      </div>
    </div>
  );
};
