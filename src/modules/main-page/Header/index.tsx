import * as React from 'react';
import { useState, FC } from 'react';
import cn from 'classnames';
import { russian } from './constants';
import './styles.scss';

export const Header: FC = () => {
  const [language, setLanguage] = useState('russian');

  const russianName = cn('language', { 'language-active': language === 'russian' });
  const englishName = cn('language', { 'language-active': language === 'english' });

  const changeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    setLanguage(name);
  };

  return (
    <header className="header">
      <div className="logo" />
      <nav className="navigation">
        <div>
          <span className="location" />
          <a href="#">{russian.location}</a>
        </div>
        <div>
          <span className="courses" />
          <a href="#">{russian.courses}</a>
        </div>
        <div>
          <span className="contacts" />
          <a href="#">{russian.contacts}</a>
        </div>
      </nav>
      <div>
        <button name="russian" className={russianName} onClick={changeLanguage}>
          Ru
        </button>
        <button name="english" className={englishName} onClick={changeLanguage}>
          En
        </button>
      </div>
    </header>
  );
};
