import * as React from 'react';
import { Props } from './types';
import styles from './styles.module.scss';

export const BackButton = ({ handleClick, text }: Props) => {
  return (
    <button className={styles.back} onClick={handleClick}>
      {text}
    </button>
  );
};
