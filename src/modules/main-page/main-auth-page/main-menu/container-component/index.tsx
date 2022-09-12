import * as React from 'react';
import { Props } from './types';
import styles from './styles.module.scss';

export const ContainerComponent = ({ children, title }: Props) => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles['header-text']}>{title}</h2>
      </div>
      {children}
    </div>
  );
};
