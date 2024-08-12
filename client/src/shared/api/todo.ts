import useSWR, { mutate } from 'swr';

import { Todo } from '@/shared/types';
import { $api } from './common';

const fetcher = (url: string) => $api.get(url).then((res) => res.data);

export const useTodos = (userId: string) => {
  const { data: todos, isLoading, error } = useSWR(`/todos/${userId}`, fetcher);

  const postTodo = async (todo: Partial<Todo>) => {
    const response = await $api.post('/todos', todo);
    return response.data;
  };

  const createTodo = async (todo: Partial<Todo>, userId: string) => {
    try {
      await mutate(
        `/todos/${userId}`,
        async (currentTodos: Todo[] = []) => {
          const newTodo = await postTodo(todo);
          return [...currentTodos, newTodo];
        },
        {
          optimisticData: todos ? [...todos, todo] : [todo],
          rollbackOnError: true,
          populateCache: (newItem) => {
            return [...todos, newItem];
          },
          revalidate: true,
        },
      );
    } catch (e) {
      console.log(e);
    }
  };

  return {
    todos,
    isLoading,
    isError: error,
    createTodo,
  };
};

export const updateTodo = async (todo: Partial<Todo>, userId: string) => {
  try {
    const response = await $api.put('/todos', todo);
    await mutate(`/todos/${userId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteTodo = async (id: number, userId: string) => {
  try {
    const response = await $api.delete(`/todos/${id}`);
    await mutate(`/todos/${userId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
