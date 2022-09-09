import * as React from 'react';
import cn from 'classnames';
import { Props } from './types';
import styles from './styles.module.scss';

export const ContinueButton = ({ handleClick, text, isActive }: Props) => {
  const ContinueButtonClassName = cn(isActive ? styles['accept-active'] : styles.accept);

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
