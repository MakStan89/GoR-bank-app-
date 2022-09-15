import cx from 'classnames';
import { useState, useEffect } from 'react';
import { russianLanguage, VALUE_MIN_LENGTH, name } from './constants';
import { NameErrors } from '../types';
import styles from '../styles.module.scss';

export const useValidation = (
  value: string,
  isHasFocus: boolean,
  handleValid: (valid: boolean, name: string) => void
) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<NameErrors>(NameErrors.None);

  useEffect(() => {
    const allowedSymbolsRegExp = /^[-'\sa-zA-Zа-яА-Я]+$/g;
    const startSymbolsRegExp = /^[-'~\s]/;

    setErrorMessage(russianLanguage.errorsText[error]);

    if (!value || value.length < VALUE_MIN_LENGTH) {
      setError(NameErrors.Length);
      handleValid(false, name);
    } else if (!allowedSymbolsRegExp.test(value) || startSymbolsRegExp.test(value)) {
      setError(NameErrors.IncorrectSymbols);
      handleValid(false, name);
    } else {
      setError(NameErrors.None);
      handleValid(true, name);
    }
  }, [value, isHasFocus, error]);

  return { error, errorMessage };
};

export const useClassNames = (isHasFocus: boolean, error: NameErrors, value: string) => {
  const isValidityError = !isHasFocus && error !== NameErrors.None && value;

  const inputClassName = cx(styles.input, {
    [styles['input-error']]: isValidityError,
  });
  const inputLabelClassName = cx(styles.label, {
    [styles['label-visible']]: isHasFocus || value,
  });
  const inputMessageClassName = cx(styles.message, {
    [styles['message-error']]: isValidityError,
  });
  const warningIconClassName = cx(styles.warning, {
    [styles['warning-active']]: isValidityError,
  });

  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
  };
};
