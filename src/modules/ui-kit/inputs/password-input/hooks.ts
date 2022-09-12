import cx from 'classnames';
import { useState, useEffect } from 'react';
import { russianLanguage, name, minLength } from './constants';
import { PasswordErrors } from '../types';
import styles from '../styles.module.scss';

export const useValidation = (
  value: string,
  requestError: number,
  isHasFocus: boolean,
  handleValid: (valid: boolean, name: string) => void
) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<PasswordErrors>(PasswordErrors.None);
  const [caps, setCaps] = useState<boolean>();
  const passwordRegExp =
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]/;
  const spaceRegExp = /\s/;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => setCaps(e.getModifierState('CapsLock'));
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    setErrorMessage(russianLanguage.errorsText[error]);

    if (caps && isHasFocus) {
      setError(PasswordErrors.CapsLock);
    } else if (!passwordRegExp.test(value) || spaceRegExp.test(value) || value.length < minLength) {
      setError(PasswordErrors.IncorrectPassword);
      handleValid(false, name);
    } else if (requestError) {
      setError(PasswordErrors.Request);
      handleValid(true, name);
    } else {
      setError(PasswordErrors.None);
      handleValid(true, name);
    }
  }, [caps, value, requestError, isHasFocus, error]);
  return { error, errorMessage };
};

export const useClassNames = (
  isHasFocus: boolean,
  error: number,
  value: string,
  isPasswordVisible: boolean,
  isMessage?: boolean
) => {
  const isCapsLockError = isHasFocus && error === PasswordErrors.CapsLock;
  const isValidityError = !isHasFocus && error !== PasswordErrors.None && value;

  const inputClassName = cx(styles.input, {
    [styles['input-error']]: isCapsLockError || isValidityError,
  });
  const inputLabelClassName = cx(styles.label, {
    [styles['label-visible']]: isHasFocus || value,
  });
  const inputMessageClassName = cx(styles.message, {
    [styles['message-visible']]: isMessage && isHasFocus && !value,
    [styles['message-error']]: isCapsLockError || isValidityError,
  });
  const warningIconClassName = cx(styles.warning, {
    [styles['warning-active']]: isCapsLockError || isValidityError,
  });
  const passwordButtonClassName = cx(styles.password, {
    [styles['password-visible']]: (isHasFocus || value) && isPasswordVisible,
    [styles['password-hidden']]: (isHasFocus || value) && !isPasswordVisible,
  });
  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
    passwordButtonClassName,
  };
};
