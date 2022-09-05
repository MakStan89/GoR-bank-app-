import * as React from 'react';
import { useState, ChangeEvent } from 'react';
import { useValidation } from './validation';
import { useClassNames } from './classnames';
import { russianLanguage } from './constants';
import { Props } from '../types';
import '../styles.scss';

export const ConfirmPasswordInput = ({ value, handleChange, handleValid, request }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, request, isHasFocus, handleValid);
  const {
    inputLabelClassName,
    inputClassName,
    warningIconClassName,
    inputMessageClassName,
    passwordButtonClassName,
  } = useClassNames(isHasFocus, error, value, isPasswordVisible);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  return (
    <div className="input-container">
      <span className={inputLabelClassName}>{russianLanguage.labelText}</span>
      <input
        className={inputClassName}
        name="confirm_password"
        placeholder={russianLanguage.placeholderText}
        type={isPasswordVisible ? 'text' : 'password'}
        autoComplete="off"
        onChange={inputChange}
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
      <span className={inputMessageClassName}>{errorMessage}</span>
    </div>
  );
};
