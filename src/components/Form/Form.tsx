import * as React from 'react';
import { useState, FC } from 'react';
import './Form.scss';
import { Input } from '../Input/Input';

export const Form: FC = () => {
  const [selectedForm, setSelectedForm] = useState('telephone');
  const [formValid, setFormValid] = useState(false);

  const changeForm = (e: any) => {
    e.preventDefault();
    setSelectedForm(e.target.name);
  };

  return (
    <form noValidate>
      <h2>Вход</h2>
      <div className="toggle-container">
        <button
          name="telephone"
          className={`toggle ${selectedForm === 'telephone' && 'toggle-active'}`}
          onClick={changeForm}
        >
          По телефону
        </button>
        <button
          name="passport"
          className={`toggle ${selectedForm === 'passport' && 'toggle-active'}`}
          onClick={changeForm}
        >
          По паспорту
        </button>
      </div>
      {selectedForm === 'telephone' && (
        <>
          <Input name="telephone" type="tel" placeholder="Телефон" text="Номер телефона" />
          <Input name="password" type="password" placeholder="Пароль" text="Пароль" />
        </>
      )}
      {selectedForm === 'passport' && (
        <>
          <Input name="passport" type="text" placeholder="Паспорт" text="Номер паспорта" />
          <Input name="password" type="password" placeholder="Пароль" text="Пароль" />
        </>
      )}
      <button className={formValid ? 'enter-active' : 'enter'} type="submit">
        Войти
      </button>
      <div className="description">
        <a href="#">Демо-режим</a>
        <a href="#">Забыли пароль?</a>
      </div>
      <button className="register">Зарегестрироваться</button>
    </form>
  );
};
