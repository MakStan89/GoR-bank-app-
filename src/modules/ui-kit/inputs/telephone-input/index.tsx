import * as React from 'react';
import ReactInputMask from 'react-input-mask';
import { useState } from 'react';
import { useValidation, useClassNames } from './hooks';
import { russianLanguage, name } from './constants';
import { Props } from '../types';
import * as classes from '../styles.module.scss';

export const TelephoneInput = ({ value, handleChange, handleValid, request }: Props) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, request, handleValid);
  const { inputLabelClassName, inputClassName, warningIconClassName, inputMessageClassName } =
    useClassNames(isHasFocus, error, value);

  return (
    <div className={classes.container}>
      <span className={inputLabelClassName}>{russianLanguage.labelText}</span>
      <ReactInputMask
        className={inputClassName}
        name={name}
        placeholder={russianLanguage.placeholderText}
        type="tel"
        autoComplete="off"
        mask="+\7 999 999 9999"
        maskChar="x"
        value={value ?? ''}
        onChange={handleChange}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <div className={classes.icons}>
        <span className={warningIconClassName} />
      </div>
      <span className={inputMessageClassName}>{errorMessage}</span>
    </div>
  );
};
