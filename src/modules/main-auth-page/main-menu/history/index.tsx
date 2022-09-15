import * as React from 'react';
import { ContainerComponent } from '../container-component';
import { englishLanguage, russianLanguage } from './constants';
import styles from './styles.module.scss';

export const History = () => {

  return (
    <div className={styles['outer-container']}>
      <ContainerComponent title={englishLanguage.title}>
        <div className={styles.content}>
          <div className={styles['payment-line']}>
            <div className={styles['date-time']}>
              <span className={styles.date}>{englishLanguage.date1}</span>
              <span className={styles.time}>{englishLanguage.time1}</span>
            </div>
            <div className={styles.info}>
              <span className={`${styles.icon} ${styles['icon-transfer-back']}`} />
              <span className={styles.text}>{englishLanguage.info1}</span>
            </div>
            <span className={styles.type}>{englishLanguage.type1}</span>
            <span className={styles.sum}>{englishLanguage.amount1}</span>
          </div>
          <div className={styles['payment-line']}>
            <div className={styles['date-time']}>
              <span className={styles.date}>{englishLanguage.date2}</span>
              <span className={styles.time}>{englishLanguage.time1}</span>
            </div>
            <div className={styles.info}>
              <span className={`${styles.icon} ${styles['icon-payment']}`} />
              <span className={styles.text}>{englishLanguage.info2}</span>
            </div>
            <span className={styles.type}>{englishLanguage.type2}</span>
            <span className={`${styles.sum} ${styles['negative-sum']}`}>{englishLanguage.amount2}</span>
          </div>
          <div className={styles['payment-line']}>
            <div className={styles['date-time']}>
              <span className={styles.date}>{englishLanguage.date2}</span>
              <span className={styles.time}>{englishLanguage.time2}</span>
            </div>
            <div className={styles.info}>
            <span className={`${styles.icon} ${styles['icon-payment']}`} />
              <span className={styles.text}>{englishLanguage.info3}</span>
            </div>
            <span className={styles.type}>{englishLanguage.type2}</span>
            <span className={`${styles.sum} ${styles['negative-sum']}`}>{englishLanguage.amount3}</span>
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
};
