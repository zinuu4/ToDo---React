import React from 'react';

import styles from './UserData.module.scss';

export const UserData = () => {
  return (
    <div>
      <h1 className={styles.name}>Zinoviy</h1>
      <span className={styles.email}>lebedzinovij4@gmail.com</span>
    </div>
  );
};
