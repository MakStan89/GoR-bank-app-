import * as React from 'react';
import cx from 'classnames';
import { useState } from 'react';
import { PassportForm } from '../form/passport-form';
import { SmsForm } from '../form/sms-form';
import { PasswordForm } from '../form/password-form';
import { CloseButton, BackButton } from '../../../ui-kit';
import { russianLanguage } from './constants';
import { Props } from './types';
import styles from './styles.module.scss';

export const Main = ({ onClose, onContinue, onRegister }: Props) => {
  const [infoStep, setInfoSteps] = useState<number>(0);

  const getStepClassName = (index: number) =>
    cx(styles.step, {
      [styles['step-active']]: infoStep >= index,
    });

  const handleNextStep = () => {
    setInfoSteps(infoStep + 1);
  };
  const handleBackClick = () => {
    infoStep > 0 ? setInfoSteps(infoStep - 1) : onClose();
  };
  const handleCloseClick = () => {
    setInfoSteps(0);
    onClose();
  };

  const steps = russianLanguage.steps.map((step, index) => (
    <div className={getStepClassName(index)} key={index}>
      <h3>{step}</h3>
    </div>
  ));

  const PageDisplay = () => {
    switch (infoStep) {
      case 0:
        return <PassportForm onNextStep={handleNextStep} onRegister={onRegister} />;
      case 1:
        return <SmsForm onNextStep={handleNextStep} telephone={'1231231'} />;
      case 2:
        return <PasswordForm onNextStep={handleNextStep} />;
      case 3:
        onContinue();
        break;
    }
  };

  return (
    <section className={styles.registration}>
      <div className={styles.buttons}>
        <BackButton text={russianLanguage.backButtonText} handleClick={handleBackClick} />
        <CloseButton handleClick={handleCloseClick} />
      </div>
      <div className={styles.title}>
        <h2>{russianLanguage.titleText}</h2>
        <div className={styles.steps}>{steps}</div>
        {PageDisplay()}
      </div>
    </section>
  );
};
