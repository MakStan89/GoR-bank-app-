import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoanDetails } from '../loans/loan-products/loan-details';
import { LoanList } from '../loans/loan-products/loan-list';
import { Contacts } from '../start-page/contacts';
import { Exchange } from '../start-page/exchange';
import { Footer } from '../template-page/footer';
import { MainMenu } from './main-menu';
import { Navbar } from './navbar';
import styles from './styles.module.scss'

export const MainPage = () => (
  <Routes>
    <Route path="/*" element={<MainBlock />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/exchange" element={<Exchange />} />
  </Routes>
);

export const MainBlock = () => {

  return (
    <>
      <div className={styles.wrapper}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/loan_products" element={<LoanList />} />
          <Route path="/loan_products/:id" element={<LoanDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
