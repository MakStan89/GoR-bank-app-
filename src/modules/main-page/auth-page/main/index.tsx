import * as React from 'react';
import { useState, useCallback } from 'react';
import { MainFormWrapper } from '../form';
import { Slider } from '../slider';
import { ClientRegister } from '../../client-registration-popup';
import { russianLanguage } from './constants';
import styles from './styles.module.scss';

export const Main = () => {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);

  const handlePopupOpenCLick = useCallback(() => {
    setPopupOpen(true);
  }, [isPopupOpen]);

  const handlePopupCloseCLick = useCallback(() => {
    setPopupOpen(false);
  }, [isPopupOpen]);

  return (
    <section className={styles.main}>
      <Slider />
      <MainFormWrapper onRegisterPopupOpen={handlePopupOpenCLick} />
      <button className={styles.scroll} />
      <div className={styles.info}>
        <p>{russianLanguage.info}</p>
        <button className={styles.apple} />
        <button className={styles.google} />
      </div>
      <ClientRegister onClose={handlePopupCloseCLick} isOpen={isPopupOpen} />
    </section>
  );
};
