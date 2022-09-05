import * as React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { AuthPassportForm, AuthTelephoneForm } from '../../../ui-kit';
import { russianLanguage } from './constants';
import { Props } from './types';
import './styles.scss';

export const MainFormWrapper = ({ onRegisterPopupOpen }: Props) => {
  const [selectedForm, setSelectedForm] = useState<string>('telephone');

  const telephoneClassName = cn('toggle', { 'toggle-active': selectedForm === 'telephone' });
  const passportClassName = cn('toggle', { 'toggle-active': selectedForm === 'passport' });

  const changeForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    setSelectedForm(name);
  };

  return (
    <div className="main-form-container">
      <h2 className="title">{russianLanguage.title}</h2>
      <div className="toggle-container">
        <button name="telephone" className={telephoneClassName} onClick={changeForm}>
          {russianLanguage.telephoneButtonText}
        </button>
        <button name="passport" className={passportClassName} onClick={changeForm}>
          {russianLanguage.passportButtonText}
        </button>
      </div>
      {selectedForm === 'telephone' && <AuthTelephoneForm />}
      {selectedForm === 'passport' && <AuthPassportForm />}
      <div className="description">
        <a href="#">{russianLanguage.demoText}</a>
        <a href="#">{russianLanguage.forgetText}</a>
      </div>
      <button className="register-button" onClick={onRegisterPopupOpen}>
        {russianLanguage.registerButtonText}
      </button>
    </div>
  );
};
