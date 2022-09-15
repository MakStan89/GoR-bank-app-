import * as React from 'react';
import { useState, useEffect } from 'react';
import { russianLanguage, REFRESH_TIME, BLOCK_TIME } from './constants';
import { Props } from './types';
import styles from '../styles.module.scss';

export const SmsTimer = React.memo(({ attempt, onAttempt }: Props) => {
  const [secondsCounter, setSecondsCounter] = useState<number>(REFRESH_TIME);
  const [minutesCounter, setMinutesCounter] = useState<number>(0);

  useEffect(() => {
    setSecondsCounter(attempt < 3 ? REFRESH_TIME : BLOCK_TIME);
  }, [attempt]);

  useEffect(() => {
    const smsTimer =
      secondsCounter > 0 &&
      setTimeout(() => {
        setSecondsCounter(secondsCounter - 1);
      }, 50);
    return () => clearInterval(smsTimer);
  });

  return secondsCounter > 0 ? (
    <p>
      {russianLanguage.timerText}
      {minutesCounter}:{secondsCounter > 9 ? secondsCounter : `0${secondsCounter}`}
      {russianLanguage.secondsText}
    </p>
  ) : (
    <button className={styles.button} onClick={onAttempt}>
      {russianLanguage.buttonText}
    </button>
  );
});
