import * as React from 'react';
import { FC } from 'react';
import './Main.scss';
import { Form } from '../../../components/Form/Form';

export const Main: FC = () => (
  <section className="main-container">
    <div className="title">
      <h1>Мобильное приложение Affinity Online</h1>
      <p>Банк в вашем смартфоне</p>
      <button>Узнать больше</button>
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
      <p>Скачать мобильный банк Affinity Online</p>
      <button className="apple" />
      <button className="google" />
    </div>
  </section>
);
