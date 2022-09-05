import * as React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { Main } from './main';
import { Footer } from './footer';
import { AuthFormWrapper } from './form/auth-form';
import { SuccessPopup } from './popup';
import { defaultFormData } from './form/constants';
import { Props, FormDataProps } from './types';
import './styles.scss';
import { Header } from '../../template-page/header';

export const ClientRegister = ({ isOpen, onClose }: Props) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormDataProps>(defaultFormData);

  const ClientRegisterPopupClassName = cn(isOpen ? 'register-page-open' : 'register-page');

  const handleClosePopup = () => {
    onClose();
    setCurrentStep(0);
  };
  const handleBackClick = () => {
    currentStep == 0 ? handleClosePopup() : setCurrentStep(currentStep - 1);
  };
  const handleNextStep = (values: FormDataProps) => {
    setCurrentStep(currentStep + 1);
    setFormData({ ...formData, ...values });
  };
  const handleJoin = () => {
    setCurrentStep(5);
  };
  const handleSuccess = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <section className={ClientRegisterPopupClassName}>
      <Header isDark />
      {currentStep < 4 && (
        <Main
          onClose={handleClosePopup}
          onJoin={handleJoin}
          onNextStep={handleNextStep}
          onBack={handleBackClick}
          currentStep={currentStep}
          formData={formData}
        />
      )}
      {currentStep === 4 && <SuccessPopup onContinue={handleSuccess} />}
      {currentStep === 5 && <AuthFormWrapper onClose={handleClosePopup} />}
      <Footer />
    </section>
  );
};
