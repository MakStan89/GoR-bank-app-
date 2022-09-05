import * as React from 'react';
import cx from 'classnames';
import { TelephoneForm } from '../form/telephone-form';
import { SmsForm } from '../form/sms-form';
import { PasswordForm } from '../form/password-form';
import { SecurityQuestionForm } from '../form/security-question-form';
import { CloseButton, BackButton } from '../../../ui-kit';
import { russianLanguage } from './constants';
import { Props } from './types';
import './styles.scss';

export const Main = ({ onNextStep, onBack, onClose, currentStep, onJoin, formData }: Props) => {
  const stepClassName = (index: number) =>
    cx('step', {
      'step-active': currentStep === index + 1 || currentStep > index + 1,
    });

  return (
    <section className="register-container">
      <div className="button-container">
        <BackButton text={russianLanguage.backButtonText} handleClick={onBack} />
        <CloseButton handleClick={onClose} />
      </div>
      <div className="title-container">
        <h2>{russianLanguage.titleText}</h2>
        <div className="step-container">
          {russianLanguage.steps.map(
            (step, index) =>
              currentStep > 0 && (
                <div className={stepClassName(index)} key={index}>
                  <h3>{step}</h3>
                </div>
              )
          )}
        </div>
        {currentStep === 0 && <TelephoneForm onNextStep={onNextStep} onJoin={onJoin} />}
        {currentStep === 1 && <SmsForm onNextStep={onNextStep} telephone={formData.telephone} />}
        {currentStep === 2 && <PasswordForm onNextStep={onNextStep} />}
        {currentStep === 3 && <SecurityQuestionForm onNextStep={onNextStep} />}
      </div>
    </section>
  );
};
