import * as React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { russianLanguage } from './constants';
import { Props } from './types';
import styles from './styles.module.scss';

export const SecurityQuestionSelect = ({ value, onSelect }: Props) => {
  const [isOptionsOpen, setOptionsOpen] = useState<boolean>(false);

  const selectClassName = cn(isOptionsOpen ? styles['questions-open'] : styles.questions);

  const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    const { textContent } = e.target as HTMLDivElement;
    setOptionsOpen(false);
    onSelect(textContent);
  };
  const handleOptionsOpen = () => {
    setOptionsOpen(!isOptionsOpen);
  };

  const options = russianLanguage.questions.map((element, index) => (
    <div className={styles.question} onClick={handleSelect} key={index}>
      {element}
      <span className={styles.icon} />
    </div>
  ));

  return (
    <>
      <div className={styles.container} onClick={handleOptionsOpen}>
        <input className={styles.selected} name="questions" value={value ?? ''} readOnly />
        <span className={styles.toggle} />
        <label className={styles.label}>{russianLanguage.labelText}</label>
      </div>
      <div className={selectClassName}>{options}</div>
    </>
  );
};
