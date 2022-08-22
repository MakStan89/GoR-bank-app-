import { useState, useEffect } from 'react';
import { russianLanguage } from './constants';

export const useValidation = (value: string, focus: boolean, requestError: boolean) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [validly, setValidly] = useState<boolean>(false);

  useEffect(() => {
    const telephoneRegExp = /[x]/;

    if (!value) {
      setValidly(false);
    } else if (telephoneRegExp.test(value)) {
      !focus ? setErrorMessage(russianLanguage.errorText) : setErrorMessage('');
      !focus ? setError(true) : setError(false);
      setValidly(false);
    } else if (requestError) {
      setErrorMessage('');
      setError(true);
      setValidly(true);
    } else {
      setErrorMessage('');
      setError(false);
      setValidly(true);
    }
  }, [value, focus, requestError]);

  return { validly, error, errorMessage };
};
