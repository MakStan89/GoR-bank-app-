import * as React from 'react';
import cx from 'classnames';
import { useState } from 'react';
import { TelephoneForm } from '../form/telephone-form';
import { InformationForm } from '../form/information-form';
import { SmsForm } from '../form/sms-form';
import { PasswordForm } from '../form/password-form';
import { SecurityQuestionForm } from '../form/security-question-form';
import { CloseButton, BackButton } from '../../../ui-kit';
import { russianLanguage } from './constants';
import { FormDataProps } from '../../../hooks/useFormValidation/types';
import { Props } from './types';
import styles from './styles.module.scss';

export const Main = ({ onClose, onContinue, onJoin }: Props) => {
  const [isClient, setIsClient] = useState<boolean>(true);
  const [infoStep, setInfoSteps] = useState<number>(0);
  const [formData, setFormData] = useState<FormDataProps>(null);

  const getStepClassName = (index: number) =>
    cx(styles.step, {
      [styles['step-active']]: infoStep >= index + 1,
    });

  const handleNextStep = (values: FormDataProps) => {
    setFormData({ ...formData, ...values });
    setInfoSteps(infoStep + 1);
  };
  const handleBackClick = () => {
    infoStep > 0 ? setInfoSteps(infoStep - 1) : onClose();
  };
  const handleCloseClick = () => {
    setInfoSteps(0);
    onClose();
  };

  const steps = () => {
    if (isClient) {
      return russianLanguage.clientSteps.map(
        (step, index) =>
          infoStep > 0 && (
            <div className={getStepClassName(index)} key={index}>
              <h3>{step}</h3>
            </div>
          )
      );
    } else {
      return russianLanguage.notClientSteps.map(
        (step, index) =>
          infoStep > 0 && (
            <div className={getStepClassName(index)} key={index}>
              <h3>{step}</h3>
            </div>
          )
      );
    }
  };
  const PageDisplay = () => {
    switch (infoStep) {
      case 0:
        return (
          <TelephoneForm onNextStep={handleNextStep} clientStatus={setIsClient} onJoin={onJoin} />
        );
      case 1:
        return <SmsForm onNextStep={handleNextStep} telephone={formData.telephone} />;
      case 2:
        return isClient ? (
          <PasswordForm onNextStep={handleNextStep} />
        ) : (
          <InformationForm onNextStep={handleNextStep} />
        );
      case 3:
        return isClient ? (
          <SecurityQuestionForm onNextStep={handleNextStep} />
        ) : (
          <PasswordForm onNextStep={handleNextStep} />
        );
      case 4:
        isClient && onContinue();
        return <SecurityQuestionForm onNextStep={handleNextStep} />;
      case 5:
        !isClient && onContinue();
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
        <div className={styles.steps}>{steps()}</div>
        {PageDisplay()}
      </div>
    </section>
  );
};
