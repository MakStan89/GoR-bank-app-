import cx from 'classnames';
import { useState, useEffect } from 'react';
import { russianLanguage, VALUE_MIN_LENGTH, name } from './constants';
import { PassportErrors } from '../types';
import styles from '../styles.module.scss';

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
    const allowedSymbolsRegExp = /^[-0-9a-zA-Zа-яА-Я]+$/g;
    const spaceRegExp = /\s/;

    setErrorMessage(russianLanguage.errorsText[error]);

    if (caps && isHasFocus) {
      setError(PassportErrors.CapsLock);
    } else if (!value || value.length < VALUE_MIN_LENGTH) {
      setError(PassportErrors.Length);
      handleValid(false, name);
    } else if (!allowedSymbolsRegExp.test(value) || spaceRegExp.test(value)) {
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

  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
  };
};
