import * as React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import { russianLanguage } from './constants';
import { TelephoneInput, PassportInput, PasswordInput } from '../../ui-kit/input';
import s from './styles.module.scss';

export const Form = () => {
  const [selectedForm, setSelectedForm] = useState<string>('telephone');
  const [isLoginValid, setLoginValid] = useState<boolean>(false);
  const [isPasswordValid, setPasswordValid] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isRequestError, setRequestError] = useState<boolean>(false);

  const telephoneClassName = cn(s.toggle, { [s.toggleActive]: selectedForm === 'telephone' });
  const passportClassName = cn(s.toggle, { [s.toggleActive]: selectedForm === 'passport' });
  const enterDisableClassName = cn(isLoginValid && isPasswordValid ? s.enterActive : s.enter);

  const changeForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    e.preventDefault();
    setSelectedForm(name);
  };
  const handleLoginValidity = (loginValidity: boolean) => {
    setLoginValid(loginValidity);
  };
  const handlePasswordValidity = (passwordValidity: boolean) => {
    setPasswordValid(passwordValidity);
  };
  const handleLoginValue = (login: string) => {
    setLogin(login);
  };
  const handlePasswordValue = (password: string) => {
    setPassword(password);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestError(true);
  };

  return (
    <form className={s.authForm} noValidate onSubmit={handleSubmit}>
      <h2 className={s.formTitle}>{russianLanguage.title}</h2>
      <div className={s.toggleContainer}>
        <button name="telephone" className={telephoneClassName} onClick={changeForm}>
          {russianLanguage.telephoneButtonText}
        </button>
        <button name="passport" className={passportClassName} onClick={changeForm}>
          {russianLanguage.passportButtonText}
        </button>
      </div>
      {selectedForm === 'telephone' && (
        <>
          <TelephoneInput
            requestError={isRequestError}
            onValidly={handleLoginValidity}
            onValue={handleLoginValue}
          />
          <PasswordInput
            requestError={isRequestError}
            onValidly={handlePasswordValidity}
            onValue={handlePasswordValue}
          />
        </>
      )}
      {selectedForm === 'passport' && (
        <>
          <PassportInput
            requestError={isRequestError}
            onValidly={handleLoginValidity}
            onValue={handleLoginValue}
          />
          <PasswordInput
            requestError={isRequestError}
            onValidly={handlePasswordValidity}
            onValue={handlePasswordValue}
          />
        </>
      )}
      <button className={enterDisableClassName} type="submit">
        {russianLanguage.enterButtonText}
      </button>
      <div className={s.description}>
        <a href="#">{russianLanguage.demoText}</a>
        <a href="#">{russianLanguage.forgetText}</a>
      </div>
      <button className={s.register}>{russianLanguage.registerButtonText}</button>
    </form>
  );
};
