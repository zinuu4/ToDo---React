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

import { Todo as TodoInterface } from '@/shared/types/todo';

interface TodoFormProps {
  onSubmit: (todo: TodoInterface) => void;
  edit?: { id: number | null; value: string };
}

export const TodoForm: FC<TodoFormProps> = ({ onSubmit, edit }) => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });

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
