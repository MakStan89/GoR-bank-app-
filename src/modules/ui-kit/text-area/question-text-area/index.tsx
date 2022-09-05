import * as React from 'react';
import { useClassNames } from './classnames';
import { ChangeEvent, useState } from 'react';
import { useValidation } from './validation';
import { Props } from './types';
import './styles.scss';

export const QuestionTextArea = ({ name, text, value, handleChange, handleValid }: Props) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(value, handleValid, name);
  const {
    labelClassName,
    textAreaClassName,
    errorIconClassName,
    errorMessageClassName,
    counterClassName,
  } = useClassNames(isHasFocus, error, value);

  const textAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
  };

  return (
    <div className="text-area-container">
      <span className={labelClassName}>{text}</span>
      <textarea
        name={name}
        placeholder={text}
        rows={value.length > 33 ? 2 : 1}
        className={textAreaClassName}
        value={value}
        onChange={textAreaChange}
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
