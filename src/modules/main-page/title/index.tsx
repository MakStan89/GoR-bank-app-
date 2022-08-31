import * as React from 'react';
import { Props } from './types';
import { BackButton } from '../../ui-kit/buttons/back-button';
import './styles.scss';

export const Title = ({ handleClick, text, title }: Props) => {
  return (
    <div className="title-block container">
      <BackButton handleClick={handleClick} text={text} />
      <div className="title">{title}</div>
    </div>

  );
};