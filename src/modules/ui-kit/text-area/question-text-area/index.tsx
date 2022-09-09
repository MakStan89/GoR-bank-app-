import * as React from 'react';
import { useState } from 'react';
import { useClassNames, useValidation } from './hooks';
import { Props } from './types';
import styles from './styles.module.scss';

export const QuestionTextArea = ({ name, text, value, handleChange, handleValid }: Props) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, name, handleValid);
  const {
    labelClassName,
    textAreaClassName,
    errorIconClassName,
    errorMessageClassName,
    counterClassName,
  } = useClassNames(isHasFocus, error, value);

  return (
    <div className={styles.container}>
      <span className={labelClassName}>{text}</span>
      <textarea
        name={name}
        placeholder={text}
        rows={value.length > 33 ? 2 : 1}
        className={textAreaClassName}
        value={value}
        onChange={handleChange}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      <span className={errorIconClassName} />
      {error && !isHasFocus ? (
        <span className={errorMessageClassName}>{errorMessage}</span>
      ) : (
        <span className={counterClassName}>{value.length}/50</span>
      )}
    </div>
  );
};
