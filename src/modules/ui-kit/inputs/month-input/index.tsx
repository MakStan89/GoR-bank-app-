import * as React from "react";
import { useState } from "react";
import { useClassNames, useValidation } from "./hooks";
import { MonthProps } from "../types";
import styles from '../styles.module.scss';

export const MonthInput = ({
  value,
  handleChange,
  handleValid,
  request,
  name,
  placeholder,
  minValue,
  maxValue
}: MonthProps) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error } = useValidation(value, request, isHasFocus, handleValid);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const incomeRegExp = /^[0-9]+$/i;

    if (!incomeRegExp.test(value)) {
      e.target.value = value.replace(/[^\d]/g, "");
    }
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
	if (+(value) < minValue) {
		e.target.value = String(minValue);
		handleChange(e);
	}
	if (+(value) > maxValue) {
		e.target.value = String(maxValue);
		handleChange(e);
	}
  }

  const { inputClassName } = useClassNames(isHasFocus, error, value);
  return (
    <div className={styles.container}>
      <input
        className={inputClassName}
        placeholder={placeholder}
        type="text"
        name={name}
        autoComplete="off"
        required={true}
        onChange={handleChange}
        onInput={handleInput}
		onBlur={handleBlur}
        value={value ?? ""}
        maxLength={20}
      />
    </div>
  );
};
