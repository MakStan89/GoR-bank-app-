import cx from 'classnames';
import { useState, useEffect } from 'react';
import { name, russianLanguage } from './constants';
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
  const [caps, setCaps] = useState<boolean>(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => setCaps(e.getModifierState('CapsLock'));
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const passwordRegExp =
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]/;
    const spaceRegExp = /\s/;

    setErrorMessage(russianLanguage.errorsText[error]);

    if (caps && isHasFocus) {
      setError(PasswordErrors.CapsLock);
    } else if (!passwordRegExp.test(value) || spaceRegExp.test(value)) {
      setError(PasswordErrors.IncorrectPassword);
      handleValid(false, name);
    } else if (requestError) {
      setError(PasswordErrors.Request);
      handleValid(true, name);
    } else {
      setError(PasswordErrors.None);
      handleValid(true, name);
    }
  }, [value, caps, requestError, isHasFocus, error]);
  return { error, errorMessage };
};

export const useClassNames = (
  isHasFocus: boolean,
  error: number,
  value: string,
  isPasswordVisible: boolean
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
    [styles['message-error']]: isCapsLockError || isValidityError,
  });
  const warningIconClassName = cx(styles.warning, {
    [styles['warning-active']]: isCapsLockError || isValidityError,
  });
  const passwordButtonClassName = cx(styles.password, {
    [styles['password-visible']]: value && isPasswordVisible,
    [styles['password-hidden']]: value && !isPasswordVisible,
  });

  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
    passwordButtonClassName,
  };
};
