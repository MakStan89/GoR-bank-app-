import * as React from 'react';
import { PassportInput, PasswordInput, ContinueButton } from '../../../../ui-kit';
import { useFormValidation } from '../../../../hooks/useFormValidation';
import { russianLanguage } from './constants';
import './styles.scss';

export const AuthPassportForm = () => {
  const { values, handleChange, handleValid, valid } = useFormValidation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="main-form" noValidate onSubmit={handleSubmit}>
      <PassportInput
        value={values.passport}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
        labelText={russianLanguage.passportLabelText}
        placeholderText={russianLanguage.passportPlaceholderText}
      />
      <PasswordInput
        value={values.password}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
        labelText={russianLanguage.passwordLabelText}
        placeholderText={russianLanguage.passwordPlaceholderText}
      />
      <ContinueButton
        isActive={valid.passport && valid.password}
        text={russianLanguage.enterButtonText}
      />
    </form>
  );
};
