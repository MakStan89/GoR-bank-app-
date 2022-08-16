import * as React from 'react';
import { FC } from 'react';
import { Header } from './header/index';
import { Main } from './main';
import './styles.scss';

export const MainPage: FC = () => (
  <section className="main-page">
    <Header />
    <Main />
  </section>
);
