import * as React from 'react';
import { englishLanguage, russianLanguage } from '../../main-page/contacts/constants';
import { TelephoneFooter } from '../../main-page/contacts/telephone';
import './styles.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="cards">
          <h2 className="text">{englishLanguage.subtitleCards}</h2>
          <p className="time">{englishLanguage.timeCards}</p>
          <p className="time">{englishLanguage.timeCardsWeekend}</p>
          <TelephoneFooter
            numberFree={englishLanguage.numberFreeCards}
            textFree={englishLanguage.freeCalls}
            numberInter={englishLanguage.numberInterCards}
            textInter={englishLanguage.internationalCalls}
          />
        </div>
        <div className="individuals">
          <h2 className="text">{englishLanguage.subtitleInd}</h2>
          <p className="time">{englishLanguage.timeInd}</p>
          <TelephoneFooter
            numberFree={englishLanguage.numberFreeInd}
            textFree={englishLanguage.freeCalls}
            numberInter={englishLanguage.numberInterInd}
            textInter={englishLanguage.internationalCalls}
          />
        </div>
        <div className="address">
          <h2 className="address-text text">{englishLanguage.legalAddress}</h2>
          <div className="address-location">{englishLanguage.location}</div>
        </div>
        <div className="app-links">
          <button className="apple" />
          <button className="google" />
        </div>
      </div>
    </footer>
  );
};
