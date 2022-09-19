import * as React from 'react';
import { Footer } from '../../template-page/footer';
import { Header } from '../../template-page/header';
import { Telephone } from './telephone';
import { Title } from './title';
import { englishLanguage, russianLanguage } from './constants';
import styles from './styles.module.scss';

export const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Title text={englishLanguage.backButton} title={englishLanguage.title} />
      <div className={styles['inner-container']}>
        <div className={styles.category}>
          <div className={styles.subtitle}>
            <h2 className={styles['subtitle-text']}>{englishLanguage.subtitleInd}</h2>
            <span className={`${styles['subtitle-img']} ${styles.individuals}`} />
          </div>
          <p className={styles.text}>{englishLanguage.textInd}</p>
          <p className={styles.time}>{englishLanguage.timeInd}</p>
          <div className={styles.telephone}>
            <Telephone number={englishLanguage.numberFreeInd} text={englishLanguage.freeCalls} />
            <Telephone
              number={englishLanguage.numberInterInd}
              text={englishLanguage.internationalCalls}
            />
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.subtitle}>
            <h2 className={styles['subtitle-text']}>{englishLanguage.subtitleCards}</h2>
            <span className={`${styles['subtitle-img']} ${styles.cards}`} />
          </div>
          <p className={styles.text}>{englishLanguage.textCards}</p>
          <p className={styles.time}>{englishLanguage.timeCards}</p>
          <p className={styles.time}>{englishLanguage.timeCardsWeekend}</p>
          <div className={styles.telephone}>
            <Telephone number={englishLanguage.numberFreeCards} text={englishLanguage.freeCalls} />
            <Telephone
              number={englishLanguage.numberInterCards}
              text={englishLanguage.internationalCalls}
            />
          </div>
        </div>
        <div className={styles.notice}>{englishLanguage.notice}</div>
      </div>
      <Footer />
    </div>
  );
};
