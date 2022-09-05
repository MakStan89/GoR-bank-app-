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
    const telephoneRegExp = /[x]/;

    setErrorMessage(russianLanguage.errorText[error]);

    if (!value) {
      handleValid(false, 'telephone');
    } else if (telephoneRegExp.test(value)) {
      handleValid(false, 'telephone');
      setError(1);
    } else if (requestError) {
      setError(2);
      handleValid(true, 'telephone');
    } else if (requestError) {
      setError(3);
      handleValid(true, 'telephone');
    } else {
      setError(0);
      handleValid(true, 'telephone');
    }
  }, [value, requestError, error]);

  return { error, errorMessage };
};
