import cx from 'classnames';
import { useState, useEffect } from 'react';
import { russianLanguage, name } from './constants';
import { PasswordErrors } from '../types';
import * as classes from '../styles.module.scss';

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

  const inputClassName = cx([classes.input], {
    [classes.inputError]: isCapsLockError || isValidityError,
  });
  const inputLabelClassName = cx([classes.label], {
    [classes.labelVisible]: isHasFocus || value,
  });
  const inputMessageClassName = cx([classes.message], {
    [classes.messageVisible]: isMessage && isHasFocus && !value,
    [classes.messageError]: isCapsLockError || isValidityError,
  });
  const warningIconClassName = cx([classes.warning], {
    [classes.warningActive]: isCapsLockError || isValidityError,
  });
  const passwordButtonClassName = cx([classes.password], {
    [classes.passwordVisible]: value && isPasswordVisible,
    [classes.passwordHidden]: value && !isPasswordVisible,
  });
  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
    passwordButtonClassName,
  };
};
