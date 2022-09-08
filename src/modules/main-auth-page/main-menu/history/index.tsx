import * as React from 'react';
import { ContainerComponent } from '../container-component';
import { englishLanguage, russianLanguage } from './constants';
import s from './styles.module.scss';

export const History = () => {

  return (
    <div className={s.outerContainer}>
      <ContainerComponent title={englishLanguage.title}>
        <div className={s.content}>
          <div className={s.paymentLine}>
            <div className={s.dateTime}>
              <span className={s.date}>{englishLanguage.date1}</span>
              <span className={s.time}>{englishLanguage.time1}</span>
            </div>
            <div className={s.info}>
              <span className={`${s.icon} ${s.iconTransferBack}`} />
              <span className={s.text}>{englishLanguage.info1}</span>
            </div>
            <span className={s.type}>{englishLanguage.type1}</span>
            <span className={s.sum}>{englishLanguage.amount1}</span>
          </div>
          <div className={s.paymentLine}>
            <div className={s.dateTime}>
              <span className={s.date}>{englishLanguage.date2}</span>
              <span className={s.time}>{englishLanguage.time1}</span>
            </div>
            <div className={s.info}>
              <span className={`${s.icon} ${s.iconPayment}`} />
              <span className={s.text}>{englishLanguage.info2}</span>
            </div>
            <span className={s.type}>{englishLanguage.type2}</span>
            <span className={`${s.sum} ${s.negativeSum}`}>{englishLanguage.amount2}</span>
          </div>
          <div className={s.paymentLine}>
            <div className={s.dateTime}>
              <span className={s.date}>{englishLanguage.date2}</span>
              <span className={s.time}>{englishLanguage.time2}</span>
            </div>
            <div className={s.info}>
            <span className={`${s.icon} ${s.iconPayment}`} />
              <span className={s.text}>{englishLanguage.info3}</span>
            </div>
            <span className={s.type}>{englishLanguage.type2}</span>
            <span className={`${s.sum} ${s.negativeSum}`}>{englishLanguage.amount3}</span>
          </div>
        </div>
      </ContainerComponent>
    </div>
  );
};
