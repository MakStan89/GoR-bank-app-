import * as React from 'react';
import { TelephoneInput, PasswordInput, ContinueButton } from '../../../../ui-kit';
import { useFormValidation } from '../../../../hooks/useFormValidation';
import { russianLanguage } from './constants';
import styles from './styles.module.scss';

export const AuthTelephoneForm = () => {
  const { values, handleChange, handleValid, valid } = useFormValidation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <TelephoneInput
        value={values.telephone}
        handleChange={handleChange}
        handleValid={handleValid}
        request={null}
        labelText={russianLanguage.telephoneLabelText}
        placeholderText={russianLanguage.telephonePlaceholderText}
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
        isActive={valid.telephone && valid.password}
        text={russianLanguage.enterButtonText}
      />
    </form>
  );
};
