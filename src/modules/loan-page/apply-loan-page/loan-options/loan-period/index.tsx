import * as React from "react";
import { useEffect } from "react";
import { RangeInput } from "../../../../ui-kit";
import { MonthInput } from "../../../../ui-kit/inputs/month-input";
import { LoanPeriodProps } from "./types";
import { loanValues, name } from "./constants";
import styles from "./styles.module.scss";

export const LoanPeriod = ({
  title,
  subtitle,
  values,
  handleChange,
  handleValid,
}: LoanPeriodProps) => {
  const { minValue, maxValue, defaultValue } = loanValues;

  useEffect(() => {
    values.month = defaultValue;
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>

      <div className={styles.range}>
        <RangeInput
          width={343}
          value={values.month}
          handleChange={handleChange}
          minValue={minValue}
          maxValue={maxValue}
          name={name}
        />
      </div>
      <div className={styles.input}>
        <MonthInput
          value={values.month}
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
