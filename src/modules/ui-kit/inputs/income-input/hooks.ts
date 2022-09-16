import { useState, useEffect } from "react";
import { englishLanguage, name } from "./constants";
import { IncomeErrors } from "../types";
import cx from "classnames";
import styles from '../styles.module.scss';

export const useValidation = (
  value: string,
  requestError: number,
  isHasFocus: boolean,
  handleValid: (valid: boolean, name: string) => void,
  name: string
) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [error, setError] = useState<IncomeErrors>(IncomeErrors.None);
  const [caps, setCaps] = useState<boolean>(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) =>
      setCaps(e.getModifierState("CapsLock"));
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const incomeRegExp = /^[0-9'$',.-]+$/i;
    setErrorMessage(englishLanguage.errorsText[error]);
    if (!incomeRegExp.test(value) || value == "") {
	console.log('tut')
      setError(IncomeErrors.IncorrectIncome);
      handleValid(false, name);
    } else if (requestError) {
      setError(IncomeErrors.Request);
      handleValid(true, name);
    } else {
      setError(IncomeErrors.None);
      handleValid(true, name);
    }
  }, [value, caps, requestError, isHasFocus, error]);

  return { error, errorMessage };
};

export const useClassNames = (
  isHasFocus: boolean,
  error: IncomeErrors,
  value: string
) => {
  const isCapsLockError = isHasFocus && error === IncomeErrors.CapsLock;
  const isValidityError = !isHasFocus && error !== IncomeErrors.None && value;

  const inputClassName = cx(styles.input, {
    [styles["input-error"]]: isCapsLockError || isValidityError,
  });
  const inputLabelClassName = cx(styles.label, {
    [styles["label-visible"]]: isHasFocus || value,
  });
  const inputMessageClassName = cx(styles.message, {
    [styles["message-error"]]: isCapsLockError || isValidityError,
  });
  const warningIconClassName = cx(styles.warning, {
    [styles["warning-active"]]: isCapsLockError || isValidityError,
  });

  return {
    inputClassName,
    inputLabelClassName,
    inputMessageClassName,
    warningIconClassName,
  };
};
