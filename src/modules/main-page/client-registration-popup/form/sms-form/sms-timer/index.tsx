import * as React from 'react';
import { useState, useEffect } from 'react';
import { russianLanguage } from './constants';
import { Props } from './types';

export const SmsTimer = ({ attempt, onAttempt }: Props) => {
  const [secondsCounter, setSecondsCounter] = useState<number>(29);
  const [minutesCounter, setMinutesCounter] = useState<number>(0);

  useEffect(() => {
    setSecondsCounter(attempt < 3 ? 29 : 59);
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
    <button className="attempt-button" onClick={onAttempt}>
      {russianLanguage.buttonText}
    </button>
  );
};
