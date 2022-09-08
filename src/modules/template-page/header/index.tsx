import * as React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Props } from './types';
import {
  russianLanguage,
  englishLanguage,
  LANGUAGE_BUTTON_RU_TEXT,
  LANGUAGE_BUTTON_EN_TEXT,
} from './constants';
import s from './styles.module.scss';

export const Header = ({ isDark = false }: Props) => {
  const [language, setLanguage] = useState<string>('english');

  const russianName = cn(s.language, { [s.languageActive] : language === 'russian' });
  const englishName = cn(s.language, { [s.languageActive] : language === 'english' });
  const headerClassName = cn(isDark ? s.headerWhite : s.headerBlack);

  const changeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    setLanguage(name);
  };

  return (
    <header className={headerClassName}>
      <div className={s.headerContainer}>
        <div className={s.logo} />
        <nav className={s.navigation}>
          <div>
            <span className={s.location} />
            <a href="#">{englishLanguage.locationText}</a>
          </div>
          <div>
            <span className="courses" />
            <Link to="/exchange">{englishLanguage.coursesText}</Link>
          </div>
          <div>
            <span className="contacts" />
            <Link to="/contacts">{englishLanguage.contactsText}</Link>
          </div>
        </nav>
        <div>
          <button name="russian" className={russianName} onClick={changeLanguage}>
            {LANGUAGE_BUTTON_RU_TEXT}
          </button>
          <button name="english" className={englishName} onClick={changeLanguage}>
            {LANGUAGE_BUTTON_EN_TEXT}
          </button>
        </div>
      </div>
    </header>
  );
};
