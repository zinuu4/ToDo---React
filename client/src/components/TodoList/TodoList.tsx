'use client';

import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { Title } from '@/shared/ui';
import { useStore } from '@/app/providers/store';
import { useTodos } from '@/shared/api';

import { TodoForm } from '../TodoForm';
import { Todos } from '../Todos';

import styles from './TodoList.module.scss';

interface TodoListProps {
  dictionary: any;
}

export const TodoList: FC<TodoListProps> = observer(({ dictionary }) => {
  const { userStore } = useStore();
  const { user } = userStore;
  const { todos, isLoading, isError } = useTodos(user.id);

  if (isLoading) {
    return <div>Loading1...</div>;
  }

  if (isError) {
    return <div>{isError.message}</div>;
  }

  return (
    <div className={styles.todoApp}>
      <Title text={dictionary.todo.todoListTitle} className={styles.title} />
      <TodoForm dictionary={dictionary} />
      {todos ? (
        todos?.length > 0 ? (
          <Todos todos={todos} dictionary={dictionary} />
        ) : (
          <div>You&apos;ve done all of your todos so far</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
});
