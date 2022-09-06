import * as React from 'react';
import { englishLanguage, russianLanguage } from "../../main-page/contacts/constants";
import { TelephoneFooter } from '../../main-page/telephone';
import s from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <div className={s.cards}>
          <h2 className={s.text}>{englishLanguage.subtitleCards}</h2>
          <p className={s.time}>{englishLanguage.timeCards}</p>
          <p className={s.time}>{englishLanguage.timeCardsWeekend}</p>
          <TelephoneFooter numberFree={englishLanguage.numberFreeCards} textFree={englishLanguage.freeCalls}
            numberInter={englishLanguage.numberInterCards} textInter={englishLanguage.internationalCalls} />
        </div>
        <div className={s.individuals}>
          <h2 className={s.text}>{englishLanguage.subtitleInd}</h2>
          <p className={s.time}>{englishLanguage.timeInd}</p>
          <TelephoneFooter numberFree={englishLanguage.numberFreeInd} textFree={englishLanguage.freeCalls}
            numberInter={englishLanguage.numberInterInd} textInter={englishLanguage.internationalCalls} />
        </div>
        <div className={s.address}>
          <h2 className={`${s.addressText} ${s.text}`}>{englishLanguage.legalAddress}</h2>
          <div className={s.addressLocation}>{englishLanguage.location}</div>
        </div>
        <div className={s.appLinks}>
          <button className={s.apple} />
          <button className={s.google} />
        </div>
      </div>
    </footer>
  );
};
