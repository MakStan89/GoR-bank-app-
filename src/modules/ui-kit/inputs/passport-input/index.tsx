import * as React from 'react';
import { useState, ChangeEvent } from 'react';
import { useValidation } from './validation';
import { useClassNames } from './classnames';
import { russianLanguage } from './constants';
import { Props } from '../types';
import '../styles.scss';

export const PassportInput = ({ value, handleChange, handleValid, request }: Props) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, request, isHasFocus, handleValid);
  const { inputLabelClassName, inputClassName, warningIconClassName, inputMessageClassName } =
    useClassNames(isHasFocus, error, value);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  return (
    <div className="input-container">
      <span className={inputLabelClassName}>{russianLanguage.labelText}</span>
      <input
        className={inputClassName}
        name="passport"
        placeholder={russianLanguage.placeholderText}
        type="text"
        autoComplete="off"
        value={value ?? ''}
        onChange={inputChange}
        maxLength={20}
        minLength={3}
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
