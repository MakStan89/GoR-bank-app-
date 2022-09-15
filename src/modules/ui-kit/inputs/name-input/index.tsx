import * as React from 'react';
import { useState } from 'react';
import { useClassNames, useValidation } from './hooks';
import { russianLanguage, VALUE_MAX_LENGTH, name } from './constants';
import { Props } from '../types';
import styles from '../styles.module.scss';

export const NameInput = ({ value, handleChange, handleValid }: Props) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, isHasFocus, handleValid);
  const { inputLabelClassName, inputClassName, warningIconClassName, inputMessageClassName } =
    useClassNames(isHasFocus, error, value);

  return (
    <div className={styles.container}>
      <span className={inputLabelClassName}>{russianLanguage.labelText}</span>
      <input
        className={inputClassName}
        name={name}
        placeholder={russianLanguage.placeholderText}
        type="text"
        autoComplete="off"
        value={value ?? ''}
        onChange={handleChange}
        maxLength={VALUE_MAX_LENGTH}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <div className={styles['name-icon']}>
        <span className={warningIconClassName} />
      </div>
      <span className={inputMessageClassName}>{errorMessage}</span>
    </div>
  );
};
