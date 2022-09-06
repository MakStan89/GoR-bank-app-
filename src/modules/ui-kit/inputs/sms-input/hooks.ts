import cx from 'classnames';
import { useState, useEffect } from 'react';
import { russianLanguage, name } from './constants';
import { SmsErrors } from '../types';

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
    } else if (requestError) {
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
    } else {
      setError(SmsErrors.None);
      handleValid(true, name);
    }
  }, [value, requestError]);

  return { error, errorMessage };
};

export const useClassNames = (isHasFocus: boolean, error: SmsErrors, value: string) => {
  const inputClassName = cx('input', {
    'input-error': error !== SmsErrors.None,
    'input-disable': error === SmsErrors.Disable,
  });
  const inputLabelClassName = cx('label', {
    'label-visible': isHasFocus || value,
  });
  const inputMessageClassName = cx('input-message', {
    'input-message-visible': error === SmsErrors.Disable,
    'input-message-error': error !== SmsErrors.None,
  });
  const warningIconClassName = cx('warning', {
    'warning-active': error !== SmsErrors.None,
  });

  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
  };
};
