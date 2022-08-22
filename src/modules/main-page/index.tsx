import * as React from 'react';
import { FC } from 'react';
import { Header } from './header/index';
import { Main } from './main';

export const MainPage: FC = () => (
  <>
    <Header />
    <Main />
  </>
);
