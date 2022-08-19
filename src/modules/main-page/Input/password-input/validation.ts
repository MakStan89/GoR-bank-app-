import { useState, useEffect } from 'react';
import { russianLanguage } from './constants';

export const useValidation = (value: string, focus: boolean, requestError: boolean) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [validly, setValidly] = useState<boolean>(false);
  const [caps, setCaps] = useState<boolean>(false);

  const onKeyDown = (e: KeyboardEvent) => setCaps(e.getModifierState('CapsLock'));

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    const passwordRegExp =
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]/;
    const spaceRegExp = /\s/;

    if (caps && focus) {
      setErrorMessage(russianLanguage.errorsText.capsLockError);
      setError(true);
    } else if (value.length < 6) {
      setErrorMessage(russianLanguage.errorsText.lengthError);
      setError(true);
      setValidly(false);
    } else if (!passwordRegExp.test(value)) {
      setErrorMessage(russianLanguage.errorsText.validityError);
      setError(true);
      setValidly(false);
    } else if (spaceRegExp.test(value)) {
      setErrorMessage(russianLanguage.errorsText.spaceError);
      setError(true);
      setValidly(false);
    } else if (requestError) {
      setErrorMessage(russianLanguage.errorsText.requestError);
      setError(true);
      setValidly(true);
    } else {
      setErrorMessage('');
      setError(false);
      setValidly(true);
    }
  }, [value, onKeyDown, focus, requestError]);
  return { validly, error, errorMessage };
};
