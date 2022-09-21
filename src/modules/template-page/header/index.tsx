import * as React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  russianLanguage,
  englishLanguage,
  LANGUAGE_BUTTON_RU_TEXT,
  LANGUAGE_BUTTON_EN_TEXT,
  USER_NAME,
} from './constants';
import { HeaderUserInfo } from './header-user-info';
import styles from './styles.module.scss';
import { UserHeaderPhoto } from '../../../content/icons/main-auth-page/userHeaderPhoto';
import { LogOutHeader } from '../../../content/icons/main-auth-page/logoutHeader';
import { AuthContext } from '../../..';


export const Header = () => {
  const [language, setLanguage] = useState<string>('english');

  const russianName = cn(styles.language, { [styles['language-active']] : language === 'russian' });
  const englishName = cn(styles.language, { [styles['language-active']]: language === 'english' });
  const changeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    setLanguage(name);
  };

  const { isAuth, fn } = React.useContext(AuthContext);
  let location = useLocation();

  const headerClassName = (!isAuth && location.pathname ==='/')  ? styles['header-white'] : styles['header-black'];
  const navigation = isAuth ? styles['auth-navigation'] : styles.navigation;

  return (
    <header className={headerClassName}>
      <div className={styles['header-container']}>
        <div className={styles.logo} />
        <nav className={navigation}>
          <div>
            <span className={styles.location} />
            <a href="#">{englishLanguage.locationText}</a>
          </div>
          <div>
            <span className={styles.courses} />
            <Link to="/exchange">{englishLanguage.coursesText}</Link>
          </div>
          <div>
            <span className={styles.contacts} />
            <Link to="/contacts">{englishLanguage.contactsText}</Link>
          </div>
        </nav>
        <HeaderUserInfo isAuth={isAuth} logout={fn} photo={<UserHeaderPhoto />} name={USER_NAME} logoutIcon={<LogOutHeader />} />
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
