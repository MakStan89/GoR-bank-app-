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
  const [caps, setCaps] = useState<boolean>();
  const passwordRegExp =
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]/;
  const spaceRegExp = /\s/;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => setCaps(e.getModifierState('CapsLock'));
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    setErrorMessage(russianLanguage.errorsText[error]);

    if (caps && isHasFocus) {
      setError(1);
    } else if (!passwordRegExp.test(value) || spaceRegExp.test(value)) {
      setError(2);
      handleValid(false, 'password');
    } else if (requestError === 1) {
      setError(3);
      handleValid(true, 'password');
    } else {
      setError(0);
      handleValid(true, 'password');
    }
  }, [caps, value, requestError, isHasFocus, error]);
  return { error, errorMessage };
};
