import * as React from 'react';
import { Props, PropsFooter } from './types';
import s from './styles.module.scss';

export const Telephone = ({ number, text }: Props) => {
  return (
    <div className={s.telephoneBlock}>
      <span className={s.telephoneBlockImg}/>
      <div className={`${s.telephoneBlockItem} ${s.item}`}>
        <div className={s.itemNumber}>{number}</div>
        <div className={s.itemText}>{text}</div>
      </div>
    </div>
  );
};

export const TelephoneFooter = ({ numberFree, textFree, numberInter, textInter }: PropsFooter) => {
  return (
    <div className={s.telephoneFooter}>
      <span className={s.telephoneBlockImg}/>
      <div className={`${s.telephoneBlockItem} ${s.item}`}>
        <div className={s.itemNumber}>{numberFree}</div>
        <div className={s.itemText}>{textFree}</div>
      </div>
      <div className={`${s.telephoneBlockItem} ${s.item}`}>
        <div className={s.itemNumber}>{numberInter}</div>
        <div className={s.itemText}>{textInter}</div>
      </div>
    </div>
  );
};
