import * as React from 'react';
import { useState, useCallback } from 'react';
import { useFormValidation } from '../../../../hooks/useFormValidation';
import { SmsInput, ContinueButton } from '../../../../ui-kit';
import { SmsTimer } from './sms-timer';
import { russianLanguage } from './constants';
import { Props } from '../types';
import * as classes from './styles.module.scss';

export const SmsForm = ({ onNextStep, telephone }: Props) => {
  const [attempt, setAttempt] = useState<number>(1);
  const { values, handleChange, handleValid, valid } = useFormValidation();

  const handleNextStep = () => {
    onNextStep(values);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleNewAttempt = useCallback(() => {
    setAttempt(attempt + 1);
  }, [attempt]);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h3>
        {russianLanguage.titleText}
        {telephone}
      </h3>
      <SmsInput
        value={values.smsCode}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
      />
      <SmsTimer attempt={attempt} onAttempt={handleNewAttempt} />
      <ContinueButton
        isActive={valid.smsCode}
        handleClick={handleNextStep}
        text={russianLanguage.continueButtonText}
      />
    </form>
  );
};
