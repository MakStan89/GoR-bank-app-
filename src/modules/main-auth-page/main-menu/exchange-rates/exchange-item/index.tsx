import * as React from "react";
import { ItemCurrency } from "../../../../main-page/exchange/currency-item/types";
import styles from './styles.module.scss';

export const ExchangeItem = ({
  name,
  fullName,
  image,
  buying,
  selling,
}: ItemCurrency) => {
  return (
    <div className={styles.row}>
      <div className={styles['currency-info']}>
        <img src={image} alt={image} />
        <div className={styles['currency-name']}>
          <strong>{name}</strong>
          <label className={styles['full-name']}>{fullName}</label>
        </div>
      </div>
      <div className={styles['currency-rates']}>
        <div className={styles.cost}>{buying}</div>
        <div className={styles.cost}>{selling}</div>
      </div>
    </div>
  );
};
