import * as React from 'react';
import { SelectItemCurrency } from './types';
import styles from './styles.module.scss';

export const SelectItem = ({ image, name, fullName }: SelectItemCurrency) => {
  return (
    <div className={styles.content}>
      <img className={styles.flag} src={image} alt={image} />
      <strong>{name}</strong>
      <label className={styles.name}>{fullName}</label>
    </div>
  );
};
