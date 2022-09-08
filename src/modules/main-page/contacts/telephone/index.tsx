import * as React from 'react';
import { Props, PropsFooter } from './types';
import './styles.scss';

export const Telephone = ({ number, text }: Props) => {
  return (
    <div className="telephone-block">
      <span className="telephone-block-img" />
      <div className="telephone-block-item item">
        <div className="item-number">{number}</div>
        <div className="item-text">{text}</div>
      </div>
    </div>
  );
};

export const TelephoneFooter = ({ numberFree, textFree, numberInter, textInter }: PropsFooter) => {
  return (
    <div className="telephone-footer">
      <span className="telephone-block-img" />
      <div className="telephone-block-item item">
        <div className="item-number">{numberFree}</div>
        <div className="item-text">{textFree}</div>
      </div>
      <div className="telephone-block-item item">
        <div className="item-number">{numberInter}</div>
        <div className="item-text">{textInter}</div>
      </div>
    </div>
  );
};
