import * as React from 'react';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import { useValidation } from './validation';
import { InputProps } from '../types';
import { russianLanguage } from './constants';
import '../styles.scss';

export const PassportInput = ({ onValidly, onValue, requestError }: InputProps) => {
  const [value, setValue] = useState<string>('');
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { validly, error, errorMessage } = useValidation(value, isHasFocus, requestError);

  const inputClassName = cn(value ? (error ? 'input-error' : 'input-active') : 'input');
  const errorClassName = cn(value ? (error ? 'error-active' : 'error') : 'error');
  const warningIconClassName = cn(value ? (error ? 'warning-active' : 'warning') : 'warning');

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
        name="passport"
        placeholder={russianLanguage.placeholderText}
        type="text"
        autoComplete="off"
        onChange={handleChange}
        value={(null || undefined) ?? value}
        maxLength={20}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <div className="icons-container">
        <span className={warningIconClassName} />
      </div>
      <label className="label">{russianLanguage.labelText}</label>
      <span className={errorClassName}>{errorMessage}</span>
    </div>
  );
};
