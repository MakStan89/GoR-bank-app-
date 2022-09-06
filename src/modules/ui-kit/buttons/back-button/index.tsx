import * as React from 'react';
import { Props } from './types';
import s from './styles.module.scss';

export const BackButton = ({ handleClick, text }: Props) => {
  return (
    <button className={s.backButton} onClick={handleClick}>
      {text}
    </button>
  );
};