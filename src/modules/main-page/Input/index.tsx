import * as React from 'react';
import { useState } from 'react';
import cn from 'classnames';
import { InputProps } from './types';
import './styles.scss';

export const Input = ({ name, placeholder, type, text }: InputProps) => {
  const [isHasFocus, setIsFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [validly, setValidly] = useState<boolean>(false);

  const labelName = cn(isHasFocus ? 'label-active' : value ? 'label-active' : 'label');
  const inputName = cn(validly ? 'input' : value ? 'input-error' : 'input');
  const errorName = cn(validly ? 'error' : value ? 'error-active' : 'error');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, validity, validationMessage } = e.target;
    setValue(value);
    setError(validationMessage);
    setValidly(validity.valid);
  };

  return (
    <div className="input-container">
      <span className={labelName}>{text}</span>
      <input
        className={inputName}
        name={name}
        placeholder={placeholder}
        type={type}
        autoComplete="off"
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        onChange={handleChange}
        value={value || ''}
        minLength={6}
        maxLength={13}
      />
      <span className={errorName}>{error}</span>
    </div>
  );
};
