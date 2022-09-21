import * as React from 'react';
import { Link } from 'react-router-dom';
import { englishLanguage, russianLanguage } from './constants';
import styles from './styles.module.scss';
import { Props } from './types';

export const HeaderUserInfo = ({isAuth, logout, photo, name, logoutIcon}: Props) => {

  const user = isAuth ? styles['user-visible'] : styles['user-hidden'];


  return (
    <div className={user}>
      <Link to="#">
        <div className={styles['user-info']}>
          <div className={styles['user-photo']}>{photo}</div>
          <span className={styles['user-name']}>{name}</span>
        </div>
      </Link>
      <Link to="/" onClick={logout}>
        <div className={styles.logout}>
          {logoutIcon}
          <span className={styles['logout-text']}>{englishLanguage.logout}</span>
        </div>
      </Link>
    </div>
  );
};
