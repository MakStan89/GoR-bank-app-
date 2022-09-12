import * as React from 'react';
import { useState } from 'react';
import { useClassNames, useValidation } from './hooks';
import { maxLength, name } from './constants';
import { Props } from '../types';
import '../styles.scss';

export const PasswordInput = ({
  value,
  handleChange,
  handleValid,
  request,
  isMessage,
  labelText,
  placeholderText,
}: Props) => {
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

  return (
    <div className="input-container">
      <span className={inputLabelClassName}>{labelText}</span>
      <input
        className={inputClassName}
        name={name}
        placeholder={placeholderText}
        type={isPasswordVisible ? 'text' : 'password'}
        autoComplete="off"
        value={value ?? ''}
        onChange={handleChange}
        maxLength={maxLength}
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
