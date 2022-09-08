import * as React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { russianLanguage } from './constants';
import { Props } from './types';
import './styles.scss';

export const SecurityQuestionSelect = ({ value, onSelect }: Props) => {
  const [isOptionsOpen, setOptionsOpen] = useState<boolean>(false);

  const selectClassName = cn(isOptionsOpen ? 'question-container-open' : 'question-container');

  const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const { textContent } = e.target as HTMLDivElement;
    setOptionsOpen(false);
    onSelect(textContent);
  };
  const handleOptionsOpen = () => {
    setOptionsOpen(!isOptionsOpen);
  };

  const options = russianLanguage.questions.map((element, index) => (
    <div className="question" onClick={handleSelect} key={index}>
      {element}
      <span className="question-icon" />
    </div>
  ));

  return (
    <>
      <div className="question-select" onClick={handleOptionsOpen}>
        <input className="question-input" name="questions" value={value ?? ''} readOnly />
        <span className="select-icon" />
        <label className="select-label">{russianLanguage.labelText}</label>
      </div>
      <div className={selectClassName}>{options}</div>
    </>
  );
};
