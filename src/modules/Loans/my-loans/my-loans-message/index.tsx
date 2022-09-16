import * as React from "react";
import { loansMessageText } from "./constants";
import styles from '../../my-loans/styles.module.scss';

export const LoansMessage = () => {

  return (         
    <div className={styles.wrapperList}>
      <p className={styles.loansMessage}>{loansMessageText}</p>
    </div>
  )
}
