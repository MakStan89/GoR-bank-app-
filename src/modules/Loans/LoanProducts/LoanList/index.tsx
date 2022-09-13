import * as React from "react";
import { LoanCard } from "../LoanCard";
import { loans, noLoans, heading } from "../constants";
import { Loan } from "../types";
import styles from "./LoanList.modules.scss";

export const LoanList = () => {
  return (
    <section className={styles.loansPage}>
      <h2>{heading}</h2>
      {loans.length > 0 ? (
        <section className={styles.characterList}>
          {loans.map((loan: Loan, index) => (
            <LoanCard
              key={index}
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
