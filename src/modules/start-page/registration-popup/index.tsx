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

export const Registration = React.memo(({ isOpen, onClose }: Props) => {
  const [currentStep, setCurrentStep] = useState<Steps>(Steps.EnterInfo);

  const RegistrationPopupClassName = cn(isOpen ? styles['registration-open'] : styles.registration);

  const handleClosePopup = () => {
    onClose();
    setCurrentStep(Steps.EnterInfo);
  };
  const handleSuccess = () => {
    setCurrentStep(Steps.Success);
  };
  const handleJoin = () => {
    setCurrentStep(Steps.Auth);
  };

  return (
    <section className={RegistrationPopupClassName}>
      <Header />
      {currentStep === Steps.EnterInfo && (
        <Main onClose={handleClosePopup} onContinue={handleSuccess} onJoin={handleJoin} />
      )}
      {currentStep === Steps.Success && <SuccessPopup onContinue={handleJoin} />}
      {currentStep === Steps.Auth && <AuthFormWrapper onClose={handleClosePopup} />}
      <Footer />
    </section>
  );
});
