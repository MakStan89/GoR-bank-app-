import * as React from 'react';
import ReactInputMask from 'react-input-mask';
import { useState, ChangeEvent } from 'react';
import { useValidation } from './validation';
import { russianLanguage } from './constants';
import { Props } from '../types';
import '../styles.scss';
import { useClassNames } from './classnames';

export const SmsInput = ({ value, handleChange, handleValid, request }: Props) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, request, handleValid);
  const { inputLabelClassName, inputClassName, warningIconClassName, inputMessageClassName } =
    useClassNames(isHasFocus, error, value);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  return (
    <div className="input-container">
      <span className={inputLabelClassName}>{russianLanguage.labelText}</span>
      <ReactInputMask
        className={inputClassName}
        name="sms_code"
        placeholder={russianLanguage.placeholderText}
        type="tel"
        autoComplete="off"
        mask="999999"
        maskChar="*"
        value={value ?? ''}
        onChange={inputChange}
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
