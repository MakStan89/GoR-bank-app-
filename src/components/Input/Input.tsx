import * as React from 'react';
import { useState, FC } from 'react';
import './Input.scss';
import { InputProps } from '../../modules/types/InputProps';

export const Input: FC<InputProps> = ({ name, placeholder, type, text }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  const [validly, setValidly] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, validity, validationMessage } = e.target;
    setValue(value);
    setError(validationMessage);
    setValidly(validity.valid);
  };

  return (
    <div className="input-container">
      <span className={isFocus ? 'label-active' : value ? 'label-active' : 'label'}>{text}</span>
      <input
        className={validly ? 'input' : value ? 'input-error' : 'input'}
        name={name}
        placeholder={placeholder}
        type={type}
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
      <span className={validly ? 'error' : value ? 'error-active' : 'error'}>{error}</span>
    </div>
  );
};
