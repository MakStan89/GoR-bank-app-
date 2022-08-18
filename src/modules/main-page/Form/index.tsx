import * as React from 'react';
import { useState, FC } from 'react';
import cn from 'classnames';
import { russianLanguage } from './constants';
import { Input } from '../input';
import './styles.scss';

export const Form: FC = () => {
  const [selectedForm, setSelectedForm] = useState<string>('telephone');
  const [isLoginValid, setLoginValid] = useState<boolean>(false);
  const [isPasswordValid, setPasswordValid] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isRequestError, setRequestError] = useState<boolean>(false);

  const telephoneName = cn('toggle', { 'toggle-active': selectedForm === 'telephone' });
  const passportName = cn('toggle', { 'toggle-active': selectedForm === 'passport' });
  const enterName = cn(isLoginValid && isPasswordValid ? 'enter-active' : 'enter');

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
    console.log({ login, password });
    setRequestError(true);
  };

  return (
    <form className="auth-form" noValidate onSubmit={handleSubmit}>
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
            requestError={isRequestError}
            onValidly={handleLoginValidity}
            onValue={handleLoginValue}
            name="telephone"
            type="tel"
            placeholder={russianLanguage.telephoneInputText.placeholder}
            text={russianLanguage.telephoneInputText.text}
          />
          <Input
            requestError={isRequestError}
            onValidly={handlePasswordValidity}
            onValue={handlePasswordValue}
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
            requestError={isRequestError}
            onValidly={handleLoginValidity}
            onValue={handleLoginValue}
            name="passport"
            type="text"
            placeholder={russianLanguage.passportInputText.placeholder}
            text={russianLanguage.passportInputText.text}
          />
          <Input
            requestError={isRequestError}
            onValidly={handlePasswordValidity}
            onValue={handlePasswordValue}
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
