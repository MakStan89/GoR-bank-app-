import * as React from 'react';
import ReactInputMask from 'react-input-mask';
import { useState } from 'react';
import { useClassNames, useValidation } from './hooks';
import { russianLanguage, name } from './constants';
import { Props } from '../types';
import '../styles.scss';

export const SmsInput = ({ value, handleChange, handleValid, request }: Props) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, request, handleValid);
  const { inputLabelClassName, inputClassName, warningIconClassName, inputMessageClassName } =
    useClassNames(isHasFocus, error, value);

  return (
    <div className="input-container">
      <span className={inputLabelClassName}>{russianLanguage.labelText}</span>
      <ReactInputMask
        className={inputClassName}
        name={name}
        placeholder={russianLanguage.placeholderText}
        type="tel"
        autoComplete="off"
        mask="999999"
        maskChar="*"
        value={value ?? ''}
        onChange={handleChange}
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
