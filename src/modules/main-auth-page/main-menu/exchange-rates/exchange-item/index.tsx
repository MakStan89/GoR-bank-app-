import * as React from "react";
import { ItemExchange } from "./types";
import s from './styles.module.scss';

export const ExchangeItem = ({
  name,
  fullName,
  image,
  buying,
  selling,
}: ItemExchange) => {
  return (
    <div className={s.row}>
      <div className={s.currencyInfo}>
        <img src={image} alt={image} />
        <div className={s.currencyName}>
          <strong>{name}</strong>
          <label className={s.fullName}>{fullName}</label>
        </div>
      </div>
      <div className={s.currencyRates}>
        <div className={s.cost}>{buying}</div>
        <div className={s.cost}>{selling}</div>
      </div>
    </div>
  );
};
