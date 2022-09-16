import * as React from "react";
import { useEffect } from "react";
import { RangeInput } from "../../../../../ui-kit";
import { IncomeInput } from "../../../../../ui-kit";
import { LoanAmountProps } from "./types";
import { loanValues, name } from "./constants";
import { useToFormat } from "../../../hooks";
import styles from "./styles.module.scss";

export const LoanAmount = ({
  title,
  subtitle,
  values,
  handleChange,
  handleValid,
}: LoanAmountProps) => {
  const { minValue, maxValue, defaultValue } = loanValues;

  useEffect(() => {
    values.income = useToFormat(defaultValue);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>

      <div className={styles.range}>
        <RangeInput
          width={343}
          value={values.income}
          handleChange={handleChange}
          minValue={minValue}
          maxValue={maxValue}
          name={name}
        />
      </div>
      <div className={styles.input}>
        <IncomeInput
          value={values.income}
          handleChange={handleChange}
          handleValid={handleValid}
          request={null}
          name={name}
          placeholder={""}
          minValue={minValue}
          maxValue={maxValue}
        />
      </div>

      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  );
};
