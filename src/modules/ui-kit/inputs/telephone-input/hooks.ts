import cx from 'classnames';
import { useState, useEffect } from 'react';
import { russianLanguage, name } from './constants';
import { TelephoneErrors } from '../types';
import styles from '../styles.module.scss';

export const useValidation = (
  value: string,
  requestError: number,
  handleValid: (valid: boolean, name: string) => void
) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<TelephoneErrors>(TelephoneErrors.None);

  useEffect(() => {
    const telephoneRegExp = /[x]/;

    setErrorMessage(russianLanguage.errorText[error]);

    if (!value) {
      handleValid(false, name);
    } else if (telephoneRegExp.test(value)) {
      handleValid(false, name);
      setError(TelephoneErrors.IncorrectNumber);
    }
    // TODO throw errors depending on responses from backend
    else if (requestError) {
      setError(TelephoneErrors.Registration);
      handleValid(true, name);
    } else if (requestError) {
      setError(TelephoneErrors.Request);
      handleValid(true, name);
    }
    //
    else {
      setError(TelephoneErrors.None);
      handleValid(true, name);
    }
  }, [value, requestError, error]);

  return { error, errorMessage };
};

export const useClassNames = (isHasFocus: boolean, error: TelephoneErrors, value: string) => {
  const inputClassName = cx(styles.input, {
    [styles['input-error']]: !isHasFocus && error && value,
  });
  const inputLabelClassName = cx(styles.label, {
    [styles['label-visible']]: isHasFocus || value,
  });
  const inputMessageClassName = cx(styles.message, {
    [styles['message-error']]: !isHasFocus && error && value,
  });
  const warningIconClassName = cx(styles.warning, {
    [styles['warning-active']]: !isHasFocus && error && value,
  });

  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
  };
};
