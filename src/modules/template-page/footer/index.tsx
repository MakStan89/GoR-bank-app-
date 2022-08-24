import * as React from 'react';
import { russianLanguage } from './constants';
import './styles.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <h3>{russianLanguage.titleText}</h3>
      <div className="icons-container">
        <span className="google" />
        <span className="apple" />
        <h3>{russianLanguage.downloadText}</h3>
      </div>
    </footer>
  );
};
