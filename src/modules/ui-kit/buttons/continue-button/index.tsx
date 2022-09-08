import * as React from 'react';
import cn from 'classnames';
import { Props } from './types';
import './styles.scss';

export const ContinueButton = ({ handleClick, text, isActive }: Props) => {
  const ContinueButtonClassName = cn(isActive ? 'continue-active' : 'continue');

  return (
    <button
      type="submit"
      disabled={!isActive}
      className={ContinueButtonClassName}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
