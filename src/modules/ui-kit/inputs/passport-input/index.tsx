import * as React from 'react';
import { useState } from 'react';
import { useClassNames, useValidation } from './hooks';
import { russianLanguage, maxLength, name } from './constants';
import { Props } from '../types';
import '../styles.scss';

export const PassportInput = ({
  value,
  handleChange,
  handleValid,
  request,
  labelText,
  placeholderText,
}: Props) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, request, isHasFocus, handleValid);
  const { inputLabelClassName, inputClassName, warningIconClassName, inputMessageClassName } =
    useClassNames(isHasFocus, error, value);

  return (
    <div className="input-container">
      <span className={inputLabelClassName}>{labelText}</span>
      <input
        className={inputClassName}
        name={name}
        placeholder={placeholderText}
        type="text"
        autoComplete="off"
        value={value ?? ''}
        onChange={handleChange}
        maxLength={maxLength}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <div className="icons-container">
        <span className={warningIconClassName} />
      </div>
      <span className={inputMessageClassName}>{errorMessage}</span>
    </div>
  );
};
