import * as React from 'react';
import ReactInputMask from 'react-input-mask';
import { useState } from 'react';
import { useValidation, useClassNames } from './hooks';
import { name } from './constants';
import { Props } from '../types';
import styles from '../styles.module.scss';

export const TelephoneInput = ({
  value,
  handleChange,
  handleValid,
  request,
  labelText,
  placeholderText,
}: Props) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, request, handleValid);
  const { inputLabelClassName, inputClassName, warningIconClassName, inputMessageClassName } =
    useClassNames(isHasFocus, error, value);

  return (
    <div className={styles.container}>
      <span className={inputLabelClassName}>{labelText}</span>
      <ReactInputMask
        className={inputClassName}
        name={name}
        placeholder={placeholderText}
        type="tel"
        autoComplete="off"
        mask="+\7 999 999 9999"
        maskChar="x"
        value={value ?? ''}
        onChange={handleChange}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <div className={styles.icons}>
        <span className={warningIconClassName} />
      </div>
      <span className={inputMessageClassName}>{errorMessage}</span>
    </div>
  );
};
