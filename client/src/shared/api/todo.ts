import { Dispatch, SetStateAction } from 'react';
import axios from 'axios';

import { Todo } from '@/shared/types';

export const fetchTodos = async (
  setTodos: Dispatch<SetStateAction<[] | Todo[]>>,
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/todo/todos`,
    );
    setTodos(response.data);
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = async (todoData: Partial<Todo>) => {
  try {
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/todo/add`, todoData)
      .then(() => {
        window.location.reload();
      });
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const updateTodo = async (todoData: Todo) => {
  try {
    await axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/todo/update`, todoData)
      .then(() => {
        window.location.reload();
      });
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};

export const completeTodo = async (todo: Todo) => {
  try {
    await axios
      .put(`${process.env.NEXT_PUBLIC_API_URL}/todo/complete`, {
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

export const deleteTodo = async (id: number) => {
  try {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/todo/delete/${id}`)
      .then(() => {
        window.location.reload();
      });
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};
