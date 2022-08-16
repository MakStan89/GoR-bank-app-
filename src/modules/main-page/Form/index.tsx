import * as React from 'react';
import { useState, FC } from 'react';
import cn from 'classnames';
import { russianLanguage } from './constants';
import { Input } from '../input';
import './styles.scss';

export const Form: FC = () => {
  const [selectedForm, setSelectedForm] = useState<string>('telephone');
  const [formValid, setFormValid] = useState<boolean>(false);

  const telephoneName = cn('toggle', { 'toggle-active': selectedForm === 'telephone' });
  const passportName = cn('toggle', { 'toggle-active': selectedForm === 'passport' });
  const enterName = cn(formValid ? 'enter-active' : 'enter');

  const changeForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    e.preventDefault();
    setSelectedForm(name);
  };

  return (
    <form className="auth-form" noValidate>
      <h2 className="form-title">{russianLanguage.title}</h2>
      <div className="toggle-container">
        <button name="telephone" className={telephoneName} onClick={changeForm}>
          {russianLanguage.telephoneButtonText}
        </button>
        <button name="passport" className={passportName} onClick={changeForm}>
          {russianLanguage.passportButtonText}
        </button>
      </div>
      {selectedForm === 'telephone' && (
        <>
          <Input
            name="telephone"
            type="tel"
            placeholder={russianLanguage.telephoneInputText.placeholder}
            text={russianLanguage.telephoneInputText.text}
          />
          <Input
            name="password"
            type="password"
            placeholder={russianLanguage.passwordInputText.placeholder}
            text={russianLanguage.passwordInputText.text}
          />
        </>
      )}
      {selectedForm === 'passport' && (
        <>
          <Input
            name="passport"
            type="text"
            placeholder={russianLanguage.passportInputText.placeholder}
            text={russianLanguage.passportInputText.text}
          />
          <Input
            name="password"
            type="password"
            placeholder={russianLanguage.passwordInputText.placeholder}
            text={russianLanguage.passwordInputText.text}
          />
        </>
      )}
      <button className={enterName} type="submit">
        {russianLanguage.enterButtonText}
      </button>
      <div className="description">
        <a href="#">{russianLanguage.demoText}</a>
        <a href="#">{russianLanguage.forgetText}</a>
      </div>
      <button className="register">{russianLanguage.registerButtonText}</button>
    </form>
  );
};
