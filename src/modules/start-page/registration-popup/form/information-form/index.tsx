import * as React from 'react';
import { useState } from 'react';
import { useFormValidation } from '../../../../hooks/useFormValidation';
import {
  NameInput,
  SurnameInput,
  PatronymicInput,
  PassportInput,
  ContinueButton,
  RadioButton,
} from '../../../../ui-kit';
import { russianLanguage } from './constants';
import { Props } from '../types';
import styles from './styles.module.scss';

export const InformationForm = ({ onNextStep }: Props) => {
  const { values, handleChange, handleValid, valid } = useFormValidation();
  const [isResident, setIsResident] = useState<boolean>(null);
  const isValid =
    valid.name && valid.surname && valid.passport && valid.patronymic && isResident !== null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNextStep(values);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.container}>
        <NameInput value={values.name} handleChange={handleChange} handleValid={handleValid} />
        <PatronymicInput
          value={values.patronymic}
          handleChange={handleChange}
          handleValid={handleValid}
        />
      </div>
      <SurnameInput value={values.surname} handleChange={handleChange} handleValid={handleValid} />
      <PassportInput
        value={values.passport}
        handleChange={handleChange}
        handleValid={handleValid}
        labelText={russianLanguage.labelText}
        placeholderText={russianLanguage.placeholderText}
      />
      <div className={styles.buttons}>
        <RadioButton
          name="resident"
          text={russianLanguage.residentText}
          checked={isResident}
          onClick={() => setIsResident(true)}
          defaultColor={0}
          checkedColor={2}
        />
        <RadioButton
          name="notresident"
          text={russianLanguage.noresidentText}
          checked={isResident === false}
          onClick={() => setIsResident(false)}
          defaultColor={0}
          checkedColor={2}
        />
      </div>
      <ContinueButton isActive={isValid} text={russianLanguage.enterButtonText} />
    </form>
  );
};
