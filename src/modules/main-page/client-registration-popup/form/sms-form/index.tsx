import * as React from 'react';
import { useState } from 'react';
import { useFormValidation } from '../validation';
import { SmsInput, ContinueButton } from '../../../../ui-kit';
import { SmsTimer } from './sms-timer';
import { russianLanguage } from './constants';
import { Props } from '../types';
import './styles.scss';

export const SmsForm = ({ onNextStep, telephone }: Props) => {
  const [attempt, setAttempt] = useState<number>(1);
  const { values, handleChange, handleValid, valid } = useFormValidation();

  const handleNextStep = () => {
    onNextStep(values);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleNewAttempt = () => {
    setAttempt(attempt + 1);
  };

  return (
    <form className="sms-form" onSubmit={handleSubmit}>
      <h3>
        {russianLanguage.titleText}
        {telephone}
      </h3>
      <SmsInput
        value={values.sms_code}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
      />
      <SmsTimer attempt={attempt} onAttempt={handleNewAttempt} />
      <ContinueButton
        isActive={valid.sms_code}
        handleClick={handleNextStep}
        text={russianLanguage.continueButtonText}
      />
    </form>
  );
};
