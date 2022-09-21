import * as React from "react";
import { LoansApplication } from "../my-loans-application";
import { LoansMessage } from "../my-loans-message";
import { loansInfo } from "./constants";
import { loansTitles } from "../constants";
import styles from '../../my-loans/styles.module.scss';

export const LoansMain = () => {

  return (      
    <>
      <div className={`${styles.wrapper} ${styles.loans}`}>
        <h1 className={styles.loansTitle}>{loansTitles.title}</h1>
        {
          (loansInfo.length > 0) ? (
            <div className={styles.wrapperList}>
              <ol className={styles.loansList}>
                {loansInfo.map((item) => (
                  <li className={styles.loansItem} key={item.index}>
                  <div className={styles.flex}>
                    <span>{item.index}</span>
                    <div className={styles.loansItemMain}>
                      <span className={styles.loansItemName}>{item.loanName}</span>
                      <span className={styles.loansItemDuration}>{item.duration}</span>
                    </div>
                  </div>
                  <span className={styles.loansItemAmount}>${item.amount}</span>
                  <span className={styles.loansItemMore}>{loansTitles.titleShowMore}</span>
                </li>
                ))}
              </ol>
            </div>
          ) : (
            <LoansMessage />
          )
        }            
      </div>
      {/* временно, для визуальной проверки */}
      <LoansApplication />
      <LoansMessage />
    </>
  )
}
