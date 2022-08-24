import * as React from 'react';
import { FC } from 'react';
import { TemplatePage } from '../template-page';
import { Main } from './main';

export const MainPage: FC = () => (
  <TemplatePage showFooter={false}>
    <Main />
  </TemplatePage>
);
