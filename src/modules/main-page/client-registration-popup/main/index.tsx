import * as React from 'react';
import cx from 'classnames';
import { TelephoneForm } from '../form/telephone-form';
import { SmsForm } from '../form/sms-form';
import { PasswordForm } from '../form/password-form';
import { SecurityQuestionForm } from '../form/security-question-form';
import { CloseButton, BackButton } from '../../../ui-kit';
import { russianLanguage } from './constants';
import { Props } from './types';
import * as classes from './styles.module.scss';

export const Main = ({ onNextStep, onBack, onClose, currentStep, onJoin, formData }: Props) => {
  const getStepClassName = (index: number) =>
    cx([classes.step], {
      [classes.stepActive]: currentStep === index + 1 || currentStep > index + 1,
    });

  const steps = russianLanguage.steps.map(
    (step, index) =>
      currentStep > 0 && (
        <div className={getStepClassName(index)} key={index}>
          <h3>{step}</h3>
        </div>
      )
  );

  return (
    <section className={classes.registration}>
      <div className={classes.buttons}>
        <BackButton text={russianLanguage.backButtonText} handleClick={onBack} />
        <CloseButton handleClick={onClose} />
      </div>
      <div className={classes.title}>
        <h2>{russianLanguage.titleText}</h2>
        <div className={classes.steps}>{steps}</div>
        {currentStep === 0 && <TelephoneForm onNextStep={onNextStep} onJoin={onJoin} />}
        {currentStep === 1 && <SmsForm onNextStep={onNextStep} telephone={formData.telephone} />}
        {currentStep === 2 && <PasswordForm onNextStep={onNextStep} />}
        {currentStep === 3 && <SecurityQuestionForm onNextStep={onNextStep} />}
      </div>
    </section>
  );
};
