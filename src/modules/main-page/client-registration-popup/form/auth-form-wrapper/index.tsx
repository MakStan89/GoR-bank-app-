import * as React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { AuthTelephoneForm } from '../telephone-auth-form';
import { AuthPassportForm } from '../passport-auth-form';
import { BackButton } from '../../../../ui-kit';
import { russianLanguage } from './constants';
import { Props } from './types';
import './styles.scss';

export const AuthFormWrapper = ({ onClose }: Props) => {
  const [selectedForm, setSelectedForm] = useState<string>('telephone');

  const telephoneClassName = cn('toggle', { 'toggle-active': selectedForm === 'telephone' });
  const passportClassName = cn('toggle', { 'toggle-active': selectedForm === 'passport' });

  const changeForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    setSelectedForm(name);
  };

  return (
    <section className="auth-form-container">
      <BackButton text={russianLanguage.BackButtonText} handleClick={onClose} />
      <div className="auth-popup-form">
        <h2 className="form-title">{russianLanguage.title}</h2>
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
      </div>
    </section>
  );
};
