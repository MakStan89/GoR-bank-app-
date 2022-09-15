import * as React from 'react';
import { Props } from './types';
import styles from './styles.module.scss';

export const ResidentRadiobutton = ({ name, checked, text, onClick }: Props) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.radio}
        type="radio"
        name={name}
        checked={checked}
        onClick={onClick}
        readOnly
      />
      <label className={styles.label}>{text}</label>
    </div>
  );
};
