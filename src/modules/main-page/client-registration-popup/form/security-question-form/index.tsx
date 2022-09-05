import * as React from 'react';
import { useFormValidation } from './validation';
import { ContinueButton, QuestionTextArea, SecurityQuestionSelect } from '../../../../ui-kit';
import { russianLanguage } from './constants';
import { Props } from '../types';
import './styles.scss';

export const SecurityQuestionForm = ({ onNextStep }: Props) => {
  const { values, handleChange, handleSelect, handleValid, valid } = useFormValidation();

  const handleNextStep = () => {
    onNextStep(values);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <SecurityQuestionSelect onSelect={handleSelect} value={values.questions} />
      {values.questions === russianLanguage.questions[5] && (
        <QuestionTextArea
          name="question"
          text={russianLanguage.customQuestionText}
          value={values.question}
          handleChange={handleChange}
          handleValid={handleValid}
        />
      )}
      <QuestionTextArea
        name="answer"
        text={russianLanguage.defaultQuestionText}
        value={values.answer}
        handleChange={handleChange}
        handleValid={handleValid}
      />
      <ContinueButton
        isActive={
          values.questions === russianLanguage.questions[5]
            ? valid.question && valid.answer
            : valid.answer
        }
        handleClick={handleNextStep}
        text={russianLanguage.continueButtonText}
      />
    </form>
  );
};
