import { useState, useEffect } from 'react';
import { russianLanguage } from './constants';

export const useValidation = (
  value: string,
  handleValid: (v: boolean, n: string) => void,
  name: string
) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<number | null>(null);

  useEffect(() => {
    const textAreaRegExp = /[0-9a-zA-Zа-яА-Я!"#$%&'()*+,№./:;<=>?@[\]^_`{|}~-]/;

    setErrorMessage(russianLanguage.errorsText[error]);

    if (value.length < 3) {
      setError(1);
      handleValid(false, name);
    } else if (!textAreaRegExp.test(value)) {
      setError(2);
      handleValid(false, name);
    } else if (value.length > 50) {
      setError(3);
      handleValid(false, name);
    } else {
      setError(0);
      handleValid(true, name);
    }
  }, [value, error]);

  return { error, errorMessage };
};
