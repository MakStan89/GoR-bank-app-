import * as React from 'react';
import { russianLanguage } from './constants';
import * as classes from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h3>{russianLanguage.titleText}</h3>
      <div className={classes.icons}>
        <span className={classes.google} />
        <span className={classes.apple} />
        <h3>{russianLanguage.downloadText}</h3>
      </div>
    </footer>
  );
};
