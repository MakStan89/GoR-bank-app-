import * as React from 'react';
import { Footer } from '../../template-page/footer';
import { Header } from '../../template-page/header';
import { Telephone } from './telephone';
import { Title } from './title';
import { englishLanguage, russianLanguage } from './constants';
import s from './styles.module.scss';

export const Contacts = () => {
  return (
    <div className="wrapper">
      <Header />
      <Title text={englishLanguage.backButton} title={englishLanguage.title} />
      <div className={s.innerContainer}>
        <div className={s.category}>
          <div className={s.subtitle}>
            <h2 className={s.subtitleText}>{englishLanguage.subtitleInd}</h2>
            <span className={`${s.subtitleImg} ${s.individuals}`} />
          </div>
          <p className={s.text}>{englishLanguage.textInd}</p>
          <p className={s.time}>{englishLanguage.timeInd}</p>
          <div className={s.telephone}>
            <Telephone number={englishLanguage.numberFreeInd} text={englishLanguage.freeCalls} />
            <Telephone
              number={englishLanguage.numberInterInd}
              text={englishLanguage.internationalCalls}
            />
          </div>
        </div>
        <div className={s.category}>
          <div className={s.subtitle}>
            <h2 className={s.subtitleText}>{englishLanguage.subtitleCards}</h2>
            <span className={`${s.subtitleImg} ${s.cards}`} />
          </div>
          <p className={s.text}>{englishLanguage.textCards}</p>
          <p className={s.time}>{englishLanguage.timeCards}</p>
          <p className={s.time}>{englishLanguage.timeCardsWeekend}</p>
          <div className={s.telephone}>
            <Telephone number={englishLanguage.numberFreeCards} text={englishLanguage.freeCalls} />
            <Telephone
              number={englishLanguage.numberInterCards}
              text={englishLanguage.internationalCalls}
            />
          </div>
        </div>
        <div className={s.notice}>{englishLanguage.notice}</div>
      </div>
      <Footer />
    </div>
  );
};
