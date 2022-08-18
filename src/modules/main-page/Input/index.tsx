import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactInputMask from 'react-input-mask';
import cn from 'classnames';
import { useValidation } from './validation';
import { InputProps } from './types';
import './styles.scss';

export const Input = ({
  name,
  placeholder,
  type,
  text,
  onValidly,
  onValue,
  requestError,
}: InputProps) => {
  const [value, setValue] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { validly, error, errorMessage } = useValidation(name, value, isHasFocus, requestError);

  const inputName = cn(value ? (error ? 'input-error' : 'input-active') : 'input');
  const errorName = cn(error ? (value ? 'error-active' : 'error') : 'error');
  const warningIconName = cn(error ? (value ? 'warning-active' : 'warning') : 'warning');
  const passwordButtonName = cn(
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
      {name === 'telephone' ? (
        <ReactInputMask
          className={inputName}
          name={name}
          placeholder={placeholder}
          type={type}
          autoComplete="off"
          mask="+\7 999 9999 9999"
          value={value || ''}
          onChange={handleChange}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        />
      ) : (
        <input
          className={inputName}
          name={name}
          placeholder={placeholder}
          type={name === 'password' ? (isPasswordVisible ? 'text' : 'password') : type}
          autoComplete="off"
          onChange={handleChange}
          value={value || ''}
          maxLength={20}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        />
      )}

      <div className="icons-container">
        {name === 'password' && (
          <button
            className={passwordButtonName}
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        )}
        <span className={warningIconName} />
      </div>
      <label className="label">{text}</label>
      <span className={errorName}>{errorMessage}</span>
    </div>
  );
};
