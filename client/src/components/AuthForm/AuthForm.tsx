'use client';

import React, { FC, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/app/providers/store';
import { Button, Input } from '@/shared/ui';
import { routes } from '@/shared/routes';
import { useGetCurrentLocale } from '@/shared/utils';

import styles from './AuthForm.module.scss';

interface AuthFormProps {
  type: 'login' | 'registration';
  dictionary: any;
}

export const AuthForm: FC<AuthFormProps> = observer(({ type, dictionary }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userStore } = useStore();

  const currentLocale = useGetCurrentLocale();

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type === 'registration') {
      userStore.registration({ email, password }).then(() => {
        router.push(routes.todos.path);
      });
    }
    if (type === 'login') {
      userStore.login({ email, password }).then(() => {
        router.push(routes.todos.path);
      });
    }
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        {type === 'login'
          ? dictionary.auth.loginTitle
          : dictionary.auth.registrationTitle}
      </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <Input
            value={email}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder={dictionary.auth.emailPlaceholder}
          />
          <Input
            value={password}
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder={dictionary.auth.passwordPlaceholder}
          />
        </div>
        <Button
          text={dictionary.buttons.submit}
          className={styles.submitButton}
        />
      </form>
      <div className={styles.linkSection}>
        <span>
          {type === 'login'
            ? dictionary.auth.dontHaveAnAccountQuestion
            : dictionary.auth.alreadyHaveAnAccountQuestion}
        </span>
        <Link
          href={`/${currentLocale}${
            type === 'login' ? routes.registration.path : routes.login.path
          }`}
          className={styles.link}
        >
          {type === 'login'
            ? dictionary.auth.registrationTitle
            : dictionary.auth.loginTitle}
        </Link>
      </div>
    </section>
  );
});
