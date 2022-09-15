import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ContainerComponent } from '../container-component';
import { englishLanguage, russianLanguage } from './constants';
import styles from './styles.module.scss';

export const FeaturedServices = () => {

  return (
    <div className={styles['outer-container']}>
      <ContainerComponent title={englishLanguage.title}>
        <div className={styles.content}>
          <NavLink to="#" className={styles.service}>
            <div className={styles['icon-block']}>
              <span className={`${styles.icon} ${styles.icon1}`} />
            </div>
            <div className={styles['text-block']}>
              <span className={styles.text}>{englishLanguage.text1}</span>
            </div>
          </NavLink>
          <NavLink to="#" className={styles.service}>
            <div className={styles['icon-block']}>
              <span className={`${styles.icon} ${styles.icon2}`} />
            </div>
            <div className={styles['text-block']}>
              <span className={styles.text}>{englishLanguage.text2}</span>
            </div>
          </NavLink>
          <NavLink to="#" className={styles.service}>
            <div className={styles['icon-block']}>
              <span className={`${styles.icon} ${styles.icon3}`} />
            </div>
            <div className={styles['text-block']}>
              <span className={styles.text}>{englishLanguage.text3}</span>
            </div>
          </NavLink>
          <NavLink to="#" className={styles.service}>
            <div className={styles['icon-block']}>
              <span className={`${styles.icon} ${styles.icon4}`} />
            </div>
            <div className={styles['text-block']}>
              <span className={styles.text}>{englishLanguage.text4}</span>
            </div>
          </NavLink>
          <NavLink to="#" className={styles.service}>
            <div className={`${styles['icon-block']} ${styles['icon-block-add']}`}>
              <span className={`${styles.icon} ${styles['icon-add']}`} />
            </div>
            <div className={styles['text-block']}>
              <span className={styles.text}>{englishLanguage.textAdd}</span>
            </div>
          </NavLink>
        </div>
      </ContainerComponent>
    </div>
  );
};
