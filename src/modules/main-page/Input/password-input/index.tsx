import * as React from 'react';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import { useValidation } from './validation';
import { InputProps } from '../types';
import { russianLanguage } from './constants';
import '../styles.scss';

export const PasswordInput = ({ onValidly, onValue, requestError }: InputProps) => {
  const [value, setValue] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { validly, error, errorMessage } = useValidation(value, isHasFocus, requestError);

  const inputClassName = cn(value ? (error ? 'input-error' : 'input-active') : 'input');
  const errorClassName = cn(error ? 'error-active' : 'error');
  const warningIconClassName = cn(error ? 'warning-active' : 'warning');
  const passwordButtonClassName = cn(
    isHasFocus || value ? (isPasswordVisible ? 'password-visible' : 'password-hidden') : 'password'
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    setValue(value);
  };

  useEffect(() => onValidly(validly), [validly]);
  useEffect(() => onValue(value), [value]);

  return (
    <div className="input-container">
      <input
        className={inputClassName}
        name="password"
        placeholder={russianLanguage.placeholderText}
        type={isPasswordVisible ? 'text' : 'password'}
        autoComplete="off"
        onChange={handleChange}
        value={value ?? ''}
        maxLength={20}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <div className="icons-container">
        <button
          className={passwordButtonClassName}
          type="button"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        />
        <span className={warningIconClassName} />
      </div>
      <label className="label">{russianLanguage.labelText}</label>
      <span className={errorClassName}>{errorMessage}</span>
    </div>
  );
};
