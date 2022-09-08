import * as React from 'react';
import { useState } from 'react';
import { useClassNames, useValidation } from './hooks';
import { maxLength, name, russianLanguage } from './constants';
import { Props } from '../types';
import * as classes from '../styles.module.scss';

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

  return (
    <div className={classes.container}>
      <span className={inputLabelClassName}>{russianLanguage.labelText}</span>
      <input
        className={inputClassName}
        name={name}
        placeholder={russianLanguage.placeholderText}
        type={isPasswordVisible ? 'text' : 'password'}
        autoComplete="off"
        onChange={handleChange}
        value={value ?? ''}
        maxLength={maxLength}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <div className={classes.icons}>
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
