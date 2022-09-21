import * as React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { Header } from '../../template-page/header';
import { Main } from './main';
import { Footer } from './footer';
import { AuthFormWrapper } from './form/auth-form-wrapper';
import { SuccessPopup } from './popup';
import { Props, Steps } from './types';
import styles from './styles.module.scss';

export const PasswordRecovery = React.memo(({ isOpen, onClose, onRegistration }: Props) => {
  const [currentStep, setCurrentStep] = useState<Steps>(Steps.EnterInfo);

  const PasswordRecoveryPopupClassName = cn(isOpen ? styles['recovery-open'] : styles.recovery);

  const handleClosePopup = () => {
    onClose();
    setCurrentStep(Steps.EnterInfo);
  };
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleRegister = () => {
    onClose();
    onRegistration();
  };

  return (
    <section className={PasswordRecoveryPopupClassName}>
      <Header />
      {currentStep === Steps.EnterInfo && (
        <Main onClose={handleClosePopup} onContinue={handleNextStep} onRegister={handleRegister} />
      )}
      {currentStep === Steps.Success && <SuccessPopup onContinue={handleNextStep} />}
      {currentStep === Steps.Auth && (
        <AuthFormWrapper
          onClose={handleClosePopup}
          onRecoveryOpen={() => setCurrentStep(Steps.EnterInfo)}
        />
      )}
      <Footer />
    </section>
  );
});
