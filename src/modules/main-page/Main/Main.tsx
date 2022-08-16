import * as React from 'react';
import { FC } from 'react';
import './main.scss';
import { russian } from './constants';
import { Form } from '../Form/Form';

export const Main: FC = () => (
  <section className="main-container">
    <div className="title">
      <h1>{russian.title}</h1>
      <p>{russian.subtitle}</p>
      <button>{russian.buttonText}</button>
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
      <p>{russian.info}</p>
      <button className="apple" />
      <button className="google" />
    </div>
  </section>
);
