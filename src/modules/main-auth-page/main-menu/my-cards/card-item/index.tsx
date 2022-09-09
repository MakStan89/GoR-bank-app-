import * as React from "react";
import { CardsType } from "./types";
import s from './styles.module.scss';

export const CardItem = ({ id, name, logo, hiddenNumber, number, date, background, balance, system }: CardsType) => {
  return (
    <div className={s.card} >
      <p className={s.cardName}>{name}</p>
      <img className={s.logo} src={logo} alt={logo} />
      <img className={s.hiddenNumber} src={hiddenNumber} alt={hiddenNumber} />
      <p className={s.number}>{number.slice(12,)}</p>
      <p className={s.date}>{date}</p>
      <p className={s.balance}>{balance}</p>
      <img className={s.system} src={system} alt={system} />
    </div>
  );
};
