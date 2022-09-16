import * as React from "react";
import { LoanAmount } from "./loan-amount";
import { LoanPeriod } from "./loan-period";
import { LoanProps } from "./types";
import { loanAmount, loanPeriod, title } from "./constants";
import styles from "./styles.module.scss";

export const LoanOptions = ({
  values,
  handleChange,
  handleValid,
}: LoanProps) => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}>{title.title}</span>
        <div className={styles.amount}>
          <LoanAmount
            title={loanAmount.title}
            subtitle={loanAmount.subtitle}
            values={values}
            handleChange={handleChange}
            handleValid={handleValid}
          />
        </div>
        <div className={styles.period}>
          <LoanPeriod
            title={loanPeriod.title}
            subtitle={loanPeriod.subtitle}
            values={values}
            handleChange={handleChange}
            handleValid={handleValid}
          />
        </div>
      </div>
    </>
  );
};
