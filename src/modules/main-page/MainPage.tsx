import * as React from 'react';
import { FC } from 'react';
import './main-page.scss';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

export const MainPage: FC = () => (
  <section className="main-page">
    <Header />
    <Main />
  </section>
);
