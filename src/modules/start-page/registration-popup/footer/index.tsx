import * as React from 'react';
import { russianLanguage } from './constants';
import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>{russianLanguage.titleText}</h3>
      <div className={styles.icons}>
        <span className={styles.google} />
        <span className={styles.apple} />
        <h3>{russianLanguage.downloadText}</h3>
      </div>
    </footer>
  );
};
