'use client';

import React, {
  useState,
  useRef,
  useEffect,
  FC,
  FormEvent,
  RefObject,
} from 'react';
import { clsx } from 'clsx';
import axios from 'axios';

import { Priority, Todo as TodoInterface } from '@/shared/types';

import styles from './TodoForm.module.scss';

interface TodoFormProps {
  edit?: TodoInterface;
}

const priorities: Priority[] = [
  { title: 'High', value: 1 },
  { title: 'Medium', value: 2 },
  { title: 'Low', value: 3 },
];

export const TodoForm: FC<TodoFormProps> = ({ edit }) => {
  const [title, setTitle] = useState(edit ? edit.title : '');
  const [priority, setPriority] = useState<Priority>(
    edit ? (edit.priority as Priority) : priorities[0],
  );

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPriority = priorities.find((p) => p.title === e.target.value);
    if (selectedPriority) {
      setPriority(selectedPriority);
    }
  };

  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (edit) {
      const todoData = {
        title,
        isCompleted: edit.isCompleted,
        _id: edit._id,
        priority,
      };

      console.log(todoData);

      await axios
        .put(`${process.env.NEXT_PUBLIC_API_URL}/todo/update`, todoData)
        .then(() => {
          window.location.reload();
        });
    } else {
      const todoData = {
        title,
        isCompleted: false,
        priority,
      };

      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/todo/add`, todoData)
        .then(() => {
          window.location.reload();
        });
    }

    setTitle('');
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={edit ? 'Update your item' : 'Add a todo'}
        value={title}
        className={clsx(styles.todoInput, edit && styles.edit)}
        onChange={(e) => setTitle(e.target.value)}
        ref={inputRef}
      />
      <div className={styles.priorities}>
        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          className={styles.select}
          onChange={handlePriorityChange}
          value={priority.title}
        >
          {priorities.map(({ title, value }) => (
            <option key={value} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>
      <button
        tabIndex={1}
        className={clsx(styles.todoButton, edit && styles.edit)}
      >
        {edit ? 'Update' : 'Add todo'}
      </button>
    </form>
  );
};
