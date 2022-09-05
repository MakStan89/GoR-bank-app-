import * as React from 'react';
import { Props } from './types';
import './styles.scss';

export const BackButton = ({ handleClick, text }: Props) => {
  return (
    <button className="back-button" onClick={handleClick}>
      {text}
    </button>
  );
};
