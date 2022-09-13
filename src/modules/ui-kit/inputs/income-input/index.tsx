import * as React from 'react';
import NumberFormat from 'react-number-format';
import { useState, useEffect } from 'react';
import { useClassNames, useValidation } from './hooks';
import { IncomeProps } from '../types';
import { englishLanguage, name } from './constants';
import styles from '../styles.module.scss';

export const IncomeInput = ({ value, handleChange, handleValid, request, isEIN }: IncomeProps) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, request, isHasFocus, handleValid);

  const { inputClassName, warningIconClassName, inputMessageClassName } = useClassNames(
    isHasFocus,
    error,
    value
  );
  return (
    <div className="input-container">
      {isEIN ? (
        <input
          className={inputClassName}
          placeholder={englishLanguage.placeholderText}
          type="text"
          name={name}
          autoComplete="off"
          required={true}
          onChange={handleChange}
          value={value ?? ''}
          maxLength={20}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        />
      ) : (
        <NumberFormat
          className={inputClassName}
          thousandSeparator={true}
          fixedDecimalScale={true}
          decimalScale={2}
          name={name}
          onChange={handleChange}
          value={value ?? ''}
          prefix={'$'}
        />
      )}

      {isEIN ? (
        <>
          <span className={inputMessageClassName}>{errorMessage}</span>
          <div className="icons-container icons-container-loan">
            <span className={warningIconClassName} />
          </div>
        </>
      ) : null}
    </div>
  );
};
