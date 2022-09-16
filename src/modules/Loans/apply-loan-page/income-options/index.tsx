import * as React from "react";
import { IncomeOptionProps } from "./types";
import { salaryAmount, expenseAmount, einNumber, title } from "./constants";
import { IncomeInput } from "../../../ui-kit";
import { EinInput } from "../../../ui-kit/inputs/ein-input";
import styles from "./styles.module.scss";

export const IncomeOptions = ({
  values,
  handleChange,
  handleValid,
}: IncomeOptionProps) => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}>{title.title}</span>
        <div className={styles.income}>
          <span className={styles.subtitle}>{salaryAmount.title}</span>
          <IncomeInput
            value={values.salary}
            handleChange={handleChange}
            handleValid={handleValid}
            request={null}
            name={salaryAmount.name}
            placeholder={salaryAmount.placeholder}
            minValue={salaryAmount.minValue}
            maxValue={salaryAmount.maxValue}
          />
        </div>
        <div className={styles.expense}>
          <span className={styles.subtitle}>{expenseAmount.title}</span>
          <IncomeInput
            value={values.expense}
            handleChange={handleChange}
            handleValid={handleValid}
            request={null}
            name={expenseAmount.name}
            placeholder={expenseAmount.placeholder}
            minValue={expenseAmount.minValue}
            maxValue={expenseAmount.maxValue}
          />
        </div>
        <div className={styles.ein}>
          <span className={styles.subtitle}>{einNumber.title}</span>
          <EinInput
            value={values.ein}
            handleChange={handleChange}
            handleValid={handleValid}
            request={null}
            name={einNumber.name}
            placeholder={einNumber.placeholder}
          />
        </div>
      </div>
    </>
  );
};
