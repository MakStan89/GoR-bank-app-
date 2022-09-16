import * as React from 'react';
import { Props, PropsFooter } from './types';
import styles from './styles.module.scss';

export const Telephone = ({ number, text }: Props) => {
  return (
    <div className={styles['telephone-block']}>
      <span className={styles['telephone-block-img']}/>
      <div className={`${styles['telephone-block-item']} ${styles.item}`}>
        <div className={styles['item-number']}>{number}</div>
        <div className={styles['item-text']}>{text}</div>
      </div>
    </div>
  );
};

export const TelephoneFooter = ({ numberFree, textFree, numberInter, textInter }: PropsFooter) => {
  return (
    <div className={styles['telephone-footer']}>
      <span className={styles['telephone-block-img']}/>
      <div className={`${styles['telephone-block-item']} ${styles.item}`}>
        <div className={styles['item-number']}>{numberFree}</div>
        <div className={styles['item-text']}>{textFree}</div>
      </div>
      <div className={`${styles['telephone-block-item']} ${styles.item}`}>
        <div className={styles['item-number']}>{numberInter}</div>
        <div className={styles['item-text']}>{textInter}</div>
      </div>
    </div>
  );
};
