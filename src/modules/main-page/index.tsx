import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
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
        </Routes>
      </div>
      <Footer />
    </>
  );
};
