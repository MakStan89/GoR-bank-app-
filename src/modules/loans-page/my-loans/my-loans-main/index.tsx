import * as React from "react";
import { LoansApplication } from "../my-loans-application";
import { LoansMessage } from "../my-loans-message";
import { loansInfo } from "./constants";
import { loansTitles } from "../constants";
import '../../my-loans/styles.scss';

export const LoansMain = () => {

  return (      
    <>
      <div className="wrapper loans">
        <h1 className="loans__title">{loansTitles.title}</h1>
        {
          (loansInfo.length > 0) ? (
            <div className="wrapper__list">
              <ol className="loans__list">
                {loansInfo.map((item) => (
                  <li className="loans__item" key={item.index}>
                  <div className="flex">
                    <span>{item.index}</span>
                    <div className="loans__item-main">
                      <span className="loans__item-name">{item.loanName}</span>
                      <span className="loans__item-duration">{item.duration}</span>
                    </div>
                  </div>
                  <span className="loans__item-amount">${item.amount}</span>
                  <span className="loans__item-more">{loansTitles.titleShowMore}</span>
                </li>
                ))}
              </ol>
            </div>
          ) : (
            <LoansMessage />
          )
        }            
      </div>
      <LoansApplication />
      <LoansMessage />
    </>
  )
}
