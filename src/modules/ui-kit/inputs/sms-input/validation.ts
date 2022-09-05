import { useState, useEffect } from 'react';
import { russianLanguage } from './constants';

export const useValidation = (
  value: string,
  requestError: number,
  handleValid: (v: boolean, n: string) => void
) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<number | null>(null);

  useEffect(() => {
    const smsRegExp = /[*]/;
    setErrorMessage(russianLanguage.errorText[error]);
    if (!value) {
      handleValid(false, 'sms_code');
    } else if (smsRegExp.test(value)) {
      handleValid(false, 'sms_code');
    } else if (requestError) {
      handleValid(false, 'sms_code');
      setError(1);
    } else if (requestError) {
      setError(2);
      handleValid(true, 'sms_code');
    } else if (requestError) {
      setError(3);
      handleValid(true, 'sms_code');
    } else if (requestError) {
      setError(4);
      handleValid(false, 'sms_code');
    } else {
      setError(0);
      handleValid(true, 'sms_code');
    }
  }, [value, requestError]);

  return { error, errorMessage };
};
