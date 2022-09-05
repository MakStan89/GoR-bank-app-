import * as React from 'react';
import { useState, useEffect } from 'react';
import { useFormValidation } from '../validation';
import { PasswordInput, ConfirmPasswordInput, ContinueButton } from '../../../../ui-kit';
import { russianLanguage } from './constants';
import { Props } from '../types';
import './styles.scss';

export const PasswordForm = ({ onNextStep }: Props) => {
  const [request, setRequest] = useState(null);
  const { values, handleChange, handleValid, valid } = useFormValidation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    values.password === values.confirm_password ? onNextStep(values) : setRequest(1);
  };

  useEffect(() => setRequest(null), [values]);

  return (
    <form className="password-form" onSubmit={handleSubmit}>
      <PasswordInput
        value={values.password}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
        isMessage={true}
      />
      <ConfirmPasswordInput
        value={values.confirm_password}
        handleChange={handleChange}
        handleValid={handleValid}
        request={request}
      />
      <ContinueButton
        isActive={valid.password && valid.confirm_password}
        text={russianLanguage.continueButtonText}
      />
    </form>
  );
};
