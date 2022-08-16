import * as React from 'react';
import { useState, FC } from 'react';
import cn from 'classnames';
import './form.scss';
import { russian } from './constants';
import { Input } from '../Input/Input';

export const Form: FC = () => {
  const [selectedForm, setSelectedForm] = useState('telephone');
  const [formValid, setFormValid] = useState(false);

  const telephoneName = cn('toggle', { 'toggle-active': selectedForm === 'telephone' });
  const passportName = cn('toggle', { 'toggle-active': selectedForm === 'passport' });
  const enterName = cn(formValid ? 'enter-active' : 'enter');

  const changeForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    e.preventDefault();
    setSelectedForm(name);
  };

  const handleFormValid = (a: any) => {
    const valid = { ...a, a };
    console.log(valid);
  };

  return (
    <form className="auth-form" noValidate>
      <h2 className="form-title">{russian.title}</h2>
      <div className="toggle-container">
        <button name="telephone" className={telephoneName} onClick={changeForm}>
          {russian.telephoneButton}
        </button>
        <button name="passport" className={passportName} onClick={changeForm}>
          {russian.passportButton}
        </button>
      </div>
      {selectedForm === 'telephone' && (
        <>
          <Input
            name="telephone"
            type="tel"
            placeholder={russian.telephoneInput.placeholder}
            text={russian.telephoneInput.text}
            valid={handleFormValid}
          />
          <Input
            name="password"
            type="password"
            placeholder={russian.passwordInput.placeholder}
            text={russian.passwordInput.text}
            valid={handleFormValid}
          />
        </>
      )}
      {selectedForm === 'passport' && (
        <>
          <Input
            name="passport"
            type="text"
            placeholder={russian.passportInput.placeholder}
            text={russian.passportInput.text}
            valid={handleFormValid}
          />
          <Input
            name="password"
            type="password"
            placeholder={russian.passwordInput.placeholder}
            text={russian.passwordInput.text}
            valid={handleFormValid}
          />
        </>
      )}
      <button className={enterName} type="submit">
        {russian.enterButton}
      </button>
      <div className="description">
        <a href="#">{russian.demoText}</a>
        <a href="#">{russian.forgetText}</a>
      </div>
      <button className="register">{russian.registerButton}</button>
    </form>
  );
};
