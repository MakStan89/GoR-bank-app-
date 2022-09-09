import cx from 'classnames';
import { useState, useEffect } from 'react';
import { SecurityQuestionErrors } from './types';
import { russianLanguage, maxLength, minLength } from './constants';
import styles from './styles.module.scss';

export const useValidation = (
  value: string,
  name: string,
  handleValid: (valid: boolean, name: string) => void
) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<SecurityQuestionErrors>(SecurityQuestionErrors.None);

  useEffect(() => {
    const textAreaRegExp = /[0-9a-zA-Zа-яА-Я!"#$%&'()*+,№./:;<=>?@[\]^_`{|}~-]/;

    setErrorMessage(russianLanguage.errorsText[error]);

    if (value.length < minLength) {
      setError(SecurityQuestionErrors.LowLength);
      handleValid(false, name);
    } else if (!textAreaRegExp.test(value)) {
      setError(SecurityQuestionErrors.IncorrectQuestion);
      handleValid(false, name);
    } else if (value.length > maxLength) {
      setError(SecurityQuestionErrors.HighLength);
      handleValid(false, name);
    } else {
      setError(SecurityQuestionErrors.None);
      handleValid(true, name);
    }
  }, [value, error]);

  return { error, errorMessage };
};

export const useClassNames = (
  isHasFocus: boolean,
  error: SecurityQuestionErrors,
  value: string
) => {
  const textAreaClassName = cx(styles.area, {
    [styles['area-active']]: value,
    [styles['area-error']]: value && error && !isHasFocus,
  });
  const labelClassName = cx(styles.label, {
    [styles['label-active']]: isHasFocus || value,
  });
  const errorMessageClassName = cx(styles.message, {
    [styles['message-active']]: value && error && !isHasFocus,
  });
  const errorIconClassName = cx(styles.icon, {
    [styles['icon-active']]: value && error && !isHasFocus,
  });
  const counterClassName = cx(styles.counter, {
    [styles['counter-active']]: value,
  });

  return {
    textAreaClassName,
    labelClassName,
    errorMessageClassName,
    errorIconClassName,
    counterClassName,
  };
};
