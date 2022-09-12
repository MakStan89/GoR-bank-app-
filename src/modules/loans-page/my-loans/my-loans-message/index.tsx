import * as React from "react";
import { loansMessageText } from "./constants";
import '../../my-loans/styles.scss';

export const LoansMessage = () => {

  return (         
    <div className="wrapper__list">
      <p className="loans__message">{loansMessageText}</p>
    </div>
  )
}
