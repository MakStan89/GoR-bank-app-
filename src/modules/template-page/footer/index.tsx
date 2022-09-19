import * as React from 'react';
import { englishLanguage, russianLanguage } from '../../start-page/contacts/constants';
import { TelephoneFooter } from '../../start-page/contacts/telephone';
import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles.cards}>
          <h2 className={styles.text}>{englishLanguage.subtitleCards}</h2>
          <p className={styles.time}>{englishLanguage.timeCards}</p>
          <p className={styles.time}>{englishLanguage.timeCardsWeekend}</p>
          <TelephoneFooter
            numberFree={englishLanguage.numberFreeCards}
            textFree={englishLanguage.freeCalls}
            numberInter={englishLanguage.numberInterCards}
            textInter={englishLanguage.internationalCalls}
          />
        </div>
        <div className={styles.individuals}>
          <h2 className={styles.text}>{englishLanguage.subtitleInd}</h2>
          <p className={styles.time}>{englishLanguage.timeInd}</p>
          <TelephoneFooter
            numberFree={englishLanguage.numberFreeInd}
            textFree={englishLanguage.freeCalls}
            numberInter={englishLanguage.numberInterInd}
            textInter={englishLanguage.internationalCalls}
          />
        </div>
        <div className={styles.address}>
          <h2 className={`${styles['address-text']} ${styles.text}`}>
            {englishLanguage.legalAddress}
          </h2>
          <div className={styles['address-location']}>{englishLanguage.location}</div>
        </div>
        <div className={styles['app-links']}>
          <button className={styles.apple} />
          <button className={styles.google} />
        </div>
      </div>
    </footer>
  );
};
