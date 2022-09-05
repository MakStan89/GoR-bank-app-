import * as React from 'react';
import { Props } from './types';
import './styles.scss';

export const CloseButton = ({ handleClick }: Props) => {
  return <button className="close-button" onClick={handleClick} />;
};
