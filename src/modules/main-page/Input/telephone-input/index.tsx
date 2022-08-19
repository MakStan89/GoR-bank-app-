import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactInputMask from 'react-input-mask';
import cn from 'classnames';
import { useValidation } from './validation';
import { InputProps } from '../types';
import { russianLanguage } from './constants';
import '../styles.scss';

export const TelephoneInput = ({ onValidly, onValue, requestError }: InputProps) => {
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
      <ReactInputMask
        className={inputClassName}
        name="telephone"
        placeholder={russianLanguage.placeholderText}
        type="tel"
        autoComplete="off"
        mask="+\7 999 9999 9999"
        value={(null || undefined) ?? value}
        onChange={handleChange}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <div className="icons-container">
        <span className={errorClassName} />
      </div>
      <label className="label">{russianLanguage.labelText}</label>
      <span className={warningIconClassName}>{errorMessage}</span>
    </div>
  );
};
