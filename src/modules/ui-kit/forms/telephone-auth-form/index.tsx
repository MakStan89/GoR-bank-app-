import * as React from 'react';
import { TelephoneInput, PasswordInput, ContinueButton } from '../..';
import { useFormValidation } from './validation';
import { russianLanguage } from '../constants';
import '../styles.scss';

export const AuthTelephoneForm = () => {
  const { values, handleChange, handleValid, valid } = useFormValidation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="main-form" noValidate onSubmit={handleSubmit}>
      <TelephoneInput
        value={values.telephone}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
      />
      <PasswordInput
        value={values.password}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
      />
      <ContinueButton
        isActive={valid.telephone && valid.password}
        text={russianLanguage.enterButtonText}
      />
    </form>
  );
};
