import * as React from 'react';
import { Props } from './types';
import styles from './styles.module.scss';

export const CloseButton = ({ handleClick }: Props) => {
  return <button className={styles.close} onClick={handleClick} />;
};
