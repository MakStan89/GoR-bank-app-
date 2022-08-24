import * as React from 'react';
import './styles.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <h3>© 2022 Affinity Bank</h3>
      <div className="icons-container">
        <span className="google" />
        <span className="apple" />
        <h3>Мобильное приложение</h3>
      </div>
    </footer>
  );
};
