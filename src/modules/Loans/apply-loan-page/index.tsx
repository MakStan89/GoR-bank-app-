import * as React from "react";
import { useState } from "react";
import { LoanOptions } from "./loan-options";
import { IncomeOptions } from "./income-options";
import { ContinueButton } from "../../ui-kit";
import { useFormValidation } from "../../hooks/useFormValidation";
import { Modal } from "../../ui-kit/modal";
import { Header } from "../../template-page/header";
import { Footer } from "../../template-page/footer";
import { englishLanguage, applyStatus } from "./constants";
import applyLoanSuccess from "../../../content/icons/applyLoanSuccess.svg";
import applyLoanReject from "../../../content/icons/applyLoanReject.svg";
import styles from "./styles.module.scss";

export const ApplyLoanPage = () => {
  const { values, handleChange, handleValid, valid } = useFormValidation();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal((showModal: boolean) => !showModal);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />

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
                text={"Apply"}
                isActive={
                  valid.ein && valid.salary && valid.income && valid.expense
                }
                handleClick={handleClick}
              />
              <Modal showModal={showModal} setShowModal={setShowModal}>
                {applyStatus.isSuccess ? (
                  <>
                    <img src={applyLoanSuccess} alt={applyLoanSuccess} />
                    <span className={styles.span}>
                      {applyStatus.successTitle}
                    </span>
                  </>
                ) : (
                  <>
                    <img src={applyLoanReject} alt={applyLoanReject} />
                    <span className={styles.span}>
                      {applyStatus.rejectTitle}
                    </span>
                  </>
                )}
              </Modal>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};
