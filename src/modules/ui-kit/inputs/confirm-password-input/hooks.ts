import cx from 'classnames';
import { useState, useEffect } from 'react';
import { name, russianLanguage } from './constants';
import { ConfirmPasswordErrors } from '../types';

export const useValidation = (
  value: string,
  requestError: number,
  isHasFocus: boolean,
  handleValid: (valid: boolean, name: string) => void
) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<ConfirmPasswordErrors>(ConfirmPasswordErrors.None);
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
      setError(ConfirmPasswordErrors.CapsLock);
    } else if (!passwordRegExp.test(value) || spaceRegExp.test(value)) {
      setError(ConfirmPasswordErrors.IncorrectPassword);
      handleValid(false, name);
    } else if (requestError === 1) {
      setError(ConfirmPasswordErrors.Request);
      handleValid(true, name);
    } else {
      setError(ConfirmPasswordErrors.None);
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
  const isCapsLockError = isHasFocus && error === ConfirmPasswordErrors.CapsLock;
  const isValidityError = !isHasFocus && error !== ConfirmPasswordErrors.None && value;

  const inputClassName = cx('input', {
    'input-error': isCapsLockError || isValidityError,
  });
  const inputLabelClassName = cx('label', {
    'label-visible': isHasFocus || value,
  });
  const inputMessageClassName = cx('input-message', {
    'input-message-error': isCapsLockError || isValidityError,
  });
  const warningIconClassName = cx('warning', {
    'warning-active': isCapsLockError || isValidityError,
  });
  const passwordButtonClassName = cx('password', {
    'password-visible': value && isPasswordVisible,
    'password-hidden': value && !isPasswordVisible,
  });

  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
    passwordButtonClassName,
  };
};
