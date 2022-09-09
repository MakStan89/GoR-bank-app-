import * as React from "react";
import { LoanOptions } from "./loan-options";
import { englishLanguage } from "./constants";
import "./styles.scss";

export const ApplyLoanPage = () => {
  return (
    <>
      <LoanOptions
        title={englishLanguage.title}
        subtitle={englishLanguage.subtitle}
      />
    </>
  );
};
