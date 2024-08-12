import React, { Dispatch, FC, KeyboardEvent, SetStateAction } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { clsx } from 'clsx';

import { Todo as TodoInterface } from '@/shared/types';
import { updateTodo, deleteTodo } from '@/shared/api';
import { useStore } from '@/app/providers/store';

import styles from './Todo.module.scss';

interface TodoProps {
  todo: TodoInterface;
  setEdit: Dispatch<SetStateAction<Partial<TodoInterface>>>;
}

export const Todo: FC<TodoProps> = ({ todo, setEdit }) => {
  const { userStore } = useStore();
  const { user } = userStore;

  const completedTodo = { ...todo, isCompleted: !todo.isCompleted };

  return (
    <div
      className={clsx(
        styles.todoRow,
        todo.isCompleted && styles.complete,
        styles[todo?.priority?.title.toLowerCase()],
      )}
      key={todo._id}
    >
      <div onClick={() => updateTodo(completedTodo, user.id)}>{todo.title}</div>
      <div className={styles.icons}>
        <RiCloseCircleLine
          onClick={() => deleteTodo(todo._id!, user.id)}
          className={styles.deleteIcon}
          tabIndex={1}
          onKeyDown={(event: KeyboardEvent<SVGElement>) => {
            if (event.key === 'Enter') {
              deleteTodo(todo._id!, user.id);
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
          onKeyDown={(event: KeyboardEvent<SVGElement>) => {
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
