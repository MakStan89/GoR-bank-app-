import * as React from 'react';
import { FC } from 'react';
import { russianLanguage } from './constants';
import { Form } from '../form';
import './styles.scss';

export const Main: FC = () => (
  <section className="main-container">
    <div className="title">
      <h1>{russianLanguage.title}</h1>
      <p>{russianLanguage.subtitle}</p>
      <button>{russianLanguage.buttonText}</button>
    </div>
    <div className="form-container">
      <Form />
    </div>
    <div className="pagination">
      <button id="1" />
      <button id="2" />
      <button id="3" />
      <button id="4" />
    </div>
    <button className="scroll" />
    <div className="info">
      <p>{russianLanguage.info}</p>
      <button className="apple" />
      <button className="google" />
    </div>
  </section>
);
