import * as React from 'react';
import { useState } from 'react';
import { useClassNames, useValidation } from './hooks';
import { russianLanguage, maxLength, name } from './constants';
import { Props } from '../types';
import * as classes from '../styles.module.scss';

export const PassportInput = ({ value, handleChange, handleValid, request }: Props) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, request, isHasFocus, handleValid);
  const { inputLabelClassName, inputClassName, warningIconClassName, inputMessageClassName } =
    useClassNames(isHasFocus, error, value);

  return (
    <div className={classes.container}>
      <span className={inputLabelClassName}>{russianLanguage.labelText}</span>
      <input
        className={inputClassName}
        name={name}
        placeholder={russianLanguage.placeholderText}
        type="text"
        autoComplete="off"
        value={value ?? ''}
        onChange={handleChange}
        maxLength={maxLength}
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
