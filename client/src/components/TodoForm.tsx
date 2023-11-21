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
import axios from 'axios';

interface TodoFormProps {
  edit?: { id: number | null; value: string };
}

export const TodoForm: FC<TodoFormProps> = ({ edit }) => {
  const [input, setInput] = useState(edit ? edit.value : '');

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

    const todoData = {
      title: input,
      id: Math.floor(Math.random() * 10000),
      isCompleted: false,
    };

    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/todo/add-todo`,
      todoData,
    );

    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={edit ? 'Update your item' : 'Add a todo'}
        value={input}
        className={edit ? 'todo-input edit' : 'todo-input'}
        onChange={handleChange}
        ref={inputRef}
      />
      <button
        tabIndex={1}
        className={edit ? 'todo-button edit' : 'todo-button'}
      >
        {edit ? 'Update' : 'Add todo'}
      </button>
    </form>
  );
};
