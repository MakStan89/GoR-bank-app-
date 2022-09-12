import * as React from "react";
import { loansApplicate } from "./constants";
import { loansTitles } from "../constants";
import '../../my-loans/styles.scss';

export const LoansApplication = () => {

  return (         
    <div className="wrapper wrapper--applicate">
      <h1 className="loans__title">{loansTitles.titleApplicate}</h1>
      <div className="wrapper__list">
        <ol className="loans__list">
          {loansApplicate.map((item) => (
            <li className="loans__item" key={item.index}>
              <div className="flex">
                <span>{item.index}</span>
                <div className="loans__item-main">
                  <span className="loans__item-name">{item.loanName}</span>
                  <span className="loans__item-duration">{item.duration}</span>
                </div>
              </div>
              <span className="loans__item-amount">${item.amount}</span>
              <div className="loans__item-status-box">
                <span className="loans__item-status">{loansTitles.titleStatus}</span>
                <span className="loans__item-status--process">{item.status}</span>
              </div>
              <span className="loans__item-more">{loansTitles.titleShowMore}</span>
            </li>
          ))}
        </ol>
      </div>      
    </div>
  )
}
