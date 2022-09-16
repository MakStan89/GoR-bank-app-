import * as React from "react";
import { LoanCard } from "../loan-card";
import { loans, noLoans, heading } from "../constants";
import { Loan } from "../types";
import styles from "./styles.modules.scss";

export const LoanList = () => {
  return (
    <section className={styles.loansPage}>
      <h2>{heading}</h2>
      {loans.length > 0 ? (
        <section className={styles.characterList}>
          {loans.map((loan: Loan) => (
            <LoanCard
              key={loan.id}
              id={loan.id}
              name={loan.name}
              description={loan.description}
              percent={loan.percent}
              image={loan.image}
            />
          ))}
        </section>
      ) : (
        <h2 className={styles.noLoans}>{noLoans}</h2>
      )}
    </section>
  );
};
