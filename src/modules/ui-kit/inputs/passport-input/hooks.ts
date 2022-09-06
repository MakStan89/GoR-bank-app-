import cx from 'classnames';
import { useState, useEffect } from 'react';
import { russianLanguage, minLength, name } from './constants';
import { PassportErrors } from '../types';

export const useValidation = (
  value: string,
  requestError: number,
  isHasFocus: boolean,
  handleValid: (valid: boolean, name: string) => void
) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<PassportErrors>(PassportErrors.None);
  const [caps, setCaps] = useState<boolean>(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => setCaps(e.getModifierState('CapsLock'));
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const passportRegExp = /[0-9a-zA-Z!"#$%&'()*+,№./:;<=>?@[\]^_`{|}~-]/;
    const spaceRegExp = /\s/;

    setErrorMessage(russianLanguage.errorsText[error]);

    if (caps && isHasFocus) {
      setError(PassportErrors.CapsLock);
    } else if (value.length < minLength) {
      setError(PassportErrors.Length);
      handleValid(false, name);
    } else if (!passportRegExp.test(value) || spaceRegExp.test(value)) {
      setError(PassportErrors.IncorrectPassport);
      handleValid(false, name);
    } else if (requestError) {
      setError(PassportErrors.Request);
      handleValid(true, name);
    } else {
      setError(PassportErrors.None);
      handleValid(true, name);
    }
  }, [value, caps, requestError, isHasFocus, error]);

  return { error, errorMessage };
};

export const useClassNames = (isHasFocus: boolean, error: PassportErrors, value: string) => {
  const isCapsLockError = isHasFocus && error === PassportErrors.CapsLock;
  const isValidityError = !isHasFocus && error !== PassportErrors.None && value;

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

  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
  };
};
