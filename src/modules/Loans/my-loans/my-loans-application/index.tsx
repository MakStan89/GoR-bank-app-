import * as React from "react";
import { useState } from "react";
import cn from 'classnames';
import { loansApplicate } from "./constants";
import { loansTitles } from "../constants";
import styles from '../../my-loans/styles.module.scss';

export const LoansApplication = () => {
  const [isStatus, setIsStatus] = useState<boolean>(true);

  const StatusBtnClassName = cn(isStatus ? styles.loansItemStatusProcess : styles.loansItemStatusRejected);
  
  return (         
    <div className={`${styles.wrapper} ${styles.wrapperApplicate}`}>
      <h1 className={styles.loansTitle}>{loansTitles.titleApplicate}</h1>
      <div className={styles.wrapperList}>
        <ol className={styles.loansList}>
          {loansApplicate.map((item) => (
            <li className={styles.loansItem} key={item.index}>
              <div className={styles.flex}>
                <span>{item.index}</span>
                <div className={styles.loansItemMain}>
                  <span className={styles.loansItemName}>{item.loanName}</span>
                  <span className={styles.loansItemDuration}>{item.duration}</span>
                </div>
              </div>
              <span className={styles.loansItemAmount}>${item.amount}</span>
              <div className={styles.loansItemStatusBox}>
                <span className={styles.loansItemStatus}>{loansTitles.titleStatus}</span>
                <span className={StatusBtnClassName}>
                  {(isStatus) ? (item.status.processing) : (item.status.rejected)}
                </span>
              </div>
              <span className={styles.loansItemMore}>{loansTitles.titleShowMore}</span>
            </li>
          ))}
        </ol>
      </div>      
    </div>
  )
}
