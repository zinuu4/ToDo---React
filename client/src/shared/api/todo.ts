import { Dispatch, SetStateAction } from 'react';
// import useSWR from 'swr';

import { Todo } from '@/shared/types';

import { $api } from './common';

// const fetcher = (url: string) => $api.get(url).then((r) => r.data);

// export const useTodos = (userId: string) => {
//   const { data, error, isLoading } = useSWR(`/todo/todos/${userId}`, fetcher);

//   return {
//     todos: data,
//     isLoading,
//     isError: error,
//   };
// };

// export const AddTodo = async (todoData: Partial<Todo>) => {
//   const { data, isLoading, error, mutate } = useSWR('/todo/add');

//   const addTodo = await $api.post('/todo/add', todoData);

//   await mutate(addTodo, {
//     optimisticData: [...data, todoData],
//     rollbackOnError: true,
//     populateCache: (newItem) => {
//       return [...data, newItem];
//     },
//     revalidate: true,
//   });

//   return {
//     todo: data,
//     isLoading,
//     isError: error,
//   };
// };

// export const useUpdateTodo = () => {
//   const { data, error, isLoading } = useSWR('/todo/update', fetcher);

//   return {
//     todo: data,
//     isLoading,
//     isError: error,
//   };
// };

// export const useCompleteTodo = () => {
//   const { data, error, isLoading } = useSWR('/todo/update', fetcher);

//   return {
//     todo: data,
//     isLoading,
//     isError: error,
//   };
// };

// export const useDeleteTodo = (id: string) => {
//   const { data, error, isLoading } = useSWR('/todo/delete/${id}', fetcher);

//   return {
//     todo: data,
//     isLoading,
//     isError: error,
//   };
// };

export class TodosApi {
  static fetchTodos = async (
    setTodos: Dispatch<SetStateAction<[] | Todo[]>>,
    userId: string,
  ) => {
    try {
      const response = await $api.get('/todo/todos', {
        params: { userId },
      });
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  static addTodo = async (todoData: Partial<Todo>) => {
    try {
      await $api.post('/todo/add', todoData).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  static updateTodo = async (todoData: Todo) => {
    try {
      await $api.put('/todo/update', todoData).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  static completeTodo = async (todo: Todo) => {
    try {
      await $api
        .put('/todo/complete', {
          id: todo._id,
          prevIsCompleted: todo.isCompleted,
        })
        .then(() => {
          window.location.reload();
        });
    } catch (error) {
      console.error('Error completing todo:', error);
    }
  };

  static deleteTodo = async (id: number) => {
    try {
      await $api.delete(`/todo/delete/${id}`).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };
}
