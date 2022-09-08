import * as React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { Header } from '../../template-page/header';
import { Main } from './main';
import { Footer } from './footer';
import { AuthFormWrapper } from './form/auth-form-wrapper';
import { SuccessPopup } from './popup';
import { defaultFormData } from '../../hooks/useFormValidation/constants';
import { FormDataProps } from '../../hooks/useFormValidation/types';
import { Props, Steps } from './types';
import * as classes from './styles.module.scss';

export const ClientRegister = React.memo(({ isOpen, onClose }: Props) => {
  const [currentStep, setCurrentStep] = useState<number>(Steps.EnterTelephone);
  const [formData, setFormData] = useState<FormDataProps>(defaultFormData);

  const ClientRegisterPopupClassName = cn(isOpen ? classes.registrationOpen : classes.registration);

  const handleClosePopup = () => {
    onClose();
    setCurrentStep(Steps.EnterTelephone);
  };
  const handleBackClick = () => {
    currentStep == 0 ? handleClosePopup() : setCurrentStep(currentStep - 1);
  };
  const handleNextStep = (values: FormDataProps) => {
    setCurrentStep(currentStep + 1);
    setFormData({ ...formData, ...values });
  };
  const handleJoin = () => {
    setCurrentStep(Steps.Auth);
  };
  const handleSuccess = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <section className={ClientRegisterPopupClassName}>
      <Header isDark />
      {currentStep < Steps.Success && (
        <Main
          onClose={handleClosePopup}
          onJoin={handleJoin}
          onNextStep={handleNextStep}
          onBack={handleBackClick}
          currentStep={currentStep}
          formData={formData}
        />
      )}
      {currentStep === Steps.Success && <SuccessPopup onContinue={handleSuccess} />}
      {currentStep === Steps.Auth && <AuthFormWrapper onClose={handleClosePopup} />}
      <Footer />
    </section>
  );
});
