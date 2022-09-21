import * as React from 'react';
import { useState } from 'react';
import { useClassNames, useValidation } from './hooks';
import { VALUE_MAX_LENGTH, name } from './constants';
import { Props } from '../types';
import styles from '../styles.module.scss';

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
    <div className={styles.container}>
      <span className={inputLabelClassName}>{labelText}</span>
      <input
        className={inputClassName}
        name={name}
        placeholder={placeholderText}
        type="text"
        autoComplete="off"
        value={value ?? ''}
        onChange={handleChange}
        maxLength={VALUE_MAX_LENGTH}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <div className={styles.icons}>
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
