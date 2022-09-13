import * as React from "react";
import { ApplyButton } from "../../../ui-kit/buttons/ApplyButton";
import { Loan } from "../types";
import { linkText, buttonText } from "../constants";
import styles from "./LoanCard.module.scss";

export const LoanCard = ({ name, description, percent, image }: Loan) => {
  const style = {
    "--descriptionWidth": image ? "50%" : "100%",
  } as React.CSSProperties;

  return (
    <article className={styles.loanCard}>
      <div className={styles.header}>
        <span>{name}</span>
        <span>{percent}</span>
      </div>
      <div className={styles.descriptionBlock}>
        <div className={styles.description} style={style}>
          <p>{description}</p>
          <li>
            <a href="#">{linkText}</a>
          </li>
          <ApplyButton text={buttonText} width="143px" height="48px" />
        </div>
        {image && (
          <div className={styles.image}>
            <img src={image} alt={name} />
          </div>
        )}
      </div>
    </article>
  );
};
