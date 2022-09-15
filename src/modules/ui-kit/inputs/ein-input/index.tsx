import * as React from "react";
import NumberFormat from "react-number-format";
import { useState, useEffect } from "react";
import { useClassNames, useValidation } from "./hooks";
import { EinProps } from "../types";
import styles from "../styles.module.scss";

export const EinInput = ({
  value,
  handleChange,
  handleValid,
  request,
  placeholder,
  name,
}: EinProps) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error, errorMessage } = useValidation(
    value,
    request,
    isHasFocus,
    handleValid
  );

  const { inputClassName, warningIconClassName, inputMessageClassName } =
    useClassNames(isHasFocus, error, value);
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
        value={value ?? ""}
        maxLength={20}
      />

      <span className={inputMessageClassName}>{errorMessage}</span>
      <div className={styles.ein}>
        <span className={warningIconClassName} />
      </div>
    </div>
  );
};
