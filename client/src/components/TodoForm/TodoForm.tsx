'use client';

import React, {
  useState,
  useRef,
  useEffect,
  FC,
  ChangeEvent,
  FormEvent,
  RefObject,
} from 'react';
import { clsx } from 'clsx';
import axios from 'axios';

import { Todo as TodoInterface } from '@/shared/types';

import styles from './TodoForm.module.scss';

interface TodoFormProps {
  edit?: TodoInterface;
}

export const TodoForm: FC<TodoFormProps> = ({ edit }) => {
  const [input, setInput] = useState(edit ? edit.title : '');

  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (edit) {
      const todoData = {
        title: input,
        isCompleted: edit.isCompleted,
        _id: edit._id,
      };

      console.log(todoData);

      await axios
        .put(`${process.env.NEXT_PUBLIC_API_URL}/todo/update`, todoData)
        .then(() => {
          window.location.reload();
        });
    } else {
      const todoData = {
        title: input,
        isCompleted: false,
      };

      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/todo/add`, todoData)
        .then(() => {
          window.location.reload();
        });
    }

    setInput('');
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={edit ? 'Update your item' : 'Add a todo'}
        value={input}
        className={clsx(styles.todoInput, edit && styles.edit)}
        onChange={handleChange}
        ref={inputRef}
      />
      <button
        tabIndex={1}
        className={clsx(styles.todoButton, edit && styles.edit)}
      >
        {edit ? 'Update' : 'Add todo'}
      </button>
    </form>
  );
};
