import * as React from "react";
import NumberFormat from "react-number-format";
import { useState } from "react";
import { useClassNames, useValidation } from "./hooks";
import { IncomeProps } from "../types";
import {
  useTransformValueInNumber,
  useToFormat,
} from "../../../loans/apply-loan-page/hooks";
import styles from "../styles.module.scss";

export const IncomeInput = ({
  value,
  handleChange,
  handleValid,
  request,
  placeholder,
  name,
  minValue,
  maxValue,
}: IncomeProps) => {
  const [isHasFocus, setHasFocus] = useState<boolean>(false);
  const { error } = useValidation(value, request, isHasFocus, handleValid, name);
  const { inputClassName } = useClassNames(isHasFocus, error, value);

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+useTransformValueInNumber(value) < minValue) {
      e.target.value = useToFormat(minValue);
      handleChange(e);
    }

    if (+useTransformValueInNumber(value) > maxValue) {
      e.target.value = useToFormat(minValue);
      handleChange(e);
    }
  };

  return (
    <div className={styles.container}>
      <NumberFormat
        className={inputClassName}
        placeholder={placeholder}
        thousandSeparator={true}
        fixedDecimalScale={true}
        decimalScale={2}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value ?? ""}
        prefix={"$"}
      />
    </div>
  );
};
