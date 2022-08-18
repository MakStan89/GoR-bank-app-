import { useState, useEffect } from 'react';
import { russianLanguage } from './constants';

export const useValidation = (
  name: string,
  value: string,
  focus: boolean,
  requestError: boolean
) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [validly, setValidly] = useState<boolean>(false);
  const [caps, setCaps] = useState<boolean>(false);

  const passwordRegExp =
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]/;
  const passportRegExp = /[0-9a-zA-Z!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]/;
  const telephoneRegExp = /[x]/;
  const spaceRegExp = /\s/;

  const onKeyDown = (e: KeyboardEvent) => setCaps(e.getModifierState('CapsLock'));

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, ['CapsLock']);

  useEffect(() => {
    console.log(requestError);
    switch (name) {
      case 'password':
        if (caps && focus) {
          setErrorMessage(russianLanguage.capsLockError);
          setError(true);
        } else if (value.length < 6) {
          setErrorMessage(russianLanguage.passwordErrors.lengthError);
          setError(true);
          setValidly(false);
        } else if (!passwordRegExp.test(value)) {
          setErrorMessage(russianLanguage.passwordErrors.validityError);
          setError(true);
          setValidly(false);
        } else if (spaceRegExp.test(value)) {
          setErrorMessage(russianLanguage.spaceError);
          setError(true);
          setValidly(false);
        } else if (requestError) {
          setErrorMessage(russianLanguage.passwordErrors.requestError);
          setError(true);
          setValidly(true);
        } else {
          setErrorMessage('');
          setError(false);
          setValidly(true);
        }
        break;
      case 'passport':
        if (caps && focus) {
          setErrorMessage(russianLanguage.capsLockError);
          setError(true);
        } else if (value.length < 3) {
          setErrorMessage(russianLanguage.passportErrors.lengthError);
          setError(true);
          setValidly(false);
        } else if (!passportRegExp.test(value)) {
          setErrorMessage(russianLanguage.passportErrors.validityError);
          setError(true);
          setValidly(false);
        } else if (spaceRegExp.test(value)) {
          setErrorMessage(russianLanguage.spaceError);
          setError(true);
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
        break;
      case 'telephone':
        if (!value) {
          setValidly(false);
        } else if (telephoneRegExp.test(value)) {
          focus && setErrorMessage(russianLanguage.telephoneError);
          setError(true);
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
    }
  }, [value, onKeyDown, focus, requestError]);
  return { validly, error, errorMessage };
};
