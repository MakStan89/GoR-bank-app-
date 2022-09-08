import cx from 'classnames';
import { useState, useEffect } from 'react';
import { russianLanguage, name } from './constants';
import { SmsErrors } from '../types';
import * as classes from '../styles.module.scss';

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
  const inputClassName = cx([classes.input], {
    [classes.inputError]: error !== SmsErrors.None,
    [classes.inputDisable]: error === SmsErrors.Disable,
  });
  const inputLabelClassName = cx([classes.label], {
    [classes.labelVisible]: isHasFocus || value,
  });
  const inputMessageClassName = cx([classes.message], {
    [classes.messageVisible]: error === SmsErrors.Disable,
    [classes.messageError]: error !== SmsErrors.None,
  });
  const warningIconClassName = cx([classes.warning], {
    [classes.warningActive]: error !== SmsErrors.None,
  });

  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
  };
};
