'use client';

import React, { FC, FormEvent, useState } from 'react';
import Link from 'next/link';

import { Button, Input } from '@/shared/ui';
import { routes } from '@/shared/routes';
import { registration, login } from '@/shared/api';
import { capitalizeFirstLetter } from '@/shared/utils';

import styles from './AuthForm.module.scss';

interface AuthFormProps {
  type: 'login' | 'registration';
}

export const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type === 'registration') {
      registration({ email, password });
    }
    login({ email, password });
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{capitalizeFirstLetter(type)}</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
        </div>
        <Button text="Submit" className={styles.submitButton} />
      </form>
      <div className={styles.linkSection}>
        <span>
          {type === 'login'
            ? "Don't have an account yet?"
            : 'Already have an account?'}
        </span>
        <Link
          href={type === 'login' ? routes.registration.path : routes.login.path}
          className={styles.link}
        >
          {type === 'login' ? 'Register' : 'Login'}
        </Link>
      </div>
    </section>
  );
};
