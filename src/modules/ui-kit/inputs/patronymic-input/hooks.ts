import cx from 'classnames';
import { useState, useEffect } from 'react';
import { russianLanguage, VALUE_MIN_LENGTH, name } from './constants';
import { PatronymicErrors } from '../types';
import styles from '../styles.module.scss';

export const useValidation = (
  value: string,
  isHasFocus: boolean,
  handleValid: (valid: boolean, name: string) => void
) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<PatronymicErrors>(PatronymicErrors.Message);

  useEffect(() => {
    const allowedSymbolsRegExp = /^[-'\sa-zA-Zа-яА-Я]+$/g;
    const startSymbolsRegExp = /^[-'~\s]/;

    setErrorMessage(russianLanguage.errorsText[error]);

    if (!value) {
      setError(PatronymicErrors.Message);
      handleValid(true, name);
    } else if (value.length < VALUE_MIN_LENGTH) {
      setError(PatronymicErrors.Length);
      handleValid(false, name);
    } else if (!allowedSymbolsRegExp.test(value) || startSymbolsRegExp.test(value)) {
      setError(PatronymicErrors.IncorrectSymbols);
      handleValid(false, name);
    } else {
      setError(PatronymicErrors.None);
      handleValid(true, name);
    }
  }, [value, isHasFocus, error]);

  return { error, errorMessage };
};

export const useClassNames = (isHasFocus: boolean, error: PatronymicErrors, value: string) => {
  const isValidityError =
    !isHasFocus && error !== (PatronymicErrors.None && PatronymicErrors.Message) && value;

  const inputClassName = cx(styles.input, {
    [styles['input-error']]: isValidityError,
  });
  const inputLabelClassName = cx(styles.name, {
    [styles['name-visible']]: isHasFocus || value,
  });
  const inputMessageClassName = cx(styles.message, {
    [styles['message-visible']]: error === PatronymicErrors.Message,
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
