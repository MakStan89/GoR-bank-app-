import * as React from 'react';
import { Footer } from '../../template-page/footer';
import { Header } from '../../template-page/header';
import { Telephone } from './telephone';
import { Title } from './title';
import { englishLanguage, russianLanguage } from './constants';
import './styles.scss';

export const Contacts = () => {
  return (
    <div className="wrapper">
      <Header />
      <Title text={englishLanguage.backButton} title={englishLanguage.title} />
      <div className="inner-container">
        <div className="category">
          <div className="subtitle">
            <h2 className="subtitle-text">{englishLanguage.subtitleInd}</h2>
            <span className="subtitle-img individuals" />
          </div>
          <p className="text">{englishLanguage.textInd}</p>
          <p className="time">{englishLanguage.timeInd}</p>
          <div className="telephone">
            <Telephone number={englishLanguage.numberFreeInd} text={englishLanguage.freeCalls} />
            <Telephone
              number={englishLanguage.numberInterInd}
              text={englishLanguage.internationalCalls}
            />
          </div>
        </div>
        <div className="category">
          <div className="subtitle">
            <h2 className="subtitle-text">{englishLanguage.subtitleCards}</h2>
            <span className="subtitle-img cards" />
          </div>
          <p className="text">{englishLanguage.textCards}</p>
          <p className="time">{englishLanguage.timeCards}</p>
          <p className="time">{englishLanguage.timeCardsWeekend}</p>
          <div className="telephone">
            <Telephone number={englishLanguage.numberFreeCards} text={englishLanguage.freeCalls} />
            <Telephone
              number={englishLanguage.numberInterCards}
              text={englishLanguage.internationalCalls}
            />
          </div>
        </div>
        <div className="notice">{englishLanguage.notice}</div>
      </div>
      <Footer />
    </div>
  );
};
