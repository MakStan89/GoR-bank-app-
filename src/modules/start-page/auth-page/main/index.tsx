import * as React from 'react';
import { useState, useCallback } from 'react';
import { MainFormWrapper } from '../form';
import { Slider } from '../slider';
import { Registration } from '../../registration-popup';
import { PasswordRecovery } from '../../password-recovery-popup';
import { russianLanguage } from './constants';
import styles from './styles.module.scss';

export const Main = () => {
  const [isRegistrationOpen, setRegistrationOpen] = useState<boolean>(false);
  const [isRecoveryOpen, setRecoveryOpen] = useState<boolean>(false);

  const handleRegistrationOpen = useCallback(() => {
    setRegistrationOpen(true);
  }, [isRegistrationOpen]);
  const handleRecoveryOpen = useCallback(() => {
    setRecoveryOpen(true);
  }, [isRecoveryOpen]);
  const handlePopupCloseCLick = useCallback(() => {
    setRegistrationOpen(false);
    setRecoveryOpen(false);
  }, [isRegistrationOpen, isRecoveryOpen]);

  return (
    <section className={styles.main}>
      <Slider />
      <MainFormWrapper onRegistration={handleRegistrationOpen} onRecovery={handleRecoveryOpen} />
      <button className={styles.scroll} />
      <div className={styles.info}>
        <p>{russianLanguage.info}</p>
        <button className={styles.apple} />
        <button className={styles.google} />
      </div>
      <Registration
        onClose={handlePopupCloseCLick}
        isOpen={isRegistrationOpen}
        onRecovery={handleRecoveryOpen}
      />
      <PasswordRecovery
        onClose={handlePopupCloseCLick}
        isOpen={isRecoveryOpen}
        onRegistration={handleRegistrationOpen}
      />
    </section>
  );
};
