import * as React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Props } from './types';

export const TemplatePage = ({ children, showFooter = true }: Props) => {
  return (
    <>
      <Header />
      {children}
      {showFooter && <Footer />}
    </>
  );
};
