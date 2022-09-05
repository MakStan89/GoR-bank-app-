import * as React from 'react';
import { useState, ChangeEvent } from 'react';
import { useValidation } from './validation';
import { useClassNames } from './classnames';
import { russianLanguage } from './constants';
import { Props } from '../types';
import '../styles.scss';

export const PasswordInput = ({ value, handleChange, handleValid, request, isMessage }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, request, isHasFocus, handleValid);
  const {
    inputLabelClassName,
    inputClassName,
    warningIconClassName,
    inputMessageClassName,
    passwordButtonClassName,
  } = useClassNames(isHasFocus, error, value, isPasswordVisible, isMessage);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  return (
    <div className="input-container">
      <span className={inputLabelClassName}>{russianLanguage.labelText}</span>
      <input
        className={inputClassName}
        name="password"
        placeholder={russianLanguage.placeholderText}
        type={isPasswordVisible ? 'text' : 'password'}
        autoComplete="off"
        value={value ?? ''}
        onChange={inputChange}
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
      <span className={inputMessageClassName}>{errorMessage}</span>
    </div>
  );
};
