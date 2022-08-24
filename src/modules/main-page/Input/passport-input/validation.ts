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
    const passportRegExp = /[0-9a-zA-Z!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]/;
    const spaceRegExp = /\s/;

    if (caps && focus) {
      setErrorMessage(russianLanguage.errorsText.capsLockError);
      setError(true);
    } else if (value.length < 3) {
      setValidly(false);
      if (value) {
        setErrorMessage(russianLanguage.errorsText.lengthError);
        setError(true);
      } else {
        setErrorMessage('');
        setError(false);
      }
    } else if (!passportRegExp.test(value)) {
      setValidly(false);
      if (value) {
        setErrorMessage(russianLanguage.errorsText.validityError);
        setError(true);
      } else {
        setErrorMessage('');
        setError(false);
      }
    } else if (spaceRegExp.test(value)) {
      setValidly(false);
      if (value) {
        setErrorMessage(russianLanguage.errorsText.spaceError);
        setError(true);
      } else {
        setErrorMessage('');
        setError(false);
      }
    } else if (requestError) {
      setErrorMessage('');
      setError(true);
      setValidly(true);
    } else {
      setErrorMessage('');
      setError(false);
      setValidly(true);
    }
  }, [focus, value, onKeyDown, requestError]);

  return { validly, error, errorMessage };
};
