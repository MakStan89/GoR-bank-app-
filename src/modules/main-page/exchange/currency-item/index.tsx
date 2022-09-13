import * as React from 'react';
import { ItemCurrency } from './types';
import styles from './styles.module.scss';

export const CurrencyItem = ({ name, fullName, image, buying, selling }: ItemCurrency) => {
  return (
    <div className={styles.row}>
      <div className={styles.content}>
        <img src={image} alt={image} />
        <div className={styles.name}>
          <strong>{name}</strong>
          <label className={styles.full}>{fullName}</label>
        </div>
      </div>
      <div className={styles.rates}>
        <div className={styles.cost}>{buying}</div>
        <div className={styles.cost}>{selling}</div>
      </div>
    </div>
  );
};
