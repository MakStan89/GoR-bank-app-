import * as React from 'react';
import { Link } from 'react-router-dom';
import { Props } from './types';
import { BackButton } from '../../../ui-kit';
import styles from './styles.module.scss';

export const Title = ({ handleClick, text, title }: Props) => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <BackButton handleClick={handleClick} text={text} />
      </Link>
      <div className={styles.title}>{title}</div>
    </div>
  );
};
