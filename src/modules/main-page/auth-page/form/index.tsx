import * as React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { AuthTelephoneForm } from './telephone-auth-form';
import { AuthPassportForm } from './passport-auth-form';
import { russianLanguage } from './constants';
import { Props } from './types';
import styles from './styles.module.scss';

export const MainFormWrapper = React.memo(({ onRegisterPopupOpen }: Props) => {
  const [selectedForm, setSelectedForm] = useState<string>('telephone');

  const telephoneClassName = cn(styles.toggle, {
    [styles['toggle-active']]: selectedForm === 'telephone',
  });
  const passportClassName = cn(styles.toggle, {
    [styles['toggle-active']]: selectedForm === 'passport',
  });

  const changeForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    setSelectedForm(name);
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>{russianLanguage.title}</h2>
      <div className={styles.toggles}>
        <button name="telephone" className={telephoneClassName} onClick={changeForm}>
          {russianLanguage.telephoneButtonText}
        </button>
        <button name="passport" className={passportClassName} onClick={changeForm}>
          {russianLanguage.passportButtonText}
        </button>
      </div>
      {selectedForm === 'telephone' && <AuthTelephoneForm />}
      {selectedForm === 'passport' && <AuthPassportForm />}
      <div className={styles.description}>
        <a href="#">{russianLanguage.demoText}</a>
        <a href="#">{russianLanguage.forgetText}</a>
      </div>
      <button className={styles.button} onClick={onRegisterPopupOpen}>
        {russianLanguage.registerButtonText}
      </button>
    </div>
  );
});
