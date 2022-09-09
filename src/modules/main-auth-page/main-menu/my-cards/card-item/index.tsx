import * as React from "react";
import { CardsType } from "./types";
import styles from './styles.module.scss';

export const CardItem = ({ id, name, logo, hiddenNumber, number, date, background, balance, system }: CardsType) => {
  return (
    <div className={styles.card} >
      <p className={styles['card-name']}>{name}</p>
      <img className={styles.logo} src={logo} alt={logo} />
      <img className={styles['hidden-number']} src={hiddenNumber} alt={hiddenNumber} />
      <p className={styles.number}>{number.slice(12,)}</p>
      <p className={styles.date}>{date}</p>
      <p className={styles.balance}>{balance}</p>
      <img className={styles.system} src={system} alt={system} />
    </div>
  );
};
