'use client';

import React, { FC, useEffect, useState } from 'react';

import { Todo as TodoInterface } from '@/shared/types';
import { Title } from '@/shared/ui';
import { fetchTodos } from '@/shared/api';

import { TodoForm } from '../TodoForm';
import { Todos } from '../Todos';

import styles from './TodoList.module.scss';

interface TodoListProps {
  dictionary: any;
}

export const TodoList: FC<TodoListProps> = ({ dictionary }) => {
  const [todos, setTodos] = useState<TodoInterface[] | []>([]);

  useEffect(() => {
    fetchTodos(setTodos);
  }, []);

  return (
    <div className={styles.todoApp}>
      <Title text={dictionary.todo.todoListTitle} className={styles.title} />
      <TodoForm dictionary={dictionary} />
      <Todos todos={todos} dictionary={dictionary} />
    </div>
  );
};
