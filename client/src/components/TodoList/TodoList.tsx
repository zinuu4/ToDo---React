'use client';

import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Todo as TodoInterface } from '@/shared/types';
import { Title } from '@/shared/ui';
import { TodosApi } from '@/shared/api';
import { useStore } from '@/app/providers/store';

import { TodoForm } from '../TodoForm';
import { Todos } from '../Todos';

import styles from './TodoList.module.scss';

interface TodoListProps {
  dictionary: any;
}

export const TodoList: FC<TodoListProps> = observer(({ dictionary }) => {
  const [todos, setTodos] = useState<TodoInterface[] | []>([]);
  const { userStore } = useStore();
  const { user } = userStore;

  useEffect(() => {
    if (user.id) {
      TodosApi.fetchTodos(setTodos, user.id);
    }
  }, [user.id]);

  return (
    <div className={styles.todoApp}>
      <Title text={dictionary.todo.todoListTitle} className={styles.title} />
      <TodoForm dictionary={dictionary} />
      {todos.length > 0 ? (
        <Todos todos={todos} dictionary={dictionary} />
      ) : (
        <div>You&apos;ve done all of your todos so far</div>
      )}
    </div>
  );
});
