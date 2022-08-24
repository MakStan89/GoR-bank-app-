import * as React from 'react';
import { FC } from 'react';
import { Header } from './header/index';
import { Main } from './main';
import { Footer } from './footer';
import './styles.scss';

export const ClientRegister: FC = () => (
  <section className="register-page">
    <Header />
    <Main />
    <Footer />
  </section>
);
