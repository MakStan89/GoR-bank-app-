import * as React from 'react';
import { Props } from './types';
import * as classes from './styles.module.scss';

export const CloseButton = ({ handleClick }: Props) => {
  return <button className={classes.close} onClick={handleClick} />;
};
