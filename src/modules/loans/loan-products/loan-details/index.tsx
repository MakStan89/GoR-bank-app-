import * as React from "react";
import { loans } from "../constants";
import { useParams } from "react-router-dom";
import { Scale } from "./components";
import { range } from "./constants";
import { ApplyButton } from "../../../ui-kit/buttons/apply-button";
import { buttonText } from "../constants";
import styles from "./styles.module.scss";

export const LoanDetails = () => {
  const { id } = useParams();
  let loan = loans.find((el) => el.id === id);
  return (
    <section className={styles.loanDetails}>
      <h1 className={styles.heading}>{loan.name}</h1>
      <table className={styles.table}>
        <colgroup className={styles.colgroup}>
          <col span={2} />
        </colgroup>
        <tbody>
          <tr className={styles.tableRow}>
            <th colSpan={2} className={styles.tableHeader}>
              {loan.creditTermsCart.title}
            </th>
          </tr>
          {loan.creditTermsCart.creditTerms.map((el) => (
            <tr key={el.id} className={styles.tableRow}>
              <td className={styles.cell}>{el.title}</td>
              <td className={styles.cell}>{el.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginBottom: "64px" }}>
        <Scale
          minAmount={range.minAmount}
          maxAmount={range.maxAmount}
          value={loan.layoutData.value}
        />
      </div>
      <div style={{ marginBottom: "80px" }}>
        <Scale
          minAmount={range.minPeriod}
          maxAmount={range.maxPeriod}
          value={loan.layoutData.period}
        />
      </div>
      <ApplyButton text={buttonText} width="343px" height="56px" />
    </section>
  );
};
