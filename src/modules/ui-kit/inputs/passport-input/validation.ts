import { useState, useEffect } from 'react';
import { russianLanguage } from './constants';

export const useValidation = (
  value: string,
  requestError: number,
  isHasFocus: boolean,
  handleValid: (v: boolean, n: string) => void
) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<number | null>(null);
  const [caps, setCaps] = useState<boolean>(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => setCaps(e.getModifierState('CapsLock'));
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const passportRegExp = /[0-9a-zA-Z!"#$%&'()*+,№./:;<=>?@[\]^_`{|}~-]/;
    const spaceRegExp = /\s/;

    setErrorMessage(russianLanguage.errorsText[error]);

    if (caps && isHasFocus) {
      setError(1);
    } else if (value.length < 3) {
      setError(2);
      handleValid(false, 'passport');
    } else if (!passportRegExp.test(value) || spaceRegExp.test(value)) {
      setError(3);
      handleValid(false, 'passport');
    } else if (requestError) {
      setError(4);
      handleValid(true, 'passport');
    } else {
      setError(0);
      handleValid(true, 'passport');
    }
  }, [value, caps, requestError, isHasFocus, error]);

  return { error, errorMessage };
};
