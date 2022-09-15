import * as React from "react";
import { LoanOptions } from "./loan-options";
import { IncomeOptions } from "./income-options";
import { ContinueButton } from "../../ui-kit";
import { useFormValidation } from "../../hooks/useFormValidation";
import { englishLanguage } from "./constants";
import styles from "./styles.module.scss";

export const ApplyLoanPage = () => {
  const { values, handleChange, handleValid, valid } = useFormValidation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>{englishLanguage.title}</span>
          <span className={styles.subtitle}>{englishLanguage.subtitle}</span>
          <span className={styles.subtitle}>{englishLanguage.subtitle2}</span>
        </div>
        <div className={styles.formcontainer}>
          <form className={styles.form} noValidate onSubmit={handleSubmit}>
            <LoanOptions
              values={values}
              handleChange={handleChange}
              handleValid={handleValid}
            />
            <IncomeOptions
              values={values}
              handleChange={handleChange}
              handleValid={handleValid}
            />
            <div className={styles.button}>
              <ContinueButton
                isActive={valid.ein}
                text={englishLanguage.buttonText}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
