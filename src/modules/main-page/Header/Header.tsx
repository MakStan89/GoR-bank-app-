import * as React from 'react';
import { FC, useState } from 'react';
import './Header.scss';

export const Header: FC = () => {
  const [language, setLanguage] = useState('russian');

  const changeLanguage = (e: any) => {
    setLanguage(e.target.name);
  };

  return (
    <header className="header">
      <div className="logo" />
      <nav className="navigation">
        <div>
          <span className="location" />
          <a href="#">Банкоматы и отделения</a>
        </div>
        <div>
          <span className="courses" />
          <a href="#">Курсы валют</a>
        </div>
        <div>
          <span className="contacts" />
          <a href="#">Контакты</a>
        </div>
      </nav>
      <div>
        <button
          name="russian"
          className={`language ${language === 'russian' && 'language-active'}`}
          onClick={changeLanguage}
        >
          Ru
        </button>
        <button
          name="english"
          className={`language ${language === 'english' && 'language-active'}`}
          onClick={changeLanguage}
        >
          En
        </button>
      </div>
    </header>
  );
};
