import React, { Dispatch, FC, KeyboardEvent, SetStateAction } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { clsx } from 'clsx';

import { Todo as TodoInterface } from '@/shared/types';
import { TodosApi } from '@/shared/api';

import styles from './Todo.module.scss';

interface TodoProps {
  todo: TodoInterface;
  setEdit: Dispatch<SetStateAction<TodoInterface>>;
}

export const Todo: FC<TodoProps> = ({ todo, setEdit }) => {
  return (
    <div
      className={clsx(
        styles.todoRow,
        todo.isCompleted && styles.complete,
        styles[todo.priority.title.toLowerCase()],
      )}
      key={todo._id}
    >
      <div key={todo._id} onClick={() => TodosApi.completeTodo(todo)}>
        {todo.title}
      </div>
      <div className={styles.icons}>
        <RiCloseCircleLine
          onClick={() => TodosApi.deleteTodo(todo._id!)}
          className={styles.deleteIcon}
          tabIndex={1}
          onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
              TodosApi.deleteTodo(todo._id!);
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
          onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
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
