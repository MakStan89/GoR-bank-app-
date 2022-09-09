import cx from 'classnames';
import { useState, useEffect } from 'react';
import { russianLanguage, name } from './constants';
import { SmsErrors } from '../types';
import styles from '../styles.module.scss';

export const useValidation = (
  value: string,
  requestError: number,
  handleValid: (valid: boolean, name: string) => void
) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<SmsErrors>(SmsErrors.None);

  useEffect(() => {
    const smsRegExp = /[*]/;
    setErrorMessage(russianLanguage.errorText[error]);
    if (!value) {
      handleValid(false, name);
    } else if (smsRegExp.test(value)) {
      handleValid(false, name);
    }
    // TODO throw errors depending on responses from backend
    else if (requestError) {
      handleValid(false, name);
      setError(SmsErrors.Disable);
    } else if (requestError) {
      setError(SmsErrors.FirstAttempt);
      handleValid(true, name);
    } else if (requestError) {
      setError(SmsErrors.SecondAttempt);
      handleValid(true, name);
    } else if (requestError) {
      setError(SmsErrors.FailedAttempts);
      handleValid(false, name);
    }
    //
    else {
      setError(SmsErrors.None);
      handleValid(true, name);
    }
  }, [value, requestError]);

  return { error, errorMessage };
};

export const useClassNames = (isHasFocus: boolean, error: SmsErrors, value: string) => {
  const inputClassName = cx(styles.input, {
    [styles['input-error']]: error !== SmsErrors.None,
    [styles['input-disable']]: error === SmsErrors.Disable,
  });
  const inputLabelClassName = cx(styles.label, {
    [styles['label-visible']]: isHasFocus || value,
  });
  const inputMessageClassName = cx(styles.message, {
    [styles['message-visible']]: error === SmsErrors.Disable,
    [styles['message-error']]: error !== SmsErrors.None,
  });
  const warningIconClassName = cx(styles.warning, {
    [styles['warning-active']]: error !== SmsErrors.None,
  });

  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
  };
};
