'use client';

import React, {
  useState,
  useRef,
  useEffect,
  FC,
  FormEvent,
  RefObject,
  Dispatch,
  SetStateAction,
} from 'react';
import { observer } from 'mobx-react-lite';

import { Priority, Todo as TodoInterface } from '@/shared/types';
import { priorities } from '@/shared/consts';
import { Button, Input } from '@/shared/ui';
import { useStore } from '@/app/providers/store';
import { updateTodo, useTodos } from '@/shared/api';

import styles from './TodoForm.module.scss';

interface TodoFormProps {
  edit?: Partial<TodoInterface>;
  setEdit?: Dispatch<SetStateAction<Partial<TodoInterface>>>;
  dictionary: any;
}

export const TodoForm: FC<TodoFormProps> = observer(
  ({ edit, setEdit, dictionary }) => {
    const [title, setTitle] = useState(edit ? edit.title : '');
    const [priority, setPriority] = useState<Priority>(
      edit ? (edit.priority as Priority) : priorities[0],
    );

    const { userStore } = useStore();
    const { user } = userStore;
    const { createTodo } = useTodos(user.id);

    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedPriority = priorities.find(
        (p) => p.title === e.target.value,
      );
      if (selectedPriority) {
        setPriority(selectedPriority);
      }
    };

    const inputRef: RefObject<HTMLInputElement> =
      useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (edit && setEdit) {
        const todoData = {
          title,
          isCompleted: edit.isCompleted,
          _id: edit._id,
          priority,
        };

        updateTodo(todoData, user.id);
        setEdit({});
      } else {
        const todoData = {
          title,
          isCompleted: false,
          priority,
          userId: user.id,
        };

        createTodo(todoData, user.id);
      }

      setTitle('');
    };

    return (
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder={
            edit ? dictionary.todo.updateTodo : dictionary.todo.addTodo
          }
          value={title}
          borderColor={edit ? 'secondary' : 'primary'}
          onChange={(e) => setTitle(e.target.value)}
          ref={inputRef}
        />
        <div className={styles.priorities}>
          <label htmlFor="priority">{dictionary.todo.priority}:</label>
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
        <Button
          text={edit ? dictionary.buttons.update : dictionary.todo.addTodo}
          backgroundColor={edit ? 'secondary' : 'primary'}
          className={styles.todoButton}
          size="medium"
        />
      </form>
    );
  },
);
