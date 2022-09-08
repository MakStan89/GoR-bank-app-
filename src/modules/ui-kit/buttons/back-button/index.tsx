import * as React from 'react';
import { Props } from './types';
import * as classes from './styles.module.scss';

export const BackButton = ({ handleClick, text }: Props) => {
  return (
    <button className={classes.back} onClick={handleClick}>
      {text}
    </button>
  );
};
