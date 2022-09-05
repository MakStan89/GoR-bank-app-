import * as React from 'react';
import { russianLanguage } from './constants';
import './styles.scss';

export const Footer = () => {
  return (
    <footer className="register-footer">
      <h3>{russianLanguage.titleText}</h3>
      <div className="register-footer-icons-container">
        <span className="google" />
        <span className="apple" />
        <h3>{russianLanguage.downloadText}</h3>
      </div>
    </footer>
  );
};
