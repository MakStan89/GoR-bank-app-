import * as React from "react";
import { Link } from "react-router-dom";
import { ApplyButton } from "../../../ui-kit/buttons/apply-button";
import { Loan } from "../types";
import { linkText, buttonText } from "../constants";
import styles from "./styles.module.scss";

export const LoanCard = ({ id, name, description, percent, image }: Loan) => {
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
            <Link to={{ pathname: `/loan_products/${id}` }}>{linkText}</Link>
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
